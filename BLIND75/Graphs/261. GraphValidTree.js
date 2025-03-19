Approach:
Check the number of edges: If edges.length !== n - 1, return false immediately.
Build an adjacency list: Construct an adjacency list representation of the graph.
Use BFS or DFS to check connectivity: Start from node 0, traverse the graph using BFS/DFS, and count visited nodes.
Ensure all nodes are visited: If the number of visited nodes equals n, the graph is connected.



function validTree(n, edges) {
  if (edges.length !== n - 1) return false; // A tree must have exactly n - 1 edges

  // Build adjacency list
  const adjList = new Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
      adjList[a].push(b);
      adjList[b].push(a);
  }

  // BFS to check connectivity
  const visited = new Set();
  const queue = [0];
  visited.add(0);

  while (queue.length > 0) {
      let node = queue.shift();
      for (let neighbor of adjList[node]) {
          if (visited.has(neighbor)) continue;
          visited.add(neighbor);
          queue.push(neighbor);
      }
  }

  return visited.size === n; // Check if all nodes were visited
}


dfs:
function validTree(n, edges) {
  if (edges.length !== n - 1) return false; // A tree must have exactly n - 1 edges

  // Build adjacency list
  const adjList = new Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
      adjList[a].push(b);
      adjList[b].push(a);
  }

  const visited = new Set();

  function dfs(node, parent) {
      if (visited.has(node)) return false; // Cycle detected
      visited.add(node);

      for (let neighbor of adjList[node]) {
          if (neighbor === parent) continue; // Ignore the edge leading back to parent
          if (!dfs(neighbor, node)) return false;
      }
      return true;
  }

  // Check for cycle and connectivity
  if (!dfs(0, -1)) return false;

  return visited.size === n; // Ensure all nodes were visited
}


// Time Complexity:
// Building the adjacency list → O(n)
// BFS/DFS traversal → O(n + e), where e is the number of edges.
// Overall, the complexity is O(n + e), which is efficient for n ≤ 2000.
