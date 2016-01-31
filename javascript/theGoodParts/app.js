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

// recursion
var hanoi = function hanoi(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(3, 'Src', 'Aux', 'Dst');

// cascade

// curry
Function.method('curry', function () {
  var slice = Array.prototype.slice,
  args = slice.apply(arguments),
  that = this;
  return function () {
    return that.apply(null, args.concat(slice.applu(arguments)));
  }
});

// memoization
var fib = function (n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

for (var i = 0; i <= 100; i += 1) {
  document.writeln('// ' + i + ': ' + fib(i));
}
