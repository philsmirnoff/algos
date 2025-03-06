
Solution marking the visited cells.

```jsx
const numIslands = (grid) => {
    if (!grid || grid.length === 0) return 0; // Handle edge case for empty grid
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;

    // Iterate through each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {  // If the cell is land
                dfs(r, c, grid);        // Perform DFS to mark the island
                islands++;              // Increment the island count
            }
        }
    }
    return islands;
}

const dfs = (r, c, grid) => {
    // Base case: Check if the current cell is out of bounds or is water ("0")
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === "0") return;

    // Mark the current cell as visited by setting it to water ("0")
    grid[r][c] = "0";

    // Explore the four directions (up, down, left, right)
    dfs(r + 1, c, grid); // Down
    dfs(r - 1, c, grid); // Up
    dfs(r, c + 1, grid); // Right
    dfs(r, c - 1, grid); // Left
}
```

### 1. **Solution with DFS without Set (Marking Grid Directly)**

In this solution, we modify the grid itself to mark visited cells by setting them to `"0"`, and there's no separate visited structure (e.g., `Set`).

### **Time Complexity:**

- **Grid Traversal**: The solution iterates over each cell in the grid once.
    - There are `rows` rows and `cols` columns in the grid, so the total number of cells is `rows * cols`.
    - We perform a DFS from each unvisited land cell (`"1"`) and explore all connected cells, marking them as visited during the DFS.
- **DFS Time Complexity**: The DFS explores every connected cell exactly once. Each cell will be visited once and marked as visited (turned into `"0"`).
    - For each cell, it explores its 4 neighboring cells (up, down, left, right).
    - The DFS function has a constant amount of work for each cell, so the DFS complexity for one call is O(1).
    - As each cell is visited once, the overall time complexity for DFS is O(rows * cols).

Therefore, the **total time complexity** for the DFS approach is:

- **O(rows * cols)**

### **Space Complexity:**

- **Auxiliary Space for DFS**:
    - The recursion stack in DFS will go as deep as the number of land cells, in the worst case, where all cells are connected (forming one large island). This could take up to `O(rows * cols)` space in the recursion stack.
- **Grid Modification**:
    - The grid itself is modified, but no extra space is needed for marking visited cells (apart from the recursive call stack).

Thus, the **total space complexity** for this approach is:

- **O(rows * cols)** due to the recursion stack.

Solution using Set() #2

```jsx
const numIslands = (grid) => {
    if (!grid || grid.length === 0) return 0; // Handle edge case for empty grid
    let rows = grid.length;
    let cols = grid[0].length;
    let islands = 0;
    let visited = new Set();  // Set to keep track of visited positions

    // Iterate through each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // If the cell is land ('1') and hasn't been visited yet
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                dfs(r, c, grid, visited);  // Perform DFS to mark the island
                islands++;  // Increment the island count
            }
        }
    }
    return islands;
}

const dfs = (r, c, grid, visited) => {
    // Base case: Check if the current cell is out of bounds or is water ("0")
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === "0") return;

       // If already visited, stop the recursion
    if (visited.has(`${r},${c}`)) return;

    // Mark the current cell as visited by adding it to the Set
    visited.add(`${r},${c}`);

    // Explore the four directions (up, down, left, right)
    dfs(r + 1, c, grid, visited); // Down
    dfs(r - 1, c, grid, visited); // Up
    dfs(r, c + 1, grid, visited); // Right
    dfs(r, c - 1, grid, visited); // Left
}

```

In this solution, we track visited cells using a `Set` to store the coordinates of visited cells as strings (e.g., `"r,c"`).

### **Time Complexity:**

- **Grid Traversal**: Similar to the first solution, we traverse every cell once. So the time complexity for iterating over the grid is O(rows * cols).
- **DFS Time Complexity**: Like the first solution, each cell will be visited once during the DFS. The DFS function explores each neighboring cell recursively, but the `Set` ensures that we don't revisit cells.

Thus, the **total time complexity** is still:

- **O(rows * cols)**

### **Space Complexity:**

- **Auxiliary Space for DFS**:
    - The recursion stack will also take up to `O(rows * cols)` space, as in the first solution, in the worst case where all cells are connected in a large island.
- **Visited Set**:
    - We also use a `Set` to track the visited cells, which will store each visited cell's coordinates. In the worst case, if every cell is part of an island, the set will store `O(rows * cols)` coordinates.

Thus, the **total space complexity** is:

- **O(rows * cols)** due to both the recursion stack and the `Set` used to store visited cells.


def numIslands(grid):
    if not grid or len(grid) == 0:  # Handle edge case for empty grid
        return 0

    rows = len(grid)
    cols = len(grid[0])
    islands = 0

    # Iterate through each cell in the grid
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":  # If the cell is land
                dfs(r, c, grid)      # Perform DFS to mark the island
                islands += 1         # Increment the island count

    return islands

def dfs(r, c, grid):
    # Base case: Check if the current cell is out of bounds or is water ("0")
    if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] == "0":
        return

    # Mark the current cell as visited by setting it to water ("0")
    grid[r][c] = "0"

    # Explore the four directions (up, down, left, right)
    dfs(r + 1, c, grid)  # Down
    dfs(r - 1, c, grid)  # Up
    dfs(r, c + 1, grid)  # Right
    dfs(r, c - 1, grid)  # Left
