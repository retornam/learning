package main

import "fmt"

func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  a, b := swap("hello", "world")
    fmt.Println(a, b)
}

// loops
/*
sum := 0
for i := 0; i < 10; i++ {
  sum += i
}
fmt.Println(sum)
}

sum := 1
for ; sum < 1000; {
  sum += sum
}
fmt.Println(sum)
*/

  defer fmt.Println("cool")
    
  fmt.Println("this is")

  fmt.Println("counting")

  for i := 0; i < 10; i++ {
    defer fmt.Println(i)
  }

fmt.Println("done")

// pointers

i, j := 42, 2701

p := &i         // point to i
fmt.Println(*p) // read i through the pointer
*p = 21         // set i through the pointer
fmt.Println(i)  // see the new value of i

p = &j         // point to j
*p = *p / 37   // divide j through the pointer
fmt.Println(j) // see the new value of j


// structs (accessed using a dot)
type Vertex struct {
  X int
  Y int
}

func main() {
  fmt.Println(Vertex{1, 2})
}
// --> {1 2}

// arrays
var a [2]string
a[0] = "Hello"
a[1] = "World"
fmt.Println(a[0], a[1])
fmt.Println(a)

primes := [6]int{2, 3, 5, 7, 11, 13}
fmt.Println(primes)

// these are equivalent
a[0:10]
a[:10]
a[0:]
a[:]
