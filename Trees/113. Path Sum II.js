113. Path Sum II
Medium

7113

140

Add to List

Share
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.



Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: []
Example 3:

Input: root = [1,2], targetSum = 0
Output: []


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const output = []

  getPaths(root, 0, targetSum, output, [])

  return output
};

function getPaths(currentNode, currentTotal, targetSum, output, currentPath) {

  if (!currentNode) return

  // If I have a valid node, add the current node to currentPath
  // Also add the current value to the cureentTotal

  currentPath.push(currentNode.val)
  currentTotal += currentNode.val

  // Once I ve accountd for the current node I want to check if I ve rreached my t
  // target sum
  // if I am at targetSum also check if I am at leaf node

  if (currentTotal == targetSum && !currentNode.left && !currentNode.right) {
      // we have a vaild path we want to add to output
      // we need to create a copy of current path
      output.push([...currentPath])
  }

  // Continue looking for other valid paths

  getPaths(currentNode.left, currentTotal, targetSum, output, currentPath)
  getPaths(currentNode.right, currentTotal, targetSum, output, currentPath)


  currentPath.pop()
  return
}
