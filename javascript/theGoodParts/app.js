document.writeln("Hello world!");

// method definition
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
