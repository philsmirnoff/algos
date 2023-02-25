Reverse Linked List II

Solution
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]


var reverseBetween = function(head, left, right) {
  // create a dummy node and link it to the head of the given list
let dummy = new ListNode(0);
dummy.next = head;
let pre = dummy;

// move the pre pointer to the node just before the start of the reversal
for (let i = 0; i < left - 1; i++) {
  pre = pre.next;
}

// set the start pointer to the first node of the reversal
let start = pre.next;
// set the then pointer to the node following start
let then = start.next;

// loop over the nodes that need to be reversed
for (let i = 0; i < right - left; i++) {
  // unlink then from the rest of the list and link it back to the reversed portion
  start.next = then.next;
  then.next = pre.next;
  pre.next = then;
  // move the then pointer to the next node in the original list
  then = start.next;
}

// return the next node of the dummy node, which points to the head of the reversed list
return dummy.next;
};

// Time Complexity: O(n), where n is the number of nodes in the linked list. We need to traverse the list once, and in each iteration of the loop, we perform constant-time operations.
// Space Complexity: O(1). We only use constant extra space.

// function takes three arguments: the head of a linked list, and two integers left and right that specify the indices of the first and last nodes to be reversed, respectively. The function returns the head of the reversed list.

// The basic idea of the solution is to traverse the linked list and reverse the nodes between positions left and right. The solution is similar to the approach used in the "Reverse Linked List" problem, but with the added complexity of reversing only a part of the list.

// Here's how the solution works, line by line:

// Create a dummy node and link it to the head of the given list. This allows us to handle the case where the reversal starts at the head of the list, and simplifies the reversal process. Initialize a pre pointer to the dummy node.

// Move the pre pointer to the node just before the start of the reversal. This allows us to link the reversed portion back to the rest of the list when we are done.

// Set the start pointer to the first node of the reversal, and the then pointer to the node following start. These pointers will be used to reverse the nodes.

// Loop over the nodes that need to be reversed, using a for loop with a loop variable i that ranges from 0 to right - left. In each iteration, we unlink then from the rest of the list and link it back to the reversed portion. This is done by setting start.next to then.next, setting then.next to pre.next, and setting pre.next to then. We then move the then pointer to the next node in the original list.

// After the reversal is complete, return the next node of the dummy node, which points to the head of the reversed list.
