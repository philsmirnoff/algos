Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false


var exist = function(board, word) {

  // Get the number of rows and columns in the board
  const rows = board.length
  const cols = board[0].length

  // Helper function: Depth-First Search (DFS) to search for the word
  const dfs = (r, c, i) => {
      // Base case: if we've reached the end of the word, return true (word found)
      if (i === word.length) return true

      // If the current position is out of bounds or the letter doesn't match, or we’ve already visited the cell (marked as "#"), return false
      if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i] || board[r][c] === "#") return false

      // Mark the current cell as visited by setting it to "#"
      board[r][c] = "#"

      // Explore the four possible directions (down, up, right, left) recursively
      const res = dfs(r + 1, c, i + 1) ||  // Move down
                  dfs(r - 1, c, i + 1) ||  // Move up
                  dfs(r, c + 1, i + 1) ||  // Move right
                  dfs(r, c - 1, i + 1);    // Move left

      // Backtrack: restore the cell's original value after exploring it
      board[r][c] = word[i]

      return res
  }

  // Start the search from every cell in the board
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          // If we find the word starting from this cell, return true
          if (dfs(r, c, 0)) return true
      }
  }

  // If no valid path is found, return false
  return false
};


Explanation of the Steps:
Initial Setup:

rows and cols store the dimensions of the board (the number of rows and columns).

Depth-First Search (DFS):

The dfs function is a helper that recursively checks if we can find the word starting from a specific position on the board.

We pass three parameters to dfs: the current row (r), the current column (c), and the index of the character in word we are trying to match (i).

Base Case:

If i === word.length, it means we have successfully matched all characters of the word, and we return true.

Boundary and Validity Check:

The conditions inside dfs ensure we are not out of bounds, not revisiting a cell (by checking if the cell has been marked with #), and that the current board cell matches the character at the current index of the word.

If any of these conditions fail, we return false.

Marking and Backtracking:

The current cell is temporarily marked as "#" to indicate it has been visited.

The DFS function then recursively checks all four directions (down, up, right, left) from the current cell to continue matching the next character of the word.

Backtracking:

After all recursive calls, we restore the current cell's value to the original one (board[r][c] = word[i]) to allow other possible searches.

Iterating Over All Cells:

The for loop starts a DFS search from every cell on the board, trying to match the word from each possible starting position. If any starting point results in a successful search, true is returned.

Final Result:

If no valid path is found from any cell, the function returns false.

Time and Space Complexity:
Time Complexity:

DFS Time Complexity: Each DFS call explores the current cell and all its neighbors. In the worst case, the DFS will explore every cell and every direction for each character in the word.

So, the worst-case time complexity is O(M * N * 4^L):

M is the number of rows.

N is the number of columns.

L is the length of the word.

The factor 4^L comes from the fact that at each level of recursion, we have 4 directions to explore.

Therefore, the overall worst-case time complexity is O(M * N * 4^L).

Space Complexity:

The space complexity is mainly determined by the recursion depth. The maximum recursion depth would be the length of the word (L), since each recursive call corresponds to exploring one character of the word.

So, the space complexity is O(L) for the recursion stack.

Additionally, there's a minor space complexity due to the storage of the board (O(M * N)), but since we're modifying the board in place (using backtracking), it doesn't count as additional space usage. Thus, the primary space complexity is O(L) due to recursion depth.

Summary:
Time Complexity: O(M * N * 4^L)

Space Complexity: O(L)
