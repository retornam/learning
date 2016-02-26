/*
   complete StairCase which takes an integer, the height of the staircase as its argument and prints a staircase as shown in the example
 */
function StairCase(n) {
  var octothorpe = '';
  var spaces = Array(n+1).join(' ');
  var result = '';
  for (var i = 0; i < n; i++) {
    octothorpe += '#';
    spaces = spaces.substring(0, spaces.length-1);
    result = spaces + octothorpe;
    console.log(result); 
  }
}
