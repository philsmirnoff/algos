// Flatten a Multilevel Doubly Linked List

// Solution
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

// Example 3:

// Input: head = []
// Output: []
// Explanation: There could be empty list in the input.


var flatten = function(head) {
  if (!head) {
    return null;
  }

  let stack = [head]; // create a stack to store nodes in the linked list
  let prev = null; // create a variable to store the previous node

  // loop through each node in the linked list
  while (stack.length > 0) {
    let curr = stack.pop(); // pop the current node from the stack

    if (prev) {
      prev.next = curr; // link the previous node to the current node
      curr.prev = prev;
    }

    if (curr.next) {
      stack.push(curr.next); // push the next node onto the stack
    }

    if (curr.child) {
      stack.push(curr.child); // push the child node onto the stack
      curr.child = null; // set the child pointer to null
    }

    prev = curr; // set the previous node to the current node
  }

  return head;
};


// Explanation:

// The approach used here is to flatten the doubly linked list using a stack to store the nodes in the linked list. The algorithm iterates through each node in the linked list and pushes its child and next nodes onto the stack if they exist. It then links the current node to the previous node in the flattened list, updates the previous node to the current node, and repeats the process until the stack is empty.

// The code creates a stack called "stack" to store nodes in the linked list and a variable called "prev" to store the previous node. It also checks if the input linked list is null or empty and returns null in that case.

// The loop iterates over each node in the linked list using a stack. It starts by popping the current node from the stack and linking it to the previous node in the flattened list. If the current node has a next node, it pushes it onto the stack. If the current node has a child node, it pushes it onto the stack and sets the child pointer to null. Finally, it updates the previous node to the current node and repeats the process until the stack is empty.

// Finally, the function returns the head of the flattened list.

// The time complexity of this solution is O(n), where n is the number of nodes in the linked list. The algorithm iterates over each node in the linked list exactly once.

// The space complexity of this solution is O(n), where n is the number of nodes in the linked list. The stack can store up to n nodes in the worst case when all nodes have a child pointer.
