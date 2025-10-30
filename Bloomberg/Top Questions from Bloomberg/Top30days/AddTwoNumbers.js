// Add Two Numbers

// Solution
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

// solution

// var addTwoNumbers = function(l1, l2) {
//   let dummy = new ListNode(-1);
//   let current = dummy;
//   let carry = 0;

//   while (l1 || l2) {
//       let sum = carry;
//       if (l1) {
//           sum += l1.val;
//           l1 = l1.next;
//       }
//       if (l2) {
//           sum += l2.val;
//           l2 = l2.next;
//       }
//       carry = Math.floor(sum / 10);
//       current.next = new ListNode(sum % 10);
//       current = current.next;
//   }
//   if (carry > 0) {
//       current.next = new ListNode(carry);
//   }
//   return dummy.next;
// };

// AI
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// Explanation:

// The idea of this solution is to traverse both linked lists, digit by digit, adding the corresponding values along with any carry that results from adding the previous digits. The new node in the resulting linked list is created by taking the remainder of the sum of the digits and 10, and the carry for the next iteration is computed as the quotient of the same sum.

// We start by creating a dummy head node for the resulting linked list, which will be discarded later. We also initialize a current variable to keep track of where we are in the resulting linked list, and a carry variable to hold any carry over from adding the previous digits.

// Then, we start a loop that will continue until we have processed all the digits in both linked lists. In each iteration, we check whether we have reached the end of either list, and if not, we extract the value of the current digit and add it to the value of the corresponding digit in the other list, along with the carry from the previous iteration.

// We update the carry variable and create a new node in the resulting linked list with the remainder of the sum. We move the current pointer to the next node in the resulting list.

// Finally, if we have a carry left over at the end of the loop, we create a new node with that value.

// The ListNode class is assumed to be defined elsewhere and have at least two properties: val and next. The val property represents the value of the current digit, and the next property is a reference to the next node in the linked list.

// To
