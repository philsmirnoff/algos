var validPath = function(n, edges, source, destination) {
  // Step 1: Initialize the graph as an empty array of n nodes.
  const graph = []

  // Step 2: Initialize the visited array, where each element represents whether a node has been visited or not.
  const visited = Array(n).fill(false)

  // Step 3: Build the adjacency list (graph) from the edges array.
  for (let i = 0; i < n; i++) {
      graph[i] = []  // Initialize each node with an empty array.
  }

  // Step 4: Iterate over each edge and update the graph to reflect the connections between nodes.
  for (let edge of edges) {
      // Add an undirected edge: for each edge, push the connected node to both nodes' adjacency lists.
      graph[edge[0]].push(edge[1])  // Connect node edge[0] to node edge[1].
      graph[edge[1]].push(edge[0])  // Connect node edge[1] to node edge[0].
  }

  // Step 5: Call the DFS function to check if there's a path from source to destination.
  return dfs(graph, source, destination, visited)
}

// This function performs depth-first search (DFS) to check if a path exists from the current node to the destination.
const dfs = (graph, node, end, visited) => {
  // Step 6: If the current node is the destination, return true as we've found a valid path.
  if (node === end) return true

  // Step 7: Mark the current node as visited to avoid revisiting it in future iterations.
  visited[node] = true

  // Step 8: Iterate through each neighbor of the current node.
  for (let neighbor of graph[node]) {
      // Step 9: If the neighbor has not been visited and there's a valid path from it to the destination, return true.
      if (!visited[neighbor] && dfs(graph, neighbor, end, visited)) {
          return true
      }
  }

  // Step 10: If no valid path is found from the current node, return false.
  return false
}

// Time Complexity:
// Building the graph:
// Constructing the graph takes O(E) time, where E is the number of edges. Each edge is added to the adjacency list of both nodes in the edge.
// DFS Traversal:
// The DFS function visits each node and each edge at most once.
// In the worst case, the algorithm explores all nodes (n) and all edges (E), so the time complexity is O(n + E).
// Thus, the overall time complexity of the algorithm is O(n + E), where:

// n is the number of nodes in the graph.
// E is the number of edges in the graph.
// Space Complexity:
// Graph representation:
// The graph is represented as an adjacency list, which requires O(n + E) space to store n nodes and E edges.
// Visited array:
// The visited array takes O(n) space to track whether each node has been visited.
// Recursive call stack:
// In the worst case, the depth of the recursion could be equal to the number of nodes in the graph (n), so the call stack takes O(n) space.
// Thus, the overall space complexity is O(n + E), which accounts for the graph representation, the visited array, and the recursion stack.

// Summary:
// Time Complexity: O(n + E) — We visit each node and edge once in the DFS traversal.
// Space Complexity: O(n + E) — For storing the graph and the visited array, plus the recursion stack.
