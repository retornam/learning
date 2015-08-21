/* Properties */
// Passed-in values
function Flower(color, petals, smellsPretty, origin, name, image) {
  
  this.name = name;
  this.color = color;
  this.petals = petals;
  this.leafCount = 10;
  this.origin = origin;
  this.isEdible = false;
  this.smellsPretty= smellsPretty;
  this.comments = comments;

  //this.wiltFactor = 100; //0 is dead, 100 is fresh

/* Methods */
  this.sniff = function(){
    console.log("Sniff Sniff Sniff!");
  };
  // Demonstrates use of arguments with methods
  this.hasGoodSmell = function(answer) {
    if (answer) {
      return 'This flower smells amazing!';
    } else {
      return 'What a noxious weed!';
    }
  };
  // Demonstrates use of local object variables
  this.describe = function(answer) {
    alert("This flower is " + this.color + ".");
  }
  /// Demonstrates object to object interaction
  this.compare =  function(otherFlower) {
    return("My " + this.color + " flower is much prettier than your " +
      otherFlower.color + " flower :P");
  };
  // append html string to website 
  this.render = function() {
    $("#image").append('<img src="' + this.image + '">');
    $('li#name').append(this.name);
  };
  // displays message to console
  this.giveFlower= function(){
    console.log("Here's a flower")
  };
}
var flowerTable6 = new Flower("pink", 64, true, "Mexico", "Western Dahlia", "http://i.imgur.com/vPbvW1Q.jpg?1");
var flowerTable7 = new Flower("blue", 60, false, "SF", "Eastern Dahlia", "http://i.imgur.com/2Z6xET0.jpg?1");


$(function(){

});