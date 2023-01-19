// 876. Middle of the Linked List
// Easy

// 8532

// 243

// Add to List

// Share
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
}


// This solution uses a two pointer approach. We initialize two pointers, slow and fast, both set to the head of the linked list. We then iterate through the linked list. In each iteration, we move the slow pointer one step forward and the fast pointer two steps forward. When the fast pointer reaches the end of the linked list, the slow pointer will be pointing at the middle node. This is because the slow pointer moves at half the speed of the fast pointer.

// Time Complexity


// The above algorithm will have a time complexity of
// O(N) where ‘N’ is the number of nodes in the LinkedList.

// Space Complexity

// The algorithm runs in constant space
// O(1).
