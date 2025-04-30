class TrieNode {
  constructor() {
    // Using an object to represent children nodes.
    this.children = {};
    // Boolean flag to check if current node represents end of a word.
    this.isEnd = false;
  }
}

class Solution {
  constructor() {
    // Initializing the root node.
    this.root = new TrieNode();
  }

  // Function to add a word to the trie.
  addWord(word) {
    let node = this.root;
    for (let ch of word) {
      // If current character is not a child of current node, add it.
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      // Move to the next node for the next character.
      node = node.children[ch];
    }
    // After processing all characters of the word, mark current node as end of a word.
    node.isEnd = true;
  }

  // Recursive helper function to search in the trie from a given node.
  searchInNode(word, node) {
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      // Handling wildcard character.
      if (ch === '.') {
        // Loop through all children of the current node.
        for (let child in node.children) {
          // Recursively try to match the remaining part of the word.
          if (this.searchInNode(word.slice(i+1), node.children[child])) {
            return true;
          }
        }
        return false;
      }
      // If current character doesn't exist in current node's children, return false.
      if (!node.children[ch]) {
        return false;
      }
      // Move to the next node.
      node = node.children[ch];
    }
    // After processing all characters, check if we reached the end of a word.
    return node.isEnd;
  }

  // Function to search a word in the trie, considering '.' as wildcard.
  search(word) {
    return this.searchInNode(word, this.root);
  }
}

// Testing the Solution class.
const obj = new Solution();
obj.addWord("apple");
obj.addWord("banana");
console.log(obj.search("apple"));  // true
console.log(obj.search("....."));  // true
