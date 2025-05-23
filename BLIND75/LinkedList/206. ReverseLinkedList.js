206. Reverse Linked List
Easy

11798

204

Add to List

Share
Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000


Solution:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // lets point current navigator to head, and set prev to null
    let curr = head;
    let prev = null;


    // let iterate through the linked list untill we hit the null
    while(curr !== null) {
        // save the reference pointer
        let holdNext = curr.next;
        // reverse that pointer
        curr.next = prev;
        // move previous pointer forward
        prev = curr;
        // no we need to move curr forward
        curr = holdNext;

    }
    // we need to return prev, not curr because it will retun null
    return prev
};


Instead of 2 pointing at 3 we will want point it to previous node (1). We can use two pointers. We can initilise current pointer to the first node, our head. And previous pointer that inititally will be set to null. So for the first node 1 we will take next pointer and reverse it, so now next pointer will be point at null. So now it will be the last element in our new reversed linked list. So now we can shift our pointers. We shift our previous pointer to the current pointer, and current pointer shift to the next node. and since we brokke this link we need to save it somewhere. SO now our current is 2 and we want to take our next pointer and reverse it and it will be pointing to previous, and then we will shift our previous pointer to current and current point to next. no previous will be in 3 and current will be at null we reached the end of our linked list. now we return the head. and we return prev, not current because the current points to null.

https://medium.com/future-vision/data-structures-algorithms-linked-lists-fc0b8a82d609
Yes, that is a correct implementation of reversing a singly linked list. The algorithm uses a technique called "in-place reversal" which modifies the existing list without creating a new one.

It uses three pointers: curr, prev, and holdNext to iterate through the list, reversing the pointers one by one.

curr is initialized as the head of the list, prev is initialized as null, and holdNext is used to temporarily store the reference to the next node.

The while loop iterates through the list until it reaches the end (curr equals to null).

In each iteration, holdNext is used to store the reference to the next node before reversing the pointer, curr.next is set to prev, prev is moved forward to the current node, and curr is moved forward to the next node.

Finally, the reversed list is returned by returning prev, not curr because curr will be equal to null at the end of the iteration.
