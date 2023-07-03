257. Binary Tree Paths
Easy

5868

255

Add to List

Share
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.



Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]


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
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const result = [];

  function traverse(node, path) {
    if (!node) return;

    // Append the current node's value to the path
    path += node.val;

    // If it's a leaf node, add the path to the result
    if (!node.left && !node.right) {
      result.push(path);
      return;
    }

    // Continue traversing the left and right subtrees
    if (node.left) {
      traverse(node.left, path + "->");
    }

    if (node.right) {
      traverse(node.right, path + "->");
    }
  }

  // Start traversing from the root node with an empty path
  traverse(root, "");

  return result;
}
