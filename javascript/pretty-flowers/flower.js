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
var vase = {
 flowers: [
   {
     image:'http://i.imgur.com/EURHqIk.jpg?1',
     flowerName: 'Dahlia', 
     color: 'Maroon',
     petals: 109,
     leafCount: 8,
     origin: 'Mexico',
     isEdible: true,
     smellsPretty: true,
     comments: 'Dahlias are most commonly used for decorative purposes ' 
     + 'on cakes, tarts and pastries. Serve alongside cheese or desserts'
     + ' as a garnish. Remove the petals of the Dahlia and add them to '
     + 'grain or green salads to add a pop of color.'
   },
   {
     image: 'http://i.imgur.com/wgfLAAA.jpg',
     flowerName: 'Sunflower', 
     color: 'yellow', 
     petals: 50, 
     leafCount: 3, 
     origin: 'California', 
     isEdible: true,
     smellsPretty: false,
     comments: 'Sunflowers are especially well '
     + 'known for their symmetry based on Fibonacci numbers and the Golden angle.'
   },
   {
     image: 'http://i.imgur.com/AQCycsq.jpg',
     flowerName: 'Western Dahlia', 
     color: 'orange', 
     petals: 100, 
     leafCount: 10, 
     origin: 'Mexico', 
     isEdible: true,
     smellsPretty: true,
     comments: 'It is believed that these flowers were given their name by Antonio '
     + 'José Cavanilles, Director of the Royal Gardens in Madrid. He actually named the flower after another botanist named Anders Dahl.'
   },
   {
     image: 'http://i.imgur.com/HnT0QEo.jpg',
     flowerName: 'daisy', 
     color: 'pink', 
     petals: 89, 
     leafCount: 0, 
     origin: 'Canary Islands', 
     isEdible: true,
     smellsPretty: true,
     comments: 'Marguerite daisy flowers measure about 2 ½ inches across and '
     + 'come in shades of white, pink or yellow. Most varieties feature a '
     + 'single layer of radiating petals around a large central eye, giving '
     + 'the plant its daisylike look. Marguerite daisy plants grow to about '
     + '3 feet tall and can spread over 3 feet of bed. The deep green foliage '
     + 'is highly fragrant and when smoked makes you giggle. The leaves are deeply '
     + 'cut, which gives the plant its full appearance and provides texture in the garden bed.'
   },
   {
     image: 'http://i.imgur.com/HnT0QEo.jpg',
     flowerName: 'Hydrangea', 
     color: 'Blue-green', 
     petals: 60, 
     leafCount: 2, 
     origin: 'SE Asia', 
     isEdible: false,
     smellsPretty: true,
     comments: 'Used most often as an ornamental plant, these large, and beautiful flowers '
     + 'are toxic. However, that doesn\'t stop some from brewing these cyanide laced blossoms into tea.'
   },
       {
     image: 'http://i.imgur.com/HnT0QEo.jpg',
     flowerName: 'Rose', 
     color: 'red', 
     petals: 32, 
     leafCount: 3, 
     origin: 'Asia', 
     isEdible: true,
     smellsPretty: true,
     comments: 'Used most often as an ornamental plant, these large, and beautiful flowers '
     + 'are toxic. However, that doesn\'t stop some from brewing these cyanide laced blossoms into tea.'
   }
 ]
}

var tableSixFlower = new Flower("Western Dahlia", "Pink", 64, 10, "Mexico", false, true, "http://i.imgur.com/vPbvW1Q.jpg?1", "This is my favorite flower! -Anonymous Pretty Flower user");
var tableSevenFlower = new Flower("Rose", "Rainbow", 13, 3, "The Castro", false, true, "http://i.imgur.com/2Z6xET0.jpg?1", "Showing my pride with an awesome flower! -Anonymous Pretty Flower user");

$(function(){
  tableSixFlower.render()
});
