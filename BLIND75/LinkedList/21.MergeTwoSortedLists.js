var mergeTwoLists = function(list1, list2) {
  // Step 1: Create a dummy node that will act as the starting point of the merged list.
  // The dummy node helps simplify edge case handling.
  let dummy = new ListNode(null);

  // Step 2: Initialize a pointer `head` to point to the dummy node.
  // This will help us easily return the merged list later.
  let head = dummy;

  // Step 3: Traverse both lists while both lists are non-empty.
  // We'll compare the values of the current nodes in both lists and link the smaller node to the merged list.
  while (list1 !== null && list2 !== null) {
      // Step 4: If the value of the current node in list1 is less than or equal to the value in list2,
      // set the `next` pointer of `dummy` to the current node in list1.
      if (list1.val <= list2.val) {
          dummy.next = list1;

          // Step 5: Move the pointer in list1 to the next node.
          list1 = list1.next;
      } else {
          // Step 6: If the value of the current node in list2 is smaller than the value in list1,
          // set the `next` pointer of `dummy` to the current node in list2.
          dummy.next = list2;

          // Step 7: Move the pointer in list2 to the next node.
          list2 = list2.next;
      }

      // Step 8: Move the `dummy` pointer to the next node in the merged list (which is now `dummy.next`).
      dummy = dummy.next;
  }

  // Step 9: After one of the lists becomes empty, if there are remaining nodes in list1 or list2,
  // append the remainder of the non-empty list to the merged list.
  if (list1 !== null) {
      dummy.next = list1;  // Attach the remaining nodes of list1 to the merged list.
  } else {
      dummy.next = list2;  // Attach the remaining nodes of list2 to the merged list.
  }

  // Step 10: Return the merged list starting from the node after the dummy node.
  // We return `head.next` because `head` points to the dummy node which is not part of the result.
  return head.next;
};

Time Complexity:
O(n + m), where n and m are the lengths of list1 and list2, respectively. The algorithm processes each node in both lists exactly once.
Space Complexity:
O(1), because we're only using a constant amount of extra space (excluding the space for the input lists).
