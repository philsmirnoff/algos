// Validate Binary Search Tree

// Solution
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// iterative solution
var isValidBST = function(root) {
  let stack = [];
let prev = null;

while (root || stack.length) {
while (root) {
  stack.push(root);
  root = root.left;
}

root = stack.pop();

if (prev !== null && root.val <= prev) {
  return false;
}

prev = root.val;
root = root.right;
}

return true;
};

// This solution uses an iterative approach using a stack to traverse the binary tree in-order (left, root, right). Here's how the solution works:

// We define a function called isValidBST that takes in the root of the binary tree as an argument.

// We initialize an empty stack and a prev variable to keep track of the previous value seen in the in-order traversal.

// We enter a while loop that continues until we have processed all the nodes in the binary tree.

// Inside the while loop, we enter another while loop that traverses as far left as possible from the current node, pushing each node onto the stack.

// Once we reach the leftmost node, we pop the top node from the stack and check if its value is less than or equal to the previous value seen in the traversal. If so, we return false because the node violates the rules of a BST.

// If the node's value is greater than the previous value seen in the traversal, we update the prev variable to the current node's value and move to the right subtree.

// We repeat steps 4-6 until the stack is empty and we have processed all the nodes in the binary tree.

// Finally, we return true if we have not found any violations of the BST rules, indicating that the binary tree is a valid BST.

// This solution has a time complexity of O(n) and a space complexity of O(n) due to the use of a stack to perform the in-order traversal.


// recursive solution
var isValidBST = function(root) {
  let prev = null;
  return helper(root);

  function helper(root) {
    if (!root) return true;

    if (!helper(root.left)) return false;

    if (prev !== null && root.val <= prev) return false;

    prev = root.val;

    if (!helper(root.right)) return false;

    return true;
  }
}

// This solution uses a recursive approach to traverse the binary tree in-order (left, root, right). Here's how the solution works:

// We define a function called isValidBST that takes in the root of the binary tree as an argument.

// We initialize a prev variable to keep track of the previous value seen in the in-order traversal.

// We define a helper function that takes in the root of the binary tree as an argument.

// Inside the helper function, we check if the root is null. If so, we return true because we have reached the end of the tree and have not found any violations of the BST rules.

// We then recursively call the helper function on the left subtree. If the left subtree is not a valid BST, we return false.

// We then check if the previous value seen in the traversal is not null and if the current node's value is less than or equal to the previous value seen in the traversal. If so, we return false because the node violates the rules of a BST.

// If the node's value is greater than the previous value seen in the traversal, we update the prev variable to the current node's value.

// We then recursively call the helper function on the right subtree. If the right subtree is not a valid BST, we return false.

// Finally, we return true if we have not found any violations of the BST rules, indicating that the binary tree is a valid BST.

// We then return the result of calling the helper function on the root of the binary tree.

// This solution has a time complexity of O(n) and a space complexity of O(n) due to the use of a stack to perform the in-order traversal.

