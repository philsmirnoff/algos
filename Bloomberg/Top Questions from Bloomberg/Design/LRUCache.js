// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.



// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


// solution number 1
To solve this problem, you can use a combination of a Hash Map and a Doubly Linked List to implement the Least Recently Used (LRU) cache. The Hash Map will help you quickly access and update the values associated with keys, while the Doubly Linked List will help you keep track of the order in which keys were recently accessed.

Here's a JavaScript implementation of the LRU Cache:

javascript
Copy code
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Hash Map to store key-value pairs
        this.doublyLinkedList = new DoublyLinkedList(); // Doubly Linked List for tracking usage order
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key).value;
            // Move the accessed key to the front of the linked list
            this.doublyLinkedList.moveToFront(this.cache.get(key));
            return value;
        }
        return -1; // Key not found
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // Update the value and move the key to the front of the linked list
            const node = this.cache.get(key);
            node.value = value;
            this.doublyLinkedList.moveToFront(node);
        } else {
            // Add a new key-value pair to the cache and linked list
            if (this.cache.size === this.capacity) {
                // If capacity is exceeded, remove the least recently used key
                const removedNode = this.doublyLinkedList.removeFromEnd();
                this.cache.delete(removedNode.key);
            }
            const newNode = new Node(key, value);
            this.cache.set(key, newNode);
            this.doublyLinkedList.addToFront(newNode);
        }
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(); // Dummy head node
        this.tail = new Node(); // Dummy tail node
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToFront(node) {
        // Add a node to the front of the linked list
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    moveToFront(node) {
        // Move a node to the front of the linked list
        this.removeFromList(node);
        this.addToFront(node);
    }

    removeFromEnd() {
        // Remove a node from the end of the linked list and return it
        const node = this.tail.prev;
        this.removeFromList(node);
        return node;
    }

    removeFromList(node) {
        // Remove a node from the linked list
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

// 1 <--> 2 <--> 3
Explanation:

The LRUCache class implements the LRU cache using the Hash Map (this.cache) to store key-value pairs and the Doubly Linked List (this.doublyLinkedList) to track the usage order of keys.

The Node class represents nodes in the Doubly Linked List.

The DoublyLinkedList class defines methods for adding, moving, and removing nodes from the linked list.

In the LRUCache class, the get method returns the value of a key if it exists in the cache. If found, it also moves the accessed key to the front of the linked list.

The put method updates or adds a key-value pair to the cache. If the cache is at capacity, it removes the least recently used key before adding the new key-value pair.

This solution ensures that both get and put operations run in O(1) average time complexity, as required by the problem. It effectively maintains the LRU cache behavior using a combination of Hash Map and Doubly Linked List.








// solution number 2
To implement this data structure in JavaScript, we can use a Map to store the key-value pairs and a Doubly Linked List to maintain the order of the keys based on their usage.

// Node class represents a node in the Doubly Linked List
class Node {
  constructor(key, val) {
    this.key = key; // key of the node
    this.val = val; // value of the node
    this.prev = null; // reference to the previous node
    this.next = null; // reference to the next node
  }
}

// LRUCache class implements the LRU Cache data structure
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // maximum capacity of the cache
    this.cache = new Map(); // Map to store key-value pairs
    this.head = new Node(null, null); // head of the Doubly Linked List
    this.tail = new Node(null, null); // tail of the Doubly Linked List
    this.head.next = this.tail; // connect head to tail
    this.tail.prev = this.head; // connect tail to head
  }

  // get method takes a key and returns the value associated with the key if it exists in the cache
  // otherwise it returns -1
  get(key) {
    if (this.cache.has(key)) { // check if the cache has the key
      const node = this.cache.get(key); // get the node associated with the key
      this.moveToHead(node); // move the node to the head of the Doubly Linked List
      return node.val; // return the value of the node
    } else {
      return -1; // key not found in the cache
    }
  }

  // put method takes a key and a value and adds the key-value pair to the cache
  // if the key already exists, it updates the value and moves the corresponding node to the head of the Doubly Linked List
  // if the cache exceeds the capacity, it removes the least recently used node from the tail of the Doubly Linked List
  put(key, value) {
    if (this.cache.has(key)) { // check if the cache has the key
      const node = this.cache.get(key); // get the node associated with the key
      node.val = value; // update the value of the node
      this.moveToHead(node); // move the node to the head of the Doubly Linked List
    } else {
      const node = new Node(key, value); // create a new node with the key and value
      this.cache.set(key, node); // add the key-value pair to the cache
      this.addToHead(node); // add the node to the head of the Doubly Linked List
      if (this.cache.size > this.capacity) { // check if the cache has exceeded the capacity
        const tail = this.removeTail(); // remove the least recently used node from the tail of the Doubly Linked List
        this.cache.delete(tail.key); // delete the key-value pair from the cache
      }
    }
  }

  // addToHead method adds a node to the head of the Doubly Linked List
  addToHead(node) {
    node.prev = this.head; // connect the node's prev to the head
    node.next = this.head.next; // connect the node's next to the node after the head
    this.head.next.prev = node; // connect the node after the head's prev to the node
    this.head.next = node; // connect the head's next to the node
  }

  // removeNode method removes a node from the Doubly Linked List
  removeNode(node) {
    node.prev.next = node.next; // connect the previous node's next to the next node
    node.next.prev
    = node.prev; // connect the next node's prev to the previous node
  }

  // moveToHead method moves a node to the head of the Doubly Linked List
  moveToHead(node) {
  this.removeNode(node); // remove the node from its current position
  this.addToHead(node); // add the node to the head of the Doubly Linked List
  }

  // removeTail method removes the node at the tail of the Doubly Linked List
  removeTail() {
  const node = this.tail.prev; // get the node at the tail of the Doubly Linked List
  this.removeNode(node); // remove the node from the Doubly Linked List
  return node; // return the removed node
  }
  }

//   Let's go through each part of this code in detail:

// Node is a simple class that represents a node in the Doubly Linked List. It contains a key, a val, and references to the prev and next nodes.
// LRUCache is the main class that implements the LRU Cache data structure. It contains a capacity, a cache Map to store the key-value pairs, and references to the head and tail nodes of the Doubly Linked List.
// The get method takes a key and returns the value associated with the key if it exists in the cache. If the key is not in the cache, it returns -1. If the key exists, the method moves the corresponding node to the head of the Doubly Linked List to mark it as the most recently used node.
// The put method takes a key and a value and adds the key-value pair to the cache. If the key already exists in the cache, it updates the value and moves the corresponding node to the head of the Doubly Linked List. If the cache exceeds the capacity, the method removes the least recently used node from the tail
