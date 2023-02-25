// Merge Two Sorted Lists

// Solution
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists = function(list1, list2) {
  // create dummyNode to have placeholder for the merged list
  const dummyHead = new ListNode(null);
  let tail = dummyHead; // tail pointer

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
      // if current1 value is smaller than current2 val
      if (current1.val < current2.val) {
          tail.next = current1;
          current1 = current1.next;
      } else {
          tail.next = current2;
          current2 = current2.next;
      }
      tail = tail.next
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next
};

n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(1)
