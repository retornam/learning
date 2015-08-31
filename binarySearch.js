var classmates = ["Bradley", "Daniel", "Darragh", "Eric", "Francis", "Heather", "Humberto", "Ian", "James", "Jamie", "Justin", "Justin", "Katie", "Keala", "Kristian", "Lisa", "Marcel", "Melissa", "Nathan", "Neil", "Nick", "Olivia", "Peter", "Sakina", "Sarad", "Sharon", "Stephen", "Terry", "Tika", "Tom", "William"];

function findClassmate (classmate) {

    var min, max, mid;

    mid = classmates.length / 2;
    max = classmates.length - 1;
    min = classmates[0];

    if (mid === classmate){
	return mid;
    } else if (mid > classmate) {
	
}