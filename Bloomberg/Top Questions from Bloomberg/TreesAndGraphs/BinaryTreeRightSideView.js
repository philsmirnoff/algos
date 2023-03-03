// Binary Tree Right Side View

// Solution
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.



// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []


var rightSideView = function(root) {

  // Check if the root is null
   if (!root) {
       return [];
   }

   // Initialize an empty array to store the result
   const result = [];
   // Initialize a queue with the root node
   const queue = [root];

   // Loop until the queue is empty
   while (queue.length > 0) {
       // Get the number of nodes in the current level
       const level_size = queue.length;

       // Loop over all the nodes in the current level
       for (let i = 0; i < level_size; i++) {
           // Remove the leftmost node from the queue
           const node = queue.shift();

           // If this is the last node in the current level, add its value to the result
           if (i === level_size - 1) {
               result.push(node.val);
           }

           // Add the left child to the queue if it exists
           if (node.left) {
               queue.push(node.left);
           }

           // Add the right child to the queue if it exists
           if (node.right) {
               queue.push(node.right);
           }
       }
   }

   // Return the result array containing the values of the rightmost nodes
   return result;

};


// The JavaScript implementation is similar to the Python implementation. We start by checking if the root is null, in which case we return an empty array. Otherwise, we initialize two variables: result to store the result, and queue to perform the level-order traversal. We add the root to the queue and enter a loop that continues until the queue is empty.

// Inside the loop, we first get the number of nodes in the current level (level_size) using the queue.length property. We then iterate over all the nodes in the current level using a for loop. We shift the leftmost node from the queue using the shift() method and check if it's the last node in the current level (i.e., i === level_size - 1). If it is, we push its value to the result array.

// Next, we push the node's left and right children to the queue if they exist, starting with the right child. This ensures that the rightmost node is always visited before the leftmost node at each level.

// Finally, we return the result array containing the values of the rightmost nodes at each level, in the order from top to bottom.

// This solution has a time complexity of O(N), where N is the number of nodes in the binary tree, since we visit each node once. The space complexity is O(W), where W is the maximum width of the binary tree, since at most we need to store all the nodes at the last level in the queue.




