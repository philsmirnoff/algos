// 543. Diameter of Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.



// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].


const diameterOfBinaryTree = (root) => {
  // handle empty tree
  if (!root) return 0

  // initialize to track max
  let maxDiameter = 0

  const dfs = (node) => {
      // return 0 if node is null
      if (!node) return 0

      // recursively call dfs on left and right
      let left = dfs(node.left)
      let right = dfs(node.right)

      // Get higher between current max diameter or the heights of the left and right subtrees
      maxDiameter = Math.max(maxDiameter, left + right)

      // return height of current node by taking max of left or right and adding 1 to account for current node
      return Math.max(left, right) + 1
  }

  // call the dfs function
  dfs(root)


  return maxDiameter

};
