This code uses a stack to keep track of nodes that need to be visited later. It iterates through the linked list, handling the child nodes as specified and connecting nodes appropriately to flatten the structure.


// doubly linked list

var flatten = function(head) {
  if (!head) return head;
  let stack = []; //store all rest part of linkedlist nodes when has child
  let cur = head;
  while (cur){
      if (cur.child){
          if (cur.next) stack.push(cur.next);  //must check cur.next is null or not before added to stack
          cur.next = cur.child;
          cur.next.prev = cur; //because it is doubly linkedlist
          cur.child = null; //already assigned to next so now no child anymore. set null
      }
      else if (!cur.next && stack.length!= 0){ //now reach tail of linkedlist
          cur.next = stack.pop();
          cur.next.prev = cur; // because it is doubly linkedlist
      }
      cur = cur.next;
  }
  return head; //return reference of head
};


// flaten single linked list
class Node {
  constructor(val, next = null, child = null) {
    this.val = val;
    this.next = next;
    this.child = child;
  }
}

function flattenLinkedList(head) {
  if (!head) {
    return null;
  }

  const stack = [];
  let current = head;

  while (current) {
    if (current.child) {
      // If the current node has a child, push its next onto the stack
      if (current.next) {
        stack.push(current.next);
      }

      // Set the current node's next to its child and clear the child pointer
      current.next = current.child;
      current.child = null;
    }

    if (!current.next && stack.length > 0) {
      // If we reached the end of the current level, pop from the stack
      current.next = stack.pop();
    }

    current = current.next;
  }

  return head;
}
