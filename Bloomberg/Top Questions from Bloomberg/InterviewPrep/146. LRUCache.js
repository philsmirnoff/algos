Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.


1. Initialize an empty Map this.cache to store the key-value pairs
2. this.capacity to Store the maximum capacity of the cache
3. get(key) If the key is not in the cache, return -1 (as specified)
4. Retrieve the value associated with the key
5. Remove the key-value pair from the cache to simulate usage
6. Re-add the key-value pair to the cache to move it to the "most recently used" position
7. Return the retrieved value
8. put(key, value) If the key is already in the cache, remove it to simulate updating
9. Add the new key-value pair to the cache
10. If the cache size exceeds the capacity, remove the "least recently used" key
11. Use .keys().next().value to retrieve the first key in the Map (which is the "least recently used" key)




https://www.youtube.com/watch?v=F9DhnbNB9LM&t=82s
class LRUCache {
  constructor(capacity) {
    // Initialize an empty Map to store the key-value pairs
    this.cache = new Map();

    // Store the maximum capacity of the cache
    this.capacity = capacity;
  }

  get(key) {
    // If the key is not in the cache, return -1 (as specified)
    if (!this.cache.has(key)) {
      return -1;
    }

    // Retrieve the value associated with the key
    const value = this.cache.get(key);

    // Remove the key-value pair from the cache to simulate usage
    this.cache.delete(key);

    // Re-add the key-value pair to the cache to move it to the "most recently used" position
    this.cache.set(key, value);

    // Return the retrieved value
    return value;
  }

  put(key, value) {
    // If the key is already in the cache, remove it to simulate updating
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // Add the new key-value pair to the cache
    this.cache.set(key, value);

    // If the cache size exceeds the capacity, remove the "least recently used" key
    if (this.cache.size > this.capacity) {
      // Use .keys().next().value to retrieve the first key in the Map (which is the "least recently used" key)
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}




https://www.youtube.com/watch?v=6NGIx1vfZR4


// double linked list = hashmap
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
