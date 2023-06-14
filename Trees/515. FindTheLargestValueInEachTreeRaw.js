**515. Find Largest Value in Each Tree Row**

**Medium**

2694

95

Add to List

Share

Given the `root` of a binary tree, return *an array of the largest value in each row* of the tree **(0-indexed)**.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg

```
Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

```

**Example 2:**

```
Input: root = [1,2,3]
Output: [1,3]
```

/**

- Definition for a binary tree node.
- function TreeNode(val, left, right) {
- `this.val = (val===undefined ? 0 : val)`
- `this.left = (left===undefined ? null : left)`
- `this.right = (right===undefined ? null : right)`
- }
*/
/*
- @param {TreeNode} root
- @return {number[]}
*/
var largestValues = function(root) {
// track currentMax in level, and currentLevel that we’re on
// currentMax is an array [max on first, max on second, etc.]
const maxValues = []
updateMax(root, 0, maxValues)
return maxValues
};
//maxValues [1, 3, 5]
function updateMax(currentNode, currentLevel, maxValues){
if(!currentNode) return
// check if currentVal is greater than max for the current level
const currentMax = maxValues[currentLevel] === undefined ? -Infinity : maxValues[currentLevel]
const currentVal = currentNode.val
maxValues[currentLevel] = Math.max(currentMax, currentVal)
// add currentNode into currentPath
//recursively call updateMax for the next level
updateMax(currentNode.left, currentLevel + 1, maxValues)
updateMax(currentNode.right, currentLevel + 1, maxValues)
}
