// 102. Binary Tree Level Order Traversal
// Medium
// 14.8K
// 292
// company
// Amazon
// company
// TikTok
// company
// Facebook
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Define a function to perform level order traversal on a binary tree
const levelOrder = (root) => {
  // If the root is null, return an empty array since there are no nodes to traverse
  if (root === null) return []

  // Initialize an array to store the result of level order traversal
  let result = []

  // Initialize a queue with the root node to keep track of nodes at each level
  let queue = [root]

  // Continue traversal while there are nodes in the queue
  while (queue.length) {
      // Get the number of nodes at the current level
      let levelSize = queue.length

      // Initialize an array to store nodes at the current level
      let currentLevel = []

      // Process nodes at the current level
      for (let i = 0; i < levelSize; i++) {
          // Dequeue the front node from the queue
          let currentNode = queue.shift()

          // Push the value of the current node to the current level array
          currentLevel.push(currentNode.val)

          // Enqueue the left and right child nodes if they exist
          if (currentNode.left) queue.push(currentNode.left)
          if (currentNode.right) queue.push(currentNode.right)
      }

      // Push the array of nodes at the current level to the result array
      result.push(currentLevel)
  }

  // Return the result array containing level order traversal
  return result
}
