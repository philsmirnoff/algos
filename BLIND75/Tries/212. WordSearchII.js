class TrieNode {
  constructor() {
      this.children = {};  // A dictionary to store child nodes for each character.
      this.isWord = false;  // A flag to mark if the node represents the end of a valid word.
  }

  // Method to add a word to the Trie.
  addWord(word) {
      let node = this;  // Start from the current TrieNode (the root when calling this).

      // Loop through each character in the word.
      for (let c of word) {
          // If the current character doesn't exist in the children, create a new TrieNode for it.
          if (!node.children[c]) {
              node.children[c] = new TrieNode();  // Create a new TrieNode for the character.
          }
          node = node.children[c];  // Move to the child node for the next character.
      }

      node.isWord = true;  // Mark the last node as the end of a valid word.
  }
}

/**
* @param {character[][]} board
* @param {string[]} words
* @return {string[]}
*/
var findWords = function(board, words) {
  const root = new TrieNode();

  // Add all words to the Trie
  for (const word of words) {
      root.addWord(word);  // Add each word to the Trie using addWord
  }

  const ROWS = board.length, COLS = board[0].length;
  const res = new Set();  // Set to store the result words

  // Step 3: Depth-First Search (DFS) function to explore the board
  const dfs = (r, c, node, word) => {
      // Base case: Check if we are out of bounds, or the character is not in the Trie
      if (r < 0 || c < 0 || r >= ROWS ||
          c >= COLS || board[r][c] === '#' ||
          !(board[r][c] in node.children)) {
          return;
      }

      // Temporarily mark the current cell as visited
      let char = board[r][c];
      node = node.children[char];  // Move to the next node based on the current character
      word += char;  // Append the current character to the word

      // If the current node represents the end of a valid word, add it to the result set
      if (node.isWord) {
          res.add(word);  // Add the current word to the result set
      }

      // Temporarily mark the current cell as visited by changing it to a special character
      board[r][c] = '#';

      // Explore the four possible directions (down, up, left, right)
      dfs(r + 1, c, node, word);  // Explore down
      dfs(r - 1, c, node, word);  // Explore up
      dfs(r, c + 1, node, word);  // Explore right
      dfs(r, c - 1, node, word);  // Explore left

      // Unmark the current cell (backtrack)
      board[r][c] = char;
  };

  // Step 4: Start DFS from each cell in the board
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          dfs(r, c, root, "");  // Perform DFS starting from each cell with an empty word
      }
  }

  // Step 5: Convert the result set to an array and return it
  return Array.from(res);
};












