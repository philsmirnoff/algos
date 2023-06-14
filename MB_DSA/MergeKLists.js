function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  }

  // Merge two sorted lists
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
  }

  // Divide and conquer approach to merge all lists
  function mergeLists(lists, start, end) {
    if (start === end) {
      return lists[start];
    }
    const mid = Math.floor((start + end) / 2);
    const left = mergeLists(lists, start, mid);
    const right = mergeLists(lists, mid + 1, end);
    return mergeTwoLists(left, right);
  }


  return mergeLists(lists, 0, lists.length - 1);
}
