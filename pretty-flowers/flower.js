/* Properties */
// Passed-in values
function Flower(name, color, petals, leafCount, origin, isEdible, smellsPretty, image, comments) {
  
  this.name = name;
  this.color = color;
  this.petals = petals;
  this.leafCount = leafCount;
  this.origin = origin;
  this.isEdible = isEdible;
  this.smellsPretty= smellsPretty;
  this.image = image;
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
    $('li#name').append(" " + this.name);
    $('li#color').append(" " + this.color);
    $('li#petals').append(" " + this.petals);
    $('li#leaves').append(" " + this.leafCount);
    $('li#origin').append(" " + " " + this.origin);
    $('li#eat').append(" " + this.isEdible);
    $('li#smell').append(" " + " " + this.smellsPretty);
    $("#image").append('<img src="' + this.image + '">');
    $('li#comment').append(" " + this.comments);

  };
  // displays message to console
  this.giveFlower= function(){
    console.log("Here's a flower")
  };
}

var tableSixFlower = new Flower("Western Dahlia", "Pink", 64, 10, "Mexico", false, true, "http://i.imgur.com/vPbvW1Q.jpg?1", "This is my favorite flower! -Anonymous Pretty Flower user");
var tableSevenFlower = new Flower("Rose", "Rainbow", 13, 3, "The Castro", false, true, "http://i.imgur.com/2Z6xET0.jpg?1", "Showing my pride with an awesome flower! -Anonymous Pretty Flower user");


$(function(){
  tableSevenFlower.render()
});