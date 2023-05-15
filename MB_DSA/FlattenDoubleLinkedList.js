function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

//  1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6
//              |
//              7 <-> 8 <-> 9 <-> 10
//                    |
//                    11 <-> 12

// we will iterate through the linked listen, hit the child node 7, i need ro come back to 4,5,6 i ll put it in the stack. Then I go to 7, 8, and there is another child node 11, but i need also come back to this 9-10, so i put it to the stack. I go further, I reached the end and  so there is no other child node, there is no next node here, there is no next level to go to. So now I need get back to the previous level, and what I do here is just pop off the stack go to the next level, when i reached the end again, i hit the null or no childs left, I just need to move up the level.

// I go node by node and when I reach node with child, i need to push next node into the stack, and keep doing node by node untill i reach to the null.
// [[4,5,6], [9, 10]]

// 1 <-> 2 <-> 3 <-> 7 <-> 8 <->  11 <-> 12 <-> 4 <-> 5 <-> 6 <-> 9 <-> 10


const flatten = (head) => {
// I go node by node and when I reach node with child, i need to push next node into the stack, and keep doing node by node untill i reach to the null.
// we use dfs and use stack as our data structure

// we could potentially have an empty list, so we can check out it right away
if (!head || head.length == 0) return null

let prev = Node(0);

// we ll use array for stack and initilize it with head
  const stack = [head]

  // i l keep going untill i my stack is empty, and if the stack is empty i ll reach the end and i touched every single node
  while (stack.length > 0) {
    let curr = stack.pop();
    curr.prev = prev;
    prev.next = curr;

    if (curr.next) stack.push(curr.next)
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }
    prev = curr;
  }
  // at the end I will return the head
  return head;
}

// flattened linked list
// stack [1]
