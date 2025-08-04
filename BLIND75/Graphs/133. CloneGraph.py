To solve the problem of cloning a connected undirected graph, we need to traverse the graph and create a deep copy of it. The deep copy means that for each node, we will create a new node with the same value, and all the neighbors of the node will also be cloned. We must ensure that the graph remains connected, and no nodes or edges are shared between the original and the copied graph.

### Approach:

1. **Depth-First Search (DFS) Traversal**: This is a common way to traverse a graph and create a copy of the graph as we traverse. We will perform DFS on the graph starting from the given node, and for each node, we will clone it and its neighbors recursively.
2. **HashMap to Track Cloned Nodes**: Since the graph is undirected and the nodes may have multiple neighbors, we need to keep track of which nodes have already been cloned to avoid revisiting them. A hashmap (or dictionary) can be used to store the mapping between the original node and its cloned counterpart.

### Algorithm:

- We will iterate over the graph, visiting each node.
- For each node, if it hasn't been cloned yet, we'll clone it and recursively clone all of its neighbors.
- Use a hashmap to store the mapping between the original node and the cloned node.
- If we encounter a node that has already been cloned, we'll simply return the cloned version from the hashmap to avoid cycles.

// Definition for a Node.
class Node {
constructor(val, neighbors = []) {
this.val = val;
this.neighbors = neighbors;
}
}

var cloneGraph = function(node) {
if (!node) return null; // If the input node is null, return null

```
// HashMap to store the mapping of original node to its clone
let map = new Map();

// Helper function to perform DFS and clone the graph
const dfs = (node) => {
    if (map.has(node)) {
        return map.get(node); // If the node has already been cloned, return it
    }

    // Create a clone of the current node
    let clone = new Node(node.val);
    map.set(node, clone); // Store the clone in the map

    // Recursively clone all the neighbors
    for (let neighbor of node.neighbors) {
        clone.neighbors.push(dfs(neighbor)); // Add the cloned neighbor to the neighbors list
    }

    return clone;
};

// Start DFS from the given node
return dfs(node);

```

};
Time Complexity:
The time complexity of the cloneGraph function is O(N + E), where:

N is the number of nodes in the graph.
E is the number of edges in the graph.
Explanation:

The DFS function is called for every node in the graph, and each node is visited exactly once.
For each node, we iterate over its neighbors (the adjacency list), and each edge is processed once.
Therefore, the total time complexity is proportional to the number of nodes N plus the number of edges E.
Thus, the time complexity is O(N + E).

Space Complexity:
The space complexity of the solution is O(N), where:

N is the number of nodes in the graph.
Explanation:

We use a Map to store the mapping of each node to its clone. The map will contain one entry for each node, so it requires O(N) space.
The recursion stack in the DFS function can go as deep as the number of nodes, so the maximum depth of the recursion is N. This also contributes O(N) space.
Therefore, the space complexity is O(N) due to the map and the recursion stack.

Conclusion:
Time Complexity: O(N + E) — We visit each node and edge once during the DFS traversal.
Space Complexity: O(N) — Space is used for storing the cloned nodes and the recursion stack.


# Definition for a Node.
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node: 'Node') -> 'Node':
    if not node:
        return None

    # Using a dictionary to store the mapping of original node to the new node
    visited = {}

    # Define the dfs function
    def dfs(node):
        if node in visited:
            return visited[node]

        # Create a new node and add it to the visited map
        new_node = Node(node.val)
        visited[node] = new_node

        # Recursively visit all the neighbors
        for neighbor in node.neighbors:
            new_node.neighbors.append(dfs(neighbor))

        return new_node

    # Call dfs on the starting node
    return dfs(node)


class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null
        let hashmap = new Map()

       const dfs = (node) => {
        if (hashmap.has(node)) return hashmap.get(node)

        let clone = new Node(node.val)
        hashmap.set(node, clone)

        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
       }
       return dfs(node)
    }

}
