// Populating Next Right Pointers in Each Node

// Solution
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.



// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []

function connect(root) {
  // If the root is null or the root is a leaf node, there is no need to connect anything
  if (root === null || root.left === null) {
    return root;
  }

  // Connect the left child to the right child
  root.left.next = root.right;

  // If the root has a next node, connect the right child to the next node's left child
  if (root.next !== null) {
    root.right.next = root.next.left;
  }

  // Recursively connect the left and right subtrees
  connect(root.left);
  connect(root.right);

  return root;
}
// Here's how the solution works, line by line:

// We define a function called connect that takes in the root of the binary tree as an argument.

// We check if the root is null or if the root is a leaf node (i.e. it has no children). If either of these conditions is true, there is no need to connect anything, so we return the root.

// We connect the left child of the root node to the right child of the root node.

// We check if the root has a next node (i.e. if it is not the last node in the level). If it does, we connect the right child of the root node to the left child of the next node.

// We recursively call the connect function on the left and right subtrees of the root node.

// We return the root.

// Overall, this solution connects each node in a perfect binary tree to its next right node by setting the next pointer. The time complexity of this solution is O(n) because each node in the binary tree is visited exactly once, and the space complexity is O(log n) due to the use of the recursive function calls (where n is the number of nodes in the binary tree).



