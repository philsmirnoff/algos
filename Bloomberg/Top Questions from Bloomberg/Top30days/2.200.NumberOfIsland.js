const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0; // Handle edge case for empty grid
  let rows = grid.length;
  let cols = grid[0].length;
  let islands = 0;

  // Iterate through each cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        // If the cell is land
        dfs(r, c, grid); // Perform DFS to mark the island
        islands++; // Increment the island count
      }
    }
  }
  return islands;
};

const dfs = (r, c, grid) => {
  // Base case: Check if the current cell is out of bounds or is water ("0")
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === "0"
  )
    return;

  // Mark the current cell as visited by setting it to water ("0")
  grid[r][c] = "0";

  // Explore the four directions (up, down, left, right)
  dfs(r + 1, c, grid); // Down
  dfs(r - 1, c, grid); // Up
  dfs(r, c + 1, grid); // Right
  dfs(r, c - 1, grid); // Left
};

// bfs separate
const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Step 3: Main traversal
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        bfs(r, c, grid); // ✅ can call bfs here because function declarations are hoisted
        count++;
      }
    }
  }

  return count;
};

// Step 4: BFS helper function (hoisted, so can be placed after)
function bfs(startRow, startCol, grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ];

  // Mark starting cell as visited
  grid[startRow][startCol] = "0";
  const queue = [[startRow, startCol]];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // 🧠 Equivalent of the DFS base case:
      // Skip if out of bounds or water
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === "0")
        continue;

      // Mark as visited and enqueue
      grid[nr][nc] = "0";
      queue.push([nr, nc]);
    }
  }
}

// bfs together

const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // ✅ define bfs before calling it
  const bfs = (startRow, startCol, grid) => {
    const directions = [
      [1, 0], // down
      [-1, 0], // up
      [0, 1], // right
      [0, -1], // left
    ];

    grid[startRow][startCol] = "0";
    const queue = [[startRow, startCol]];

    while (queue.length > 0) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === "1"
        ) {
          grid[nr][nc] = "0";
          queue.push([nr, nc]);
        }
      }
    }
  };

  // main traversal loop
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        bfs(r, c, grid); // ✅ bfs defined above
        count++;
      }
    }
  }

  return count;
};
