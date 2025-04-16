/**
 * @param {number} n - number of nodes in the graph
 * @param {number[][]} edges - list of undirected edges
 * @return {number} - number of connected components
 */
var countComponents = function(n, edges) {
    // Step 1: Create an adjacency list to represent the graph
    const graph = new Map();

    // Initialize the adjacency list with empty arrays for each node
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    // Step 2: Populate the adjacency list with the given edges
    for (const [a, b] of edges) {
        graph.get(a).push(b); // Add b to a's list
        graph.get(b).push(a); // Add a to b's list (since undirected)
    }

    // Step 3: Create a set to track visited nodes
    const visited = new Set();

    // DFS function to explore all nodes in a component
    const dfs = (node) => {
        // Mark current node as visited
        visited.add(node);

        // Visit all neighbors
        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    };

    // Step 4: Count the number of connected components
    let count = 0;

    for (let i = 0; i < n; i++) {
        // If the node hasn't been visited, it starts a new component
        if (!visited.has(i)) {
            dfs(i);       // Visit all nodes in this component
            count += 1;   // Increment the component count
        }
    }

    return count; // Final number of connected components
};

Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
Space Complexity: O(V), for the visited set and the adjacency list.
