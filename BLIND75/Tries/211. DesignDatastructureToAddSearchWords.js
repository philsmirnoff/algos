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


solution N2
Intuition
The problem requires us to store and search words efficiently with support for wildcard . characters. A Trie (prefix tree) is ideal for fast insertions and lookups, while DFS allows flexible pattern matching.

Approach
image.png

We build a Trie where each node represents a character. For normal characters, we traverse down matching branches. For the . wildcard, we recursively check all children nodes. If any path returns true, the word exists.

Complexity
Time Complexity:

Add Word: ( O(n) ), where n is the length of the word.
Search: Worst-case ( O(m \cdot 26^d) ), where m is word length, d is number of wildcards.
Space Complexity:

( O(n \cdot k) ), where k is the average word length and n is the number of words.
Code
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return node.isEndOfWord;
            const char = word[i];
            if (char === '.') {
                for (let child of Object.values(node.children)) {
                    if (dfs(child, i + 1)) return true;
                }
                return false;
            } else {
                if (!node.children[char]) return false;
                return dfs(node.children[char], i + 1);
            }
        };
        return dfs(this.root, 0);
    }
}


with explaination:
// Define the TrieNode class to represent each node in the Trie
class TrieNode {
  constructor() {
      // This will store the child nodes (characters) for the current node
      this.children = {};  // Dictionary that maps a character to its corresponding TrieNode

      // This flag indicates whether this node represents the end of a valid word
      this.isEnd = false;  // False by default. Set to true when the node is the end of a word.
  }
}

// Define the WordDictionary class that uses the TrieNode class to store and search words
var WordDictionary = function() {
  // Initialize the WordDictionary with the root TrieNode
  this.root = new TrieNode();  // The root of the Trie doesn't correspond to any character
};

// Add a word to the WordDictionary
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;  // Start from the root of the Trie

  // Loop through each character of the word and insert it into the Trie
  for (let char of word) {
      // If a child node corresponding to the character doesn't exist, create a new TrieNode for that character
      if (!node.children[char]) {
          node.children[char] = new TrieNode();  // Create a new TrieNode for the character
      }

      // Move to the child node corresponding to the current character
      node = node.children[char];  // Update the node to its child node
  }

  // After the last character, mark the current node as the end of a valid word
  node.isEnd = true;  // Mark this node as the end of a word
};

// Search for a word (or pattern with wildcards) in the WordDictionary
WordDictionary.prototype.search = function(word) {
  // Helper function that performs Depth-First Search (DFS) recursively
  const dfs = (node, i) => {
      // If we've reached the end of the word, check if the current node is the end of a valid word
      if (i === word.length) return node.isEnd;

      // Get the current character in the word at position i
      const char = word[i];

      // If the current character is a dot (wildcard), we need to check all possible child nodes
      if (char === '.') {
          // Iterate over all child nodes at the current level in the Trie
          for (let child of Object.values(node.children)) {
              // Recursively call dfs for each child node, moving to the next character in the word (i + 1)
              if (dfs(child, i + 1)) return true;  // If any child leads to a match, return true
          }
          // If no child matches, return false
          return false;
      } else {
          // If it's a regular character (not a dot), we proceed to search the corresponding child node
          // Check if the current node has a child node corresponding to the current character
          if (!node.children[char]) return false;  // If the child node doesn't exist, return false

          // Continue searching by moving to the child node and incrementing the index (i + 1)
          return dfs(node.children[char], i + 1);
      }
  };

  // Start the DFS search from the root node, beginning at the first character of the word (index 0)
  return dfs(this.root, 0);
};

/**
* Example usage:
*
* var obj = new WordDictionary();  // Create a new instance of WordDictionary
* obj.addWord("bad");  // Add the word "bad" to the dictionary
* obj.addWord("mad");  // Add the word "mad" to the dictionary
* obj.addWord("dad");  // Add the word "dad" to the dictionary
*
* var param_2 = obj.search("pad");  // Search for the word "pad" (should return false)
* var param_3 = obj.search("bad");  // Search for the word "bad" (should return true)
* var param_4 = obj.search(".ad");  // Search for the word with a dot wildcard (should return true)
* var param_5 = obj.search("b..");  // Search for the word with a dot wildcard (should return true)
*
* console.log(param_2);  // Output: false
* console.log(param_3);  // Output: true
* console.log(param_4);  // Output: true
* console.log(param_5);  // Output: true
*/
