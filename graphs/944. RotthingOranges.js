/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  // I also need to konw how many fresh oranges there are originally
  // find out where each rotten orange is and branch out go in all 4 directions to rotten up other oranges
  // keep track of time and add 1 after checking all four directions for every rotten orange

  let oranges = 0;
  let m = grid.length;
  let n = grid[0].length;
  const queue = [];

  // iterate through the grid and count fresh oranges and add the rotten oranges to the queue

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) oranges++;
          else if (grid[i][j] === 2) queue.push([i, j])
      }
  }

// queue = [[0, 0]] min 0; oranges = 6
// queue = [[0, 1], [1, 0]] min 1;oranges = 4
// queue = [[0, 2], [1, 1]] min 2; oranges = 2
// queue = [[2, 1]] min 3 oranges = 1
// queue = [[2,2]] min 4 oranges = 0;
  let time = 0;
  // up, down, left, right
  const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  while(queue.length && oranges > 0) {
      let size = queue.length
      for (let i = 0; i < size; i++) {
          // check up, down, left, right for each rotten orange to see if there are any frsh oranges
          const cell = queue.shift()
          for (const d of directions) {
              let x = cell[0] + d[0];
              let y = cell[1] + d[1]

              // in bounds
              if (x < 0 || y < 0 || x >= m || y >= n) continue;
              // check our new direction has a fresh orange
              if (grid[x][y] != 1) continue;
              // we are at fresh orange cell;
              grid[x][y] = 2;
              oranges--;
              queue.push([x, y])
          }
      }
      time++;
  }
return oranges === 0 ? time : -1
};
