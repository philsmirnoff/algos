// 107. Binary Tree Level Order Traversal II
// Medium
// 4.7K
// 318
// company
// Amazon
// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

const levelOrderBottom = (root) => {
  // Check if the root is null, return an empty array if true
  if (root === null) return [];

  // Initialize an array to store the result in reverse order
  let result = [];

  // Initialize a queue with the root node
  let queue = [root];

  // Continue the loop as long as the queue is not empty
  while (queue.length) {
      // Get the current size of the queue, representing the number of nodes at the current level
      let currentSize = queue.length;

      // Initialize an array to store the values of nodes at the current level
      let currentLevel = [];

      // Iterate over the nodes at the current level
      for (let i = 0; i < currentSize; i++) {
          // Dequeue the front node from the queue
          let currentNode = queue.shift();

          // Push the value of the current node to the current level array
          currentLevel.push(currentNode.val);

          // Enqueue the left child if it exists
          if (currentNode.left) queue.push(currentNode.left);

          // Enqueue the right child if it exists
          if (currentNode.right) queue.push(currentNode.right);
      }

      // Insert the current level array at the beginning of the result array (reverse order)
      result.unshift(currentLevel);
  }

  // Return the result array containing level order traversal in reverse order
  return result;
}
