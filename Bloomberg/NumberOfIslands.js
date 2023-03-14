// 200. Number of Islands
// Medium

const { createSolutionBuilder } = require("typescript")

// 15191

// 355

// Add to List

// Share
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1


Structy solution
var numIslands = function(grid) {
  // create set for visited nodes
  let visited = new Set()
  let count = 0;
  // double loop
  for (let m = 0; m < grid.length; m++) {
      // grid[0].length if the coulns are different than length of rows
      for (let n = 0; n < grid[0].length; n++) {
          // dfs traversal
         if (explored(grid, m, n, visited) === true) {
             count++;
         }
       }
  }
  return count;
};

// lets define explore function
const explored = (grid, m, n, visited) => {
  // we need to check if we are in bounds
  const rowInBounds = 0 <= m && m < grid.length;
  const colInBounds = 0 <= n && n < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  // lets check if the position is equals to water
  if (grid[m][n] === "W") return false;

  // lets create stringified version of our positions
  const pos = r + ',' + c;
  // lets check we have visited this position
  if (visited.has(pos)) return false;
  visited.add(pos)

  // if i pass all thses cases that means I am on unvisited land
  explored(grid, m - 1, n, visited)
  explored(grid, m + 1, n, visited)
  explored(grid, m, n - 1, visited)
  explored(grid, m, n + 1, visited)
  // true symbolize that I finished exploring a new island i need to counted
  return true;

}


chatgtp solution for leetcode
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // Initialize a variable to keep track of the number of islands
  let count = 0;

  // Loop over each cell in the grid
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          // If the cell contains land, increment the count and mark the island as visited
          if (grid[i][j] === '1') {
              count++;
              dfs(grid, i, j);
          }
      }
  }

  // Return the total number of islands
  return count;
};

// A helper function to perform depth-first search on the grid
function dfs(grid, i, j) {
  // Mark the current cell as visited
  grid[i][j] = '0';

  // Check the neighboring cells and perform dfs on them if they are land
  if (i > 0 && grid[i - 1][j] === '1') {
      dfs(grid, i - 1, j);
  }

  if (i < grid.length - 1 && grid[i + 1][j] === '1') {
      dfs(grid, i + 1, j);
  }

  if (j > 0 && grid[i][j - 1] === '1') {
      dfs(grid, i, j - 1);
  }

  if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
      dfs(grid, i, j + 1);
  }
}

// Time Complexity: O(M x N) where M is the number of rows and N is the number of columns.

// Space Complexity: O(M x N) in the worst case where the grid is filled with lands where DFS goes by M x N deep.


// We start by defining the numIslands function that takes a 2D grid of characters as input. We initialize a variable count to keep track of the number of islands.

// We loop over each cell in the grid using two nested for loops. If the cell contains land (i.e., the character '1'), we increment the count variable and call the dfs function to mark the island as visited.

// The dfs function is a helper function that performs depth-first search on the grid. We first mark the current cell as visited by changing its value to '0'. Then, we check the neighboring cells and call dfs on them if they contain land (i.e., the character '1').

// At the end, we return the total number of islands.

// This solution has a time complexity of O(m * n), where m is the number of rows and n is the number of columns in the grid, since we visit each cell once. The space complexity is O(m * n) in the worst case, where all cells are land and we need to store all of them on the call stack during the depth-first search.



another solution
const numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  const dfs = function(row, col) {
    if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === '0') {
      return;
    }
    grid[row][col] = '0';
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

// This solution is similar to the BFS approach, but uses a recursive DFS function instead of a queue. We define a helper function dfs that takes the current row and column as arguments. If the current cell is not a land cell ('1'), or is out of bounds, we return. Otherwise, we mark the current cell as visited by changing it to a water cell ('0'), and recursively call dfs on all adjacent cells (up, down, left, right).

// In the main function, we iterate through every cell in the grid and call dfs on each unvisited land cell ('1'), incrementing the count for each island found. Finally, we return the total count of islands.

// The time and space complexity of this solution is the same as the BFS solution, O(m * n) for time (where m and n are the number of rows and columns in the grid) and O(min(m, n)) for space (stack space used by the DFS function).
