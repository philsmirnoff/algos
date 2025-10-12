class RandomizedSet {
  constructor() {
    this.map = new Map(); // value -> index in arr
    this.arr = []; // dense storage of values
  }

  insert(val) {
    // If val already exists, do nothing
    if (this.map.has(val)) return false;

    // Record index where we'll place val
    this.map.set(val, this.arr.length);

    // Append to the end of the array
    this.arr.push(val);

    return true; // inserted successfully
  }

  remove(val) {
    // Must exist to remove
    if (!this.map.has(val)) return false;

    // Current index of val we’re removing
    const currIndex = this.map.get(val);

    // Index & value of the last element
    const lastIndex = this.arr.length - 1;
    const lastVal = this.arr[lastIndex];

    // Move lastVal into currIndex position (if they’re different)
    // This keeps the array dense without leaving holes.
    this.arr[currIndex] = lastVal;

    // Update the moved element’s index in the map
    this.map.set(lastVal, currIndex);

    // Remove the last element (which is now duplicated at currIndex)
    this.arr.pop();

    // Remove val from the map
    this.map.delete(val);

    return true; // removed successfully
  }

  getRandom() {
    if (this.arr.length === 0) return undefined;

    // Pick a random index in [0, arr.length)
    const idx = Math.floor(Math.random() * this.arr.length);

    // Return the random value
    return this.arr[idx];
  }
}
