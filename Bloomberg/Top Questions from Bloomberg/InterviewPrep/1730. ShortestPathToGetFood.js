// 1730. Shortest Path to Get Food
// Medium
// 644
// 39
// company
// Amazon
// company
// DoorDash
// company
// Google
// You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

// You are given an m x n character matrix, grid, of these different types of cells:

// '*' is your location. There is exactly one '*' cell.
// '#' is a food cell. There may be multiple food cells.
// 'O' is free space, and you can travel through these cells.
// 'X' is an obstacle, and you cannot travel through these cells.
// You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

// Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.



// Example 1:


// Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
// Output: 3
// Explanation: It takes 3 steps to reach the food.
// Example 2:


// Input: grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
// Output: -1
// Explanation: It is not possible to reach the food.
// Example 3:


// Input: grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
// Output: 6
// Explanation: There can be multiple food cells. It only takes 6 steps to reach the bottom food.


var getFood = function(grid) {
  let minDistance = 0;
  let queue = []
  let visited = [];
  let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let rows = grid.length;
  let cols = grid[0].length;

  // Array to keep track of which cell has been visited
  for(let i = 0; i < rows; i++) {
      visited.push(new Array(cols).fill(false));
  }

  // Find starting position for our queue
  for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
          if(grid[i][j] === '*') {
              queue.push([i, j]);
              visited[i][j] = true;
              break;
          }
      }
  }

  while(queue.length) {
      // All cells within the size will be at the same distance from starting cell
      let size = queue.length;

      for(let i = 0; i < size; i++) {
        let cell = queue.shift();

        // We find the closest food cell since we are doing BFS
        if(grid[cell[0]][cell[1]] === '#') return minDistance;

        for(let dir of dirs) {
          let row = cell[0] + dir[0];
          let col = cell[1] + dir[1];

          // Skip visited cell and out of bound cell and obstacle cell
          if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'X' || visited[row][col]) continue;

          // Add unvisited cell to the queue
          visited[row][col] = true;
          queue.push([row, col]);
        }
      }

      // We finish all cell at the current distance and going to look for cells at next distance
      minDistance++;
  }

  return -1;
};
