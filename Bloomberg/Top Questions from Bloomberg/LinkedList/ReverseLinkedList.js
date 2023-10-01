// Reverse Linked List

// Solution
// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]

// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


var reverseList = function(head) {
  // lets point current navigator to head, and set prev to null
  let curr = head;
  let prev = null;


  // let iterate through the linked list untill we hit the null
  while(curr !== null) {
      // save the reference pointer
      let holdNext = curr.next;
      // reverse that pointer
      curr.next = prev;
      // move previous pointer forward
      prev = curr;
      // no we need to move curr forward
      curr = holdNext;

  }
  // we need to return prev, not curr because it will retun null
  return prev
};

//   This is a function in JavaScript that takes a singly linked list and returns a new linked list that is the reverse of the original list. Here's how it works:

// Initialize two variables prev and current to null and head, respectively. prev will be used to store the node that comes before the current node in the reversed list, and current is used to traverse the original list.

// While current is not null, the function enters a loop. This loop will run until we reach the end of the original list.

// Inside the loop, we create a new variable saveRef to hold a reference to the next node in the original list, since we will be modifying the current.next pointer.

// Then, we set current.next to prev. This effectively reverses the next pointer of the current node, so that it points to the previous node in the reversed list.

// Next, we set prev to current, and current to saveRef. This moves prev and current one node forward in the original list.

// After the loop is finished, prev will be pointing to the last node in the original list, which is now the first node in the reversed list. We return prev.

// So overall, this function iterates over the original linked list, and reverses the direction of the next pointers to create a new linked list that is the reverse of the original.


// input head: 1 -> 2 -> 3 -> 4
// output prev: 4 -> 3 -> 2 -> 1
