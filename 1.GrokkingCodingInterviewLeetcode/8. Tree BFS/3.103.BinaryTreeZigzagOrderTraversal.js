// 103. Binary Tree Zigzag Level Order Traversal
// Medium
// 10.4K
// 274
// company
// Facebook
// company
// Amazon
// company
// eBay
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


const zigzagLevelOrder = (root) => {
  if (root === null) return []
  let result = []
  let queue = [root]

  let level = 0

  while (queue.length) {
      let levelSize = queue.length
      let currentLevel = []

      for (let i = 0; i < levelSize; i++) {
          let currentNode = queue.shift()
          currentLevel.push(currentNode.val)

          if (currentNode.left) queue.push(currentNode.left)
          if (currentNode.right) queue.push(currentNode.right)
      }

      if (level % 2 !== 0) {
          currentLevel.reverse()
      }

      result.push(currentLevel)
      level++
  }

  return result
}

// Vaersion 2
// var zigzagLevelOrder = function(root) {
//     let result = []
//     if (root === null) return result
//     let queue = [root]
//     let leftToRight = true;

//     while (queue.length > 0) {
//         let levelSize = queue.length;
//         let currentLevel = []
//         for (let i = 0; i < levelSize; i++) {
//             let currentNode = queue.shift();
//             if (leftToRight) {
//                 currentLevel.push(currentNode.val)
//             } else {
//                 currentLevel.unshift(currentNode.val)
//             }

//             if (currentNode.left) queue.push(currentNode.left)
//             if (currentNode.right) queue.push(currentNode.right)
//         }
//         result.push(currentLevel)
//         leftToRight = !leftToRight

//     }
//      return result
// };
