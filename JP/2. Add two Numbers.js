// 2. Add Two Numbers
// Medium

// 23830

// 4601

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = (l1, l2) => {
    let dummy = new ListNode(-1);
    let current = dummy;
    let carry = 0;

    while (l1 || l2) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
}

// This problem can be solved by creating a new linked list and iterating through the two given linked lists, adding the corresponding digits and keeping track of any carry.
// In this solution, we create a dummy node to act as the head of the new linked list, and a current node to keep track of the current position in the new list. We also initialize a carry variable to 0.

// We then iterate through both linked lists, adding the corresponding digits and any carry. If one of the linked lists has been completely traversed, we just add the remaining digits from the other list and any carry.

// We calculate the carry by dividing the sum by 10, and the current digit of the new linked list is the remainder of sum divided by 10.

// After iterating through both linked lists, if there is still a carry, we add a new node with the carry as its value to the new linked list.

// Finally, we return the dummy.next as the head of the new linked list.

// The time complexity of this solution is O(max(n,m)) where n and m are the lengths of the two linked lists, and the space complexity is O(max(n,m)) as well.
