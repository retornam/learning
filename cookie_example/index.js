var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/", function (req, res) {
	res.send("I LOVE COOKIES");
    });

app.listen(3000, function () {
	console.log("Now running another sexy app on port 3000");
    });