var count = 1;
var retrieveContent = function () {
  $.ajax({
    dataType: 'json',
    url: 'http://localhost:3000/v1/articles',
    success: function (data) {
      var articleCount = data.length;
      for (var i = 0; i < articleCount; i++) {
        if ($(window).scrollTop() === $(document).height() - $(window).height()) {
          $('#articles-container').append(
            "<h1 class='title'>" + data[i].title + "</h1>" +
            "<p class='author'><a href='#'>" + data[i].author + "</a></p>" +
            "<p class='tags'>TAGS: <a href='#'>" + data[i].tags + "</a></p>" +
            "<img class='img-responsive' src='" + data[i].imageUrl + "'/>" +
            "<p class='content'>" + data[i].content + "</p>"
            );
        }
      }
    }
  });
};

$(window).scroll(function () {
  retrieveContent();
});

retrieveContent();
