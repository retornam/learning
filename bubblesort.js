/* One of the first sorting algorithms I am trying to master.  It essentially forces larger elements to 'sink' to the bottom/back while inadvertently 'floating' smaller elements to the top/front of a list. This is done with numerous comparisons between one element in an array with its neighbor. */

var array = [5, 4, 2, 3, 1, 6];
var temp;
for (i = 0; i < array.length; i++) {
    if (array[i] > array[i++]){
	var temp = array[i];
	array[i] = array[i++];
	array[i++] = temp;
    }
}
console.log(array);