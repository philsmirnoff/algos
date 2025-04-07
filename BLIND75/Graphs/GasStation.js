// solve this question from bloomberg software engineer interview Asked a simple DFS on a grid based graph question and told to calculate time and space complexity. It was about a car travelling on a grid between two points.


function dfs(grid, x, y, targetX, targetY, visited) {
    // Check if the current position is out of bounds or if already visited
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 1 || visited[x][y]) {
        return false;
    }

    // If the target is reached
    if (x === targetX && y === targetY) {
        return true;
    }

    // Mark the current cell as visited
    visited[x][y] = true;

    // Explore all four directions
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (dfs(grid, newX, newY, targetX, targetY, visited)) {
            return true;
        }
    }

    return false;
}

function carPathExists(grid, startX, startY, targetX, targetY) {
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));
    return dfs(grid, startX, startY, targetX, targetY, visited);
}
Time Complexity:
DFS Traversal: DFS will explore every node once in the grid. In the worst case, it needs to visit all cells in the grid.

Grid Size: The grid is an m x n matrix, where m is the number of rows and n is the number of columns.

Worst-Case Scenario: In the worst case, DFS will visit all cells in the grid once, leading to a time complexity of:

O(m * n), where m is the number of rows and n is the number of columns in the grid.

Space Complexity:
Visited Array: We maintain a 2D visited array of size m x n to keep track of the cells we've already visited.

This requires O(m * n) space.

Recursive Call Stack: The depth of the recursive calls in the worst case can go as deep as the number of cells in the grid (if we need to visit every cell).

The call stack depth can go up to O(m * n) in the worst case, depending on the grid's structure.

Thus, the total space complexity is dominated by the space required for the visited array and the recursion stack, resulting in:

O(m * n) space complexity.

Summary:
Time Complexity: O(m * n) (since every cell might need to be visited once).

Space Complexity: O(m * n) (due to the visited array and recursion stack).


// follow ups:
This was then expanded to include obstacles on the grid and how I would calculate the distance between two points now.
ChatGPT said:
When obstacles are introduced on a grid, calculating the distance between two points becomes more complex because you need to account for paths that avoid the obstacles. In most cases, you'd likely use a search algorithm like *A (A-star)**, Dijkstra's algorithm, or Breadth-First Search (BFS) to calculate the shortest path while avoiding obstacles.

Calculating Distance Between Two Points with Obstacles
Let's break it down:

Grid Representation:

You typically represent the grid as a 2D array where each cell contains information:

0: empty space.

1: obstacle.

(x, y): coordinates of the start and end points.

Pathfinding Algorithm: You'd use algorithms like A*, BFS, or Dijkstra’s to find the shortest path. These algorithms will keep track of distances and only move to adjacent cells that are not obstacles.

Distance Calculation:

Euclidean distance (if diagonal moves are allowed): √((x2 - x1)² + (y2 - y1)²)

Manhattan distance (if only vertical and horizontal moves are allowed): |x2 - x1| + |y2 - y1|

In pathfinding, heuristics like Manhattan distance (for grids where diagonal movement is not allowed) or Euclidean distance (if diagonal movement is allowed) are used to guide the search toward the target.

A (A-star) Algorithm*: The A* algorithm combines the best features of BFS and Greedy algorithms. It uses a heuristic to calculate the shortest path and evaluates based on:

g(n): the cost from the start to the current node.

h(n): the heuristic estimate (like Manhattan or Euclidean distance) from the current node to the end node.

f(n) = g(n) + h(n): the total estimated cost.

Handling Obstacles:

If a cell has an obstacle, it is considered blocked and you cannot pass through it.

During the search, avoid moving into or through these blocked cells.

Example of Pathfinding Algorithm with Obstacles (A* or BFS)
Here's a simple outline of how you'd implement BFS to find the shortest path while avoiding obstacles:

javascript
Copy
function shortestPath(grid, start, end) {
  // Directions for moving up, down, left, right
  const directions = [
    [0, 1],  // right
    [0, -1], // left
    [1, 0],  // down
    [-1, 0], // up
  ];

  const rows = grid.length;
  const cols = grid[0].length;

  // BFS queue
  const queue = [[start[0], start[1], 0]]; // [x, y, distance]

  // Visited set
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();

    // If we reached the end, return the distance
    if (x === end[0] && y === end[1]) {
      return distance;
    }

    // Explore neighboring cells
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // Check bounds and if the cell is not an obstacle
      if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 0) {
        const nextPosition = [nx, ny];
        if (!visited.has(nextPosition.toString())) {
          visited.add(nextPosition.toString());
          queue.push([nx, ny, distance + 1]);
        }
      }
    }
  }

  // If no path is found
  return -1;
}
Explanation of the Code:
Grid: This represents the grid, where 0 represents empty spaces, and 1 represents obstacles.

Start and End: These are the start and end points, represented as [x, y] coordinates.

Directions: These are the possible directions to move (up, down, left, right).

Visited Set: A set that keeps track of visited positions to avoid revisiting and getting stuck in an infinite loop.

BFS: The algorithm explores each level of the grid, starting from the start point and visiting all possible moves, avoiding obstacles and revisiting cells.

Time and Space Complexity
Time Complexity:

For BFS, the worst-case time complexity is O(V + E), where V is the number of vertices (cells in the grid) and E is the number of edges (possible moves between adjacent cells).

If the grid size is m x n, then the time complexity will be O(m * n) because in the worst case, BFS will visit all cells.

Space Complexity:

The space complexity is O(m * n) because we store the visited cells and the queue, both of which can grow up to the size of the grid.

Additional Considerations:
Heuristics: If using A* or a similar heuristic search algorithm, you’ll need to calculate and use a heuristic function to improve efficiency.

Diagonal Movement: If diagonal movement is allowed, update the directions array to include diagonals.

This should give you a solid foundation to implement grid-based pathfinding with obstacles!


https://leetcode.com/discuss/post/2133894/bloomberg-senior-software-engineer-londo-3s60/
