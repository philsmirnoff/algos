// 199. Binary Tree Right Side View
// Medium
// 11.5K
// 811
// company
// Facebook
// company
// Amazon
// company
// TikTok
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.



// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []




const rightSideView = (root) => {
  if (root === null) return []

  let result = []
  let queue = [root]

  while (queue.length) {
      let currentSize = queue.length
      for (let i = 0; i < currentSize; i++) {
          let currentNode = queue.shift()
          if (i === currentSize - 1) {
              result.push(currentNode.val)
          }
          if (currentNode.left) queue.push(currentNode.left)
          if (currentNode.right) queue.push(currentNode.right)
      }
  }
  return result
}
