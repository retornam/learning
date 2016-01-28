document.writeln("Hello world!");

// method definition
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

var empty_obj = {};

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};

var flight = {
  airline: "Oceanic",
  number: 825,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angelos"
  }
};

stooge["first-name"] // "Jerome"
flight.departure.IATA // "SYD"

var middle = stooge["middle-name"] || "(none)";
// objects are passed around by reference, that are never copied
