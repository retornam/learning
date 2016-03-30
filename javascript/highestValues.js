// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.
// function that finds the maximum 2 values of an array

var arr = [-9, -8, 32, -10];

function twoHighestValues (array) {
  var highest = array[0];
  var secondHighest;
  for (var i = 0; i < array.length; i++) {
    if (highest < array[i]) {
      secondHighest = highest;
      highest = array[i];
    }
    else if (secondHighest < array[i]) {
      secondHighest = array[i];
    }
  }
  return [highest, secondHighest];
}

console.log(twoHighestValues(arr));
