function Trie(){
	//TODO: implement a root node here automatically
	//This will be the only node without a letter assigned to it
}

function Node(){
 	// TODO: a variable representing a single character (a-z only)
 	// TODO: internal data structures to hold all possible children nodes
 	// TODO: an indication variable for whether or not the node contains the last letter in a valid word
}
Trie.prototype.add = function(word) {
	//TODO: integrate the word into the Trie
	return true;
};

Trie.prototype.exists = function(word) {
    console.log('---Begin---')
	// TODO: prints the Trie structure to the console breadth first not depth first
	console.log('---End---')
};

Trie.prototype.printTrieList = function(word) {
	var wordList = [];
	// TODO: prints all of the words contained within the Trie
	console.log("Total List Length: " + wordList.length)
};

//Starter code:
var trie = new Trie();
var wordList = ['a', 'ace', 'aces', 'aced', 'acre', 'acres', 'act', 'acted', 'acting', 'acts'];

//adds above array
wordList.forEach(function(word) {
	trie.add(word);
})

// checks for existence of words previously added (all should be true)
var first = trie.exists('ace');
var second = trie.exists('acre');
var third = trie.exists('acted');

// prints out tree structure
trie.printPrettyTrie();

// prints out full list of words
trie.printTrieList();
