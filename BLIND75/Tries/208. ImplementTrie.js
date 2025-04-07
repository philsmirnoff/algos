208. Implement Trie (Prefix Tree)
Medium

7058

91

Add to List

Share
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True


// solution
var Trie = function() {
    this.children = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var cur = this; // this is the root of the trie tree
    for (var i = 0; i < word.length; i++) {
        // from each character in the word from the left to right we will put the character in the c
        var c = word[i]
        // we will check if the character exist in thildren
        if (!cur.children[c]) {
            // if not we can initialize a new Trie node that has empty children
            cur.children[c] = new Trie();

        }
        // now we can travel to the next node
        cur = cur.children[c];
    }
    // at the end we will put
    cur.isWord = true;
    // to mark that this word exist in the trie tree

};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    // for the search we will do similiar thing
    var cur = this;
    for (var i = 0; i < word.length; i++) {
        var c = word[i];
        // we will try to find the character in the current node children
        if(!cur.children[c]) {
            return false;
        }
        // otherwise we will continue to travel to the next layer
        cur = cur.children[c];
    }
    // at the end we want see if current word was used as word
    return cur.isWord === true
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    // startswith we will have similiar approach
    var cur = this;
    for (var i = 0; i < prefix.length; i++) {
        var c = prefix[i];
         if(!cur.children[c]) {
             return false;
        }
          cur = cur.children[c];
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
