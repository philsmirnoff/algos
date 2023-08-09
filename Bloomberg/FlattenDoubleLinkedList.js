// 430. Flatten a Multilevel Doubly Linked List
// Medium

// 3900

// 271

// Add to List

// Share
// You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

// Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

// Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.



// Example 1:


// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes:

// Example 2:


// Input: head = [1,2,null,3]
// Output: [1,3,2]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes:


var flatten = function(head) {
  if (!head) return null; // If the input linked list is empty, return null.

  const stack = []; // Initialize a stack to keep track of nodes.
  let curr = head; // Start from the head of the linked list.

  while (curr !== null || stack.length > 0) {
      // Iterate through the linked list until curr becomes null and the stack is empty.

      if (curr.child) {
          // If the current node has a child.
          if (curr.next) stack.push(curr.next); // Push the next node onto the stack if it exists.
          curr.next = curr.child; // Set the next pointer of the current node to the child node.
          curr.child.prev = curr; // Set the previous pointer of the child node to the current node.
          curr.child = null; // Set the child pointer of the current node to null.
      } else if (curr.next === null && stack.length > 0) {
          // If the current node doesn't have a child but the stack is not empty.
          const nextNode = stack.pop(); // Pop a node from the stack.
          curr.next = nextNode; // Set the next pointer of the current node to the popped node.
          nextNode.prev = curr; // Set the previous pointer of the popped node to the current node.
      }

      curr = curr.next; // Move to the next node.
  }

  return head; // Return the head of the flattened linked list.
};
This code uses a stack to keep track of nodes that need to be visited later. It iterates through the linked list, handling the child nodes as specified and connecting nodes appropriately to flatten the structure.





