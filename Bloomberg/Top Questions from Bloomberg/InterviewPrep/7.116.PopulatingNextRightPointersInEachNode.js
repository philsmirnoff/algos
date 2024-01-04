// 116. Populating Next Right Pointers in Each Node
// Medium
// 9.4K
// 291
// company
// Bloomberg
// company
// Salesforce
// company
// Google
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

t: 0(n)
S: (logn)
The space complexity of the given solution for a perfect binary tree is O(log N), where N is the number of nodes in the tree.

In a perfect binary tree, the height of the tree (h) is logarithmic in the number of nodes, specifically log₂(N). The recursive calls in the function contribute to the call stack, and since the maximum recursion depth is determined by the height of the tree, the space complexity is logarithmic.

Therefore, the recursive calls and the space required for the call stack in this solution result in a space complexity of O(log N) for a perfect binary tree.
