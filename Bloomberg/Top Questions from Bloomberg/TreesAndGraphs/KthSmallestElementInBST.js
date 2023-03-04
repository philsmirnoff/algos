// Kth Smallest Element in a BST

// Solution
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.



// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

var kthSmallest = function(root, k) {
  // create a variable to keep track of the current node
let current = root;
// create an empty stack to keep track of nodes to be processed
let stack = [];

// loop until the current node is null and the stack is empty
while (current || stack.length > 0) {
  // if the current node exists, push it to the stack and move to its left child
  if (current) {
    stack.push(current);
    current = current.left;
  } else {
    // if the current node is null, pop the last node from the stack and process it
    current = stack.pop();
    // decrement k
    k--;
    // if k is 0, we have found the kth smallest element, so return its value
    if (k == 0) {
      return current.val;
    }
    // move to the right child of the processed node
    current = current.right;
  }
}
};

// Time complexity: O(H + k) where H is a tree height. This complexity is defined by the stack, which contains at least H + k elements, since before starting to pop out one has to go down to a leaf. This results in O(logN + k) for the balanced tree and O(N + k) for completely unbalanced tree with all the nodes in the left subtree.

// Space complexity: O(H) to keep the stack, where H is a tree height. That makes O(N) in the worst case of the skewed tree, and O(logN) in the average case of the balanced tree.

// Explanation:

// The approach used here is based on the fact that in a binary search tree, the nodes are arranged in a specific order. If we perform an in-order traversal of the tree, the nodes will be visited in ascending order.

// The algorithm uses a stack to keep track of nodes to be processed. It starts with the root node and moves to its left child, pushing all nodes encountered onto the stack. When it reaches a null node, it pops the last node from the stack and processes it by decrementing k. If k is 0, it has found the kth smallest element and returns its value. If k is not 0, it moves to the right child of the processed node and continues the process.

// Note that the code uses the TreeNode class definition that is provided by LeetCode. It creates a variable called "current" to keep track of the current node being processed and an empty stack to store the nodes. It then loops until the current node is null and the stack is empty. The loop uses the "current" variable to traverse the tree, starting from the root node.

// The loop first checks if the current node exists. If it does, it pushes it to the stack and moves to its left child. If the current node is null, it pops the last node from the stack and processes it. It then checks if k is 0. If it is, it returns the value of the current node, which is the kth smallest element. If k is not 0, it moves to the right child of the processed node and continues the loop.

// Finally, the function returns the kth smallest element of the binary search tree

// The time complexity of the algorithm is O(h + k), where h is the height of the tree. In the worst case, when the tree is skewed, the height of the tree is n (the number of nodes in the tree), so the time complexity becomes O(n + k). The algorithm visits each node at most twice: once when pushing it onto the stack and once when popping it from the stack. So the time complexity is linear with respect to the number of nodes in the tree.

// The space complexity of the algorithm is O(h), where h is the height of the tree. In the worst case, when the tree is skewed, the height of the tree is n (the number of nodes in the tree), so the space complexity becomes O(n). The algorithm uses a stack to store nodes, and the size of the stack is at most h. So the space complexity is proportional to the height of the tree.
