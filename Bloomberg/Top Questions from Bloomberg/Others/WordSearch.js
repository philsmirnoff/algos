// Word Search

// Solution
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
// Output: false


// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

/**
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


// Let's go through each line of the code:

// We start by defining the exist function that takes the board and word as input and returns a boolean value indicating whether the word can be found in the board.

// We define the dimensions of the board m and n.

// We create a visited array of the same dimensions as the board to keep track of the cells that have already been visited.

// We define a recursive function dfs that takes the current cell coordinates i, j, and the index k of the current letter of the word we are trying to find. This function will recursively explore the neighboring cells to find the remaining letters of the word.

// We check if we have found all the letters of the word. If we have, we return true.

// We check if we have gone out of bounds of the board. If we have, we return false.

// We check if we have already visited the current cell. If we have, we return false.

// We check if the current cell matches the current letter of the word. If it doesn't, we return false.

// We mark the current cell as visited.

// We recursively explore the neighboring cells in all four directions by calling the `dfs



// The time complexity of this solution is O(m * n * 3^l), where m and n are the dimensions of the board and l is the length of the word. This is because we explore each cell of the board and in the worst case, we have to explore up to 3 neighboring cells for each cell. The maximum depth of recursion is the length of the word, so we multiply by 3^l to account for the branching factor.

// The space complexity of this solution is O(m * n), which is the size of the visited array. In the worst case, we will have to visit every cell of the board, so the visited array will have to store a boolean value for each cell.
