Design a queue-like data structure that moves the most recently used element to the end of the queue.

Implement the MRUQueue class:

MRUQueue(int n) constructs the MRUQueue with n elements: [1,2,3,...,n].
int fetch(int k) moves the kth element (1-indexed) to the end of the queue and returns it.


Example 1:

Input:
["MRUQueue", "fetch", "fetch", "fetch", "fetch"]
[[8], [3], [5], [2], [8]]
Output:
[null, 3, 6, 2, 2]

Explanation:
MRUQueue mRUQueue = new MRUQueue(8); // Initializes the queue to [1,2,3,4,5,6,7,8].
mRUQueue.fetch(3); // Moves the 3rd element (3) to the end of the queue to become [1,2,4,5,6,7,8,3] and returns it.
mRUQueue.fetch(5); // Moves the 5th element (6) to the end of the queue to become [1,2,4,5,7,8,3,6] and returns it.
mRUQueue.fetch(2); // Moves the 2nd element (2) to the end of the queue to become [1,4,5,7,8,3,6,2] and returns it.
mRUQueue.fetch(8); // The 8th element (2) is already at the end of the queue so just return it.



/**
 * @param {number} n
 */

class MRUQueue {
  // Constructor to initialize the MRUQueue with n elements [1, 2, ..., n]
  constructor(n) {
    // Create an array of size n, fill it with undefined values, and map each element to its index + 1
    this.queue = Array(n).fill().map((_, i) => i + 1);
  }

  // Method to fetch the kth element and move it to the end of the queue
  fetch(k) {
    // Remove the kth element from the queue and store it in the variable 'element'
    const element = this.queue.splice(k - 1, 1)[0];
    // Push the removed element to the end of the queue
    this.queue.push(element);
    // Return the moved element
    return element;
  }
}

// Example usage:
// const mRUQueue = new MRUQueue(8); // Initializes the queue to [1,2,3,4,5,6,7,8].
// console.log(mRUQueue.fetch(3)); // Moves the 3rd element (3) to the end of the queue to become [1,2,4,5,6,7,8,3] and returns it.
// console.log(mRUQueue.fetch(5)); // Moves the 5th element (6) to the end of the queue to become [1,2,4,5,7,8,3,6] and returns it.
// console.log(mRUQueue.fetch(2)); // Moves the 2nd element (2) to the end of the queue to become [1,4,5,7,8,3,6,2] and returns it.
// console.log(mRUQueue.fetch(8)); // The 8th element (2) is already at the end of the queue, so just return it.

// // Doubly linked List solution
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class MRUQueue {
//   constructor(n) {
//     // Create a dummy node to simplify edge cases
//     this.head = new Node(-1);
//     this.tail = this.head;

//     // Initialize the doubly linked list with nodes representing elements from 1 to n
//     for (let i = 1; i <= n; i++) {
//       const newNode = new Node(i);
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//   }

//   fetch(k) {
//     let current = this.head.next;

//     // Traverse to the kth node in the doubly linked list
//     for (let i = 1; i < k; i++) {
//       current = current.next;
//     }

//     // Move the current node to the end of the list
//     this.moveToEnd(current);

//     // Return the value of the moved element
//     return current.value;
//   }

//   moveToEnd(node) {
//     // Remove the node from its current position
//     node.prev.next = node.next;
//     if (node.next) {
//       node.next.prev = node.prev;
//     }

//     // Move the node to the end of the list
//     this.tail.next = node;
//     node.prev = this.tail;
//     node.next = null;

//     // Update the tail to the newly moved node
//     this.tail = node;
//   }
// }

// // Example usage:
// const mRUQueue = new MRUQueue(8);
// console.log(mRUQueue.fetch(3));
// console.log(mRUQueue.fetch(5));
// console.log(mRUQueue.fetch(2));
// console.log(mRUQueue.fetch(8));

