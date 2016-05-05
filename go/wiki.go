package main

// the value returned by FormValue is of type string which must be converted to []byte before it will fit into the Page Struct

import (
	"html/template"
	"io/ioutil"
	"net/http"
	"regexp"
)

// Wiki consists of interconnected pages
// The Body element is a []byte because that is the type expected by the io libraries
type Page struct {
	Title string
	Body  []byte
}

// The save() method takes care of persistent storage
// save takes its receiver p, a pointer to Page. It takes no parameters and returns a value of type error
// save returns an error to let the application handle if anything goes wrong while writing the file
func (p *Page) save() error {
	filename := p.Title + ".txt"
	return ioutil.WriteFile(filename, p.Body, 0600)
}

// loadPage() constructs the file name from the title parameter, reads the file's contents into a new variable body, and returns a pointer to a Page literal constructed with the proper titla and body values
func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

// viewHandler() extracts the page title from the r.URL.Path, the path component of the request URL
// the Path is re-sliced with [len("/view/"):] to drop the leading "/view/" component of the request path
// redirect function is there so the client can be taken to the edit page so that content may be created
func viewHandler(w http.ResponseWriter, r *http.Request, title string) {
	p, err := loadPage(title)
	if err != nil {
		http.Redirect(w, r, "/edit/"+title, http.StatusFound)
		return
	}
	renderTemplate(w, "view", p)
}

// editHandler() loads the page (or creates an empty Page struct) and displays an HTML form
func editHandler(w http.ResponseWriter, r *http.Request, title string) {
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	renderTemplate(w, "edit", p)
}

// saveHandler() handles the submission of forms located on edit pages
// the value returned by FormValue is of type string which must be converted to []byte before it will fit into the Page Struct
func saveHandler(w http.ResponseWriter, r *http.Request, title string) {
	body := r.FormValue("body")
	p := &Page{Title: title, Body: []byte(body)}
	err := p.save()
	if err != nil {
		// http.Error sentds a specified HTTP response code and error message
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.Redirect(w, r, "/view/"+title, http.StatusFound)
}

// template.Must is a convenience wrapper that panics when passed a non-nil error value and otherwise returns the *Template unaltered
// if the templates can't be loaded it will panic
// ParseFiles takes any number of string arguments that identify out template files and parses those files into templates that are named after the base file name
var templates = template.Must(template.ParseFiles("edit.html", "view.html"))

// templating code will read the contents of and return a *template.Template
func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	err := templates.ExecuteTemplate(w, tmpl+".html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

// regex is added to mitigate how a user can supply an arbitary path to be read/written on the server
// MustCompile will panic if the expression compilation fails, while Compile returns an error as a second parameter
var validPath = regexp.MustCompile("^/(edit|save|view)/([a-zA-Z0-9]+)$")

// the returned function is called a closure because it encloses values defined outside of it
// in this case, the variable fn (the single argument to makeHandler) is enclosed by the closure
// the variable fn will be one of our save, edit, or view handlers
// the closure returned by makeHandler() is a func that takes an http.ResponseWriter and http.Request
// the closure extracts the title from the req path and validates it with the TitleValidator regexp
// if the title is invalid, an error will be written to the ResponseWriter using the http.NotFound func
// if the title is valid, the enclosed handler func fn will be called with the ResponseWriter, Request, and title as args
func makeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		m := validPath.FindStringSubmatch(r.URL.Path)
		if m == nil {
			http.NotFound(w, r)
			return
		}
		fn(w, r, m[2])
	}
}

func main() {
	http.HandleFunc("/view/", makeHandler(viewHandler))
	http.HandleFunc("/edit/", makeHandler(editHandler))
	http.HandleFunc("/save/", makeHandler(saveHandler))

	http.ListenAndServe(":8080", nil)
}
