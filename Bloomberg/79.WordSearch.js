// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
const n = board[0].length;
const visited = new Array(m).fill().map(() => new Array(n).fill(false)); // Create a visited array to mark already visited cells

const dfs = (i, j, k) => { // Recursive function to explore the board
  if (k === word.length) return true; // If we have found all the letters, we have found the word

  if (i < 0 || j < 0 || i >= m || j >= n) return false; // If we go out of bounds, return false

  if (visited[i][j]) return false; // If the cell has already been visited, return false

  if (board[i][j] !== word[k]) return false; // If the cell doesn't match the current letter of the word, return false

  visited[i][j] = true; // Mark the cell as visited

  const res = dfs(i+1, j, k+1) || dfs(i-1, j, k+1) || dfs(i, j+1, k+1) || dfs(i, j-1, k+1); // Recursively explore the neighboring cells

  visited[i][j] = false; // Unmark the cell as visited

  return res; // Return the result of the recursive exploration
};

for (let i = 0; i < m; i++) { // Explore each cell of the board
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, 0)) return true; // If we find the word starting at this cell, return true
  }
}

return false; // If we don't find the word, return false
};
