var classmates = ["Bradley", "Daniel", "Darragh", "Eric", "Francis", "Heather", "Humberto", "Ian", "James", "Jamie", "Justin", "Justin", "Katie", "Keala", "Kristian", "Lisa", "Marcel", "Melissa", "Nathan", "Neil", "Nick", "Olivia", "Peter", "Sakina", "Sarad", "Sharon", "Stephen", "Terry", "Tika", "Tom", "William"];

function findClassmate (classmate) {

    var min, max, mid;

    mid = classmates.length / 2;
    max = classmates.length - 1;
    min = classmates[0];
    currentElement = mid[0];

    if (currentElement === classmate){
	return mid;
    } else if (mid > classmate) {
	min = mid + 1;
	    //cut off last half of array
	    //reassign mid, min, max
      return findClassmate();
    } else if (mid < classmate) {
        max = mid - 1;
	    //cut off first half of array           
	    //reassign mid, min, max 
      return findClassmate();
    }
}

console.log(findClassmate('Tika'));

/*
function binarySearchR(searchArray, searchElement, min, max) {
  if (max < min) { return null; }

  var mid = Math.floor((min + max) / 2);

  if (searchArray[mid] > searchElement) {
    return binarySearchR(searchArray, searchElement, min, mid - 1);
  }

  if (searchArray[mid] < searchElement) {
    return binarySearchR(searchArray, searchElement, mid + 1, max);
  }
  return mid;
}
*/