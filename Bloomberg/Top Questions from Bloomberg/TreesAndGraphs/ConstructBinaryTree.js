// Construct Binary Tree from Preorder and Inorder Traversal

// Solution
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]




var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
  return null;
}

let rootVal = preorder[0];
let rootIndex = inorder.indexOf(rootVal);

let leftInorder = inorder.slice(0, rootIndex);
let rightInorder = inorder.slice(rootIndex + 1);

let leftPreorder = preorder.slice(1, rootIndex + 1);
let rightPreorder = preorder.slice(rootIndex + 1);

let leftSubtree = buildTree(leftPreorder, leftInorder);
let rightSubtree = buildTree(rightPreorder, rightInorder);

let root = new TreeNode(rootVal);
root.left = leftSubtree;
root.right = rightSubtree;

return root;
};

// Let's go over the solution line by line:

// We define a function called buildTree that takes in the preorder and inorder arrays as arguments.

// If the preorder array is empty, we return null because there are no more nodes to add to the binary tree.

// We extract the value of the root node from the beginning of the preorder array.

// We find the index of the root node's value in the inorder array, which splits the inorder array into the left and right subtrees.

// We create new leftInorder and rightInorder arrays by slicing the inorder array based on the root index.

// We create new leftPreorder and rightPreorder arrays by slicing the preorder array based on the size of the leftInorder array.

// We recursively call the buildTree function on the leftPreorder and leftInorder arrays to construct the left subtree of the current node.

// We recursively call the buildTree function on the rightPreorder and rightInorder arrays to construct the right subtree of the current node.

// We create a new TreeNode with the value of the root node.

// We assign the left and right subtrees to the left and right properties of the root node.

// We return the root node of the binary tree.

// Overall, this solution uses recursion to construct a binary tree from the preorder and inorder traversals by splitting the arrays into the left and right subtrees and constructing each subtree recursively. The time complexity of this solution is O(n^2) in the worst case where each node only has one child, and the space complexity is O(n) due to the use of recursive function calls.


// using a hashmap
function buildTree(preorder, inorder) {
  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, map);
}

function buildTreeHelper(preorder, preStart, preEnd, inorder, inStart, inEnd, map) {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  let rootVal = preorder[preStart];
  let rootIndex = map.get(rootVal);
  let leftSubtreeSize = rootIndex - inStart;

  let root = new TreeNode(rootVal);

  root.left = buildTreeHelper(preorder, preStart + 1, preStart + leftSubtreeSize, inorder, inStart, rootIndex - 1, map);
  root.right = buildTreeHelper(preorder, preStart + leftSubtreeSize + 1, preEnd, inorder, rootIndex + 1, inEnd, map);

  return root;
}

// Here's how the more efficient solution works:

// We define a function called buildTree that takes in the preorder and inorder arrays as arguments.

// We create a new Map called map to store the indices of the nodes in the inorder array.

// We loop through the inorder array and add each node's value and index to the map.

// We call a helper function called buildTreeHelper passing in the preorder, inorder, and map arrays as arguments along with the start and end indices for each array.

// In the buildTreeHelper function, we first check if the start indices are greater than the end indices for both the preorder and inorder arrays. If they are, we return null because there are no more nodes to add to the binary tree.

// We extract the value of the root node from the beginning of the preorder array.

// We find the index of the root node's value in the inorder array using the map, which splits the inorder array into the left and right subtrees.

// We calculate the size of the left subtree by subtracting the start index of the inorder array from the root index.

// We create a new TreeNode with the value of the root node.

// We recursively call the buildTreeHelper function on the left and right subtrees of the current node, passing in the appropriate start and end indices for each array.

// We assign the left and right subtrees to the left and right properties of the root node.

// We return the root node of the binary tree.

// Overall, this solution uses a HashMap to store the indices of the nodes in the inorder array, reducing the time complexity of the solution to O(n) in the average case. The space complexity of this solution is O(n) due to the use of the map and the recursive function calls.


