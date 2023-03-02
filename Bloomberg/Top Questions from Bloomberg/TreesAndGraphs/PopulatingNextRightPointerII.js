// Populating Next Right Pointers in Each Node II

// Solution
// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.



// Example 1:


// Input: root = [1,2,3,4,5,null,7]
// Output: [1,#,2,3,#,4,5,7,#]
// Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []



var connect = function(root) {
  // If the root is null or the root is a leaf node, there is no need to connect anything
   if (root === null || (root.left === null && root.right === null)) {
     return root;
   }

   // If the root has a left child and a right child, connect the left child to the right child
   if (root.left !== null && root.right !== null) {
     root.left.next = root.right;
   }

   // Find the next node to connect and connect it to the appropriate child of the root node
   let next = root.next;
   while (next !== null) {
     if (next.left !== null) {
       if (root.right !== null) {
         root.right.next = next.left;
         break;
       } else if (root.left !== null) {
         root.left.next = next.left;
         break;
       }
     } else if (next.right !== null) {
       if (root.right !== null) {
         root.right.next = next.right;
         break;
       } else if (root.left !== null) {
         root.left.next = next.right;
         break;
       }
     }
     next = next.next;
   }

   // Recursively connect the right subtree first (since the right subtree is connected first in the next level) and then the left subtree
   connect(root.right);
   connect(root.left);

   return root;
 };


//  Here's how the solution works, line by line:

// We define a function called connect that takes in the root of the binary tree as an argument.

// We check if the root is null or if the root is a leaf node (i.e. it has no children). If either of these conditions is true, there is no need to connect anything, so we return the root.

// If the root has both a left child and a right child, we connect the left child to the right child.

// We loop through the next nodes to find the next node to connect and connect it to the appropriate child of the root node. We start by setting next to the next node of the root and checking if the next node has a left child or a right child. If it has a left child, we check if the root has a right child. If it does, we connect the right child of the root to the left child of the next node and break out of the loop. If the root does not have a right child but has a left child, we connect the left child of the root to the left child of the next node and break out of the loop. If the next node has a right child, we follow a similar process, checking if the root has a right child and then a left child. If we have not found a node to connect yet, we move on to the next node.

// We recursively call the connect function on the right subtree first (since the right subtree is connected first in the next level) and then the left subtree.

// We return the root.

// Overall, this solution connects each node in a binary tree to its next right node by setting the next pointer. The time complexity of this solution is O(n) because each node in the binary tree is visited exactly once, and the space complexity is O(1) because the solution does not use any additional
