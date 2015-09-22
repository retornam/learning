function clone (obj) {
 var objClone = {};
 for (attr in obj) {
	 objClone[attr] = obj[attr]
 }
 return objClone;
}
var source = {
	foo: 1,
	bar: "a"
}
var c = clone (source);
c !== source;
c.foo === source.foo;
c.bar === source.bar;
