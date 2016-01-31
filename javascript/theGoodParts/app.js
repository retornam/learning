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
/*
var fib = function (n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

for (var i = 0; i <= 10; i += 1) {
  document.writeln('// ' + i + ': ' + fib(i));
}
*/
var fibonacci = (function () {
  var memo = [0, 1];
  var fib = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
}());

document.writeln(fibonacci(1476));

// prototypal inheritance
var myMammal = {
  name : 'Herb the Mammal',
  get_name : function () {
    return this.name;
  },
  says : function () {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
  var i, s = '';
  for (i = 0; i < n; i++) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};
myCat.get_name = function () {
  return this,says() + ' ' + this.name + ' ' + this.says();
};

// regex is fun

/*
   ^ marks the beginning of a string
   [] indicates a character class
   A-Za-z is the char class contains 26 upper and 26 lowercase letters
   + indicates that the char class will be matched one or more times
   the group is followed by : which will be matched literally
   () indicates a capturing group
   (?:) indicates a noncapturing group
   \/ indicates that a / will be matched
   {0,3} 0,1,2 or 3 times
   ([0-9.\-A-Za-z]+) made up of one or more digits, letters, or . or - (which was escaped by \- to prevent confusion with a range hyphen)
   (?::(\d+))? optionally matches port number, which is a seq of digits preceded by a :
   \d reps a digit char-one or more digits
   [^?#]* class includes all chars except ? #
   * indicates that the char class is matched zero or more times
   #(.*) the . will march any char except a line-ending char
   $ end of the string
*/
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = '     ';
var i;

for (i = 0; i < names.length; i++) {
   document.writeln('<br>' + names[i] + ': ' + blanks.substring(names[i].length), result[i]);
}
