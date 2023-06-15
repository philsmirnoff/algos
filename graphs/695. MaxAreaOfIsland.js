// 695. Max Area of Island
// Medium

// 9063

// 197

// Add to List

// Share
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.



// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

var maxAreaOfIsland = function(grid) {
  let maxArea = 0

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              maxArea = Math.max(maxArea, dfs(grid, i, j))
          }
      }
  }
  return maxArea
};

const dfs = (grid, i, j) => {

  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) {
      return 0
  }

  grid[i][j] = 0 // Mark current land visited

  let area = 1; // current land are
  area += dfs(grid, i + 1, j); // Check the land below
  area += dfs(grid, i - 1, j); // Check the land above
  area += dfs(grid, i, j + 1); // Check the land to the right
  area += dfs(grid, i, j - 1); // Check the land to the left

  return area
}
