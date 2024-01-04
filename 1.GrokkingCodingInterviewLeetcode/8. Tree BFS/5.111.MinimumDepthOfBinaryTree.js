// 111. Minimum Depth of Binary Tree
// Easy
// 7.1K
// 1.3K
// company
// Facebook
// company
// Amazon
// company
// Google
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5


var minDepth = function(root) {
  if (root === null) return 0
  let minDepth = 0
  let queue = [root]

  while (queue.length) {
      minDepth++
      let levelSize = queue.length

      for (let i = 0; i < levelSize; i++) {
          let currentNode = queue.shift()

          if (currentNode.left == null && currentNode.right === null) return minDepth
          if (currentNode.left) queue.push(currentNode.left)
          if (currentNode.right) queue.push(currentNode.right)

      }
  }
};
