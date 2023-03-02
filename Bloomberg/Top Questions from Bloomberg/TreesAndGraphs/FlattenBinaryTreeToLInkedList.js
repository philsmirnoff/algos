Flatten Binary Tree to Linked List

// Solution
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.


// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]

function flatten(root) {
  // If the root is null, there are no nodes to add to the linked list
  if (root === null) {
    return;
  }

  // Recursively call the flatten function on the left and right subtrees
  let left = root.left;
  let right = root.right;
  flatten(left);
  flatten(right);

  // Set the left child of the root node to null and the right child to the left subtree
  root.left = null;
  root.right = left;

  // Traverse the linked list to find the end and append the right subtree
  let current = root;
  while (current.right !== null) {
    current = current.right;
  }
  current.right = right;
}

// Here's how the solution works, line by line:

// We define a function called flatten that takes in the root of the binary tree as an argument.

// We check if the root is null. If it is, we return because there are no nodes to add to the linked list.

// We create variables called left and right and set them to the left and right subtrees of the root node, respectively.

// We recursively call the flatten function on the left and right subtrees to flatten them.

// We set the left child of the root node to null because we don't want the left subtree to appear in the linked list.

// We set the right child of the root node to the left subtree because the left subtree comes before the right subtree in a pre-order traversal of the binary tree.

// We create a variable called current and set it to the root node. This variable will be used to traverse the linked list and find the end.

// We loop through the linked list by checking if the right child of the current node is null. When we find the end of the linked list, the current variable will hold the last node in the list.

// We set the right child of the current node to the right subtree, which comes after the left subtree in the linked list.

// We return the modified binary tree, which is now a linked list.

// Overall, this solution modifies the binary tree in-place to form a linked list in the same order as a pre-order traversal of the binary tree. The time complexity of this solution is O(n) because each node in the binary tree is visited exactly once, and the space complexity is O(n) due to the use of the recursive function calls.




