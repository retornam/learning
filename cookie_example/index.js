var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var cookieCount = 1;
app.get("/", function (req, res) {
	res.cookie("TimesVisited:", cookieCount)
	res.send("Hello World");
	cookieCount++;
    });

var cookieCount = 0;
app.get("/cookiemonster", function (req, res) {
	res.cookie("wdi", 21);
	res.send("Come to my 127.0.0.1 and I’ll give you sudo access");
    });

app.get("/clearcookie", function (req, res) {
		res.cookie("wdi", 21);
		res.clearCookie("wdi", 21);

        res.send("Is your name Wi-fi? Because I'm really feeling a connection.");
    });

app.listen(3000, function () {
	console.log("Are you a computer keyboard? Because you're my type;)");
    });