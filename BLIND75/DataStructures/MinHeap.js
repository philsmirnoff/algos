class MinHeap {
  constructor() {
    this.heap = []
  }
  
  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }
  getLeftChildIndex() {
    return Math.floor(2 * i + 1)
  }
  
  getRightChildIndex() {
    return Math.floor(2 * i + 2)
  }
  
  swap(i, j) {
    [this.heap[i], this.heap[j] = [this.heap[j], this.heap[i]]]
  }
  
  insert(value) {
    this.heap.push(value)
    this.heapifyUp()
  }
}