A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.



Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]


var copyRandomList = function(head) {
  if (!head) {
    return null;
  }
  // create a hash table to map the original nodes to the new nodes
  let nodeMap = new Map();

  // create a new node for the head of the copied list
  let newHead = new Node(head.val, null, null);

  // add the head node to the hash table
  nodeMap.set(head, newHead);

  // create pointers to the head of the original and copied lists
  let current = head;
  let newCurrent = newHead;

  // loop through the original list and copy each node
  while (current) {
    // if the next node exists, add it to the hash table and create a new node for it
    if (current.next) {
      if (!nodeMap.has(current.next)) {
        nodeMap.set(current.next, new Node(current.next.val, null, null));
      }
      newCurrent.next = nodeMap.get(current.next);
    }

    // if the random node exists, add it to the hash table and create a new node for it
    if (current.random) {
      if (!nodeMap.has(current.random)) {
        nodeMap.set(current.random, new Node(current.random.val, null, null));
      }
      newCurrent.random = nodeMap.get(current.random);
    }

    // move the pointers to the next nodes
    current = current.next;
    newCurrent = newCurrent.next;
  }

  return newHead;
};

Time Complexity: O(n) where n is the number of nodes in the linked list.
Space Complexity: O(n) where n is the number of nodes in the linked list.
Explanation:

The problem requires creating a deep copy of a linked list with random pointers. To do this, we need to create a new node for each node in the original list, and then link the next and random pointers of the new nodes to the corresponding new nodes in the copied list. We also need to keep track of the mapping between the original nodes and the new nodes, to ensure that we do not create multiple copies of the same node.

Here's how the code works, line by line:

We create a hash table nodeMap to map the original nodes to the new nodes. We will use this hash table to look up the corresponding new nodes when creating the links between nodes.

We create a new node newHead for the head of the copied list, using the constructor for the Node class.

We add the head node of the original list to the hash table, with its corresponding new node.

We create pointers to the head of the original and copied lists, named current and newCurrent respectively.

We loop through the original list using a while loop, adding each node to the hash table and creating a new node for it. We also create the links between the new nodes as we go, by looking up the corresponding new nodes in the hash table. Note that the random pointers need to be handled separately from the next pointers.

Finally, we return newHead, which is the head of the resulting copied list.

Note that the Node class is assumed to be defined elsewhere and have at least three properties: val, next, and random. The val property represents the value of the current node, the next property is a reference to the next node in the list, and the random property is a reference to a random node in the list.

