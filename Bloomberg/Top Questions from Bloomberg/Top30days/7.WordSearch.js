const exist = (board, word) => {
  // Get the number of rows and columns in the board
  const rows = board.length;
  const cols = board[0].length;

  // Depth-First Search (DFS) helper function
  // r, c = current row and column
  // i = current index in the word we're matching
  const dfs = (r, c, i) => {
    // ✅ Base case: if we've matched all characters in word, success!
    if (i === word.length) return true;

    // ❌ Base case: invalid cell (out of bounds, already visited, or char doesn't match)
    if (
      r < 0 ||
      c < 0 || // Out of top/left border
      r >= rows ||
      c >= cols || // Out of bottom/right border
      board[r][c] !== word[i] || // Current cell doesn't match the current char in word
      board[r][c] === "#" // Already visited in this path
    ) {
      return false; // Stop exploring this path
    }

    // Mark this cell as visited (so we don't reuse it in the current path)
    board[r][c] = "#";

    // 🔁 Explore all four possible directions (Down, Up, Right, Left)
    const res =
      dfs(r + 1, c, i + 1) || // Move down
      dfs(r - 1, c, i + 1) || // Move up
      dfs(r, c + 1, i + 1) || // Move right
      dfs(r, c - 1, i + 1); // Move left

    // ♻️ Backtrack: restore the cell’s original letter after exploring
    // (so it can be used again in other paths)
    board[r][c] = word[i];

    // Return whether we found a valid path
    return res;
  };

  // 🌍 Try starting the DFS from every cell in the board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Start DFS only if the first character matches
      if (dfs(r, c, 0)) return true;
    }
  }

  // If no valid path found, return false
  return false;
};
