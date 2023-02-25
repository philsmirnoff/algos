Add Two Numbers II

// Solution
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]


var addTwoNumbers = function(l1, l2) {
// create two empty arrays to store the values of l1 and l2
let num1 = [];
let num2 = [];

// loop through l1 and add each value to num1 array
while (l1) {
  num1.push(l1.val);
  l1 = l1.next;
}

// loop through l2 and add each value to num2 array
while (l2) {
  num2.push(l2.val);
  l2 = l2.next;
}

// initialize carry variable to 0 and an empty list to store the result
let carry = 0;
let res = null;

// loop while either num1 or num2 or carry are not empty
while (num1.length || num2.length || carry) {
  // compute the sum of the last digits of num1 and num2 and carry
  let sum = (num1.pop() || 0) + (num2.pop() || 0) + carry;
  carry = Math.floor(sum / 10); // compute the carry
  sum = sum % 10; // compute the sum without the carry

  // create a new node with the current sum and link it to the previous result
  let newNode = new ListNode(sum);
  newNode.next = res;
  res = newNode;
}

return res;
}

Time Complexity: O(max(m, n)), where m and n are the lengths of l1 and l2 respectively.
Space Complexity: O(max(m, n)), since we need to store the values of l1 and l2 in num1 and num2 respectively.
// Explanation:

// The problem requires adding two linked lists with the most significant digit first. To do this, we first need to extract the values of the two lists into two arrays, with the least significant digit first. We can then add the two arrays element-wise, from the end to the beginning, just like we would do in elementary school.

// Here's how the code works, line by line:

// We create two empty arrays to store the values of l1 and l2.

// We loop through l1 and add each value to the num1 array.

// We loop through l2 and add each value to the num2 array.

// We initialize a carry variable to 0 and an empty list res to store the result.

// We loop while either num1 or num2 or carry are not empty, using a while loop. In each iteration, we compute the sum of the last digits of num1 and num2 and carry, and then update carry and sum. We then create a new node with the current sum value, and link it to the previous result res.

// Finally, we return res, which is the head of the resulting linked list.

// Note that the ListNode class is assumed to be defined elsewhere and have at least two properties: val and next. The val property represents the value of the current node, and the next property is a reference to the next node in the list.
