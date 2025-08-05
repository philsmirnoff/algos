class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    if (!grid || grid.length === 0) return -1;

    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let time = 0;
    let fresh = 0;

    // Count fresh oranges and enqueue rotten ones
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1) fresh++;
        if (grid[r][c] === 2) queue.push([r, c]);
      }
    }

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    // BFS traversal
    while (queue.length > 0 && fresh > 0) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let [currR, currC] = queue.shift();

        for (let [dr, dc] of directions) {
          const r = currR + dr;
          const c = currC + dc;

          // Check bounds and if it's a fresh orange
          if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1)
            continue;

          grid[r][c] = 2; // Rot the orange
          fresh--; // One less fresh
          queue.push([r, c]); // Add newly rotten to queue
        }
      }

      time++;
    }

    return fresh === 0 ? time : -1;
  }
}
