// write step by step break down of the algorithm below

// 1. Initialize an empty Map to store the value-index mapping
// 2. Intilize an empty array to store the values
// 3. for insert method, check if the value exists, if it is return false
      // b. set the value-index in the map
      this.map.set(val, this.arr.length);
      // Add the value to the end of the array
      this.arr.push(val);
      // Return true to indicate successful insertion
      return true;
// 4. for remove method.
// Check if the value exists in the set
if (!this.map.has(val)) return false;

// Get the index of the value in the array
const valIdx = this.map.get(val);
// Get the index of the last element in the array
const lastIdx = this.arr.length - 1;
// Get the value of the last element in the array
const lastNum = this.arr[lastIdx];

// Swap the value to be removed with the last element in the array
// 5. for getRandom Generate a random index within the length of the array
// return the value of that index




class RandomizedSet {
  constructor() {
      // Initialize an empty Map to store the value-index mapping
      this.map = new Map();
      // Initialize an empty array to store the values
      this.arr = [];
  }

  insert(val) {
      // Check if the value already exists in the set
      if (this.map.has(val)) return false;

      // Set the value-index mapping in the Map
      this.map.set(val, this.arr.length);
      // Add the value to the end of the array
      this.arr.push(val);
      // Return true to indicate successful insertion
      return true;
  }

  remove(val) {
      // Check if the value exists in the set
      if (!this.map.has(val)) return false;

      // Get the index of the value in the array
      const valIdx = this.map.get(val);
      // Get the index of the last element in the array
      const lastIdx = this.arr.length - 1;
      // Get the value of the last element in the array
      const lastNum = this.arr[lastIdx];

      // Swap the value to be removed with the last element in the array
      [this.arr[valIdx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[valIdx]];
      // Remove the value from the end of the array
      this.arr.pop();
      // Update the index of the last element in the Map to be the index of the removed value
      this.map.set(lastNum, valIdx);
      // Delete the value from the Map
      this.map.delete(val);
      // Return true to indicate successful removal
      return true;
  }

  getRandom() {
      // Generate a random index within the length of the array
      const randIdx = Math.floor(Math.random() * this.arr.length);
      // Return the value at the randomly generated index
      return this.arr[randIdx];
  }
}



// write step by step break down of the algorithm below

// 1. Initialize an empty Map to store the value-index mapping
// 2. Intilize an empty array to store the values
// 3. for insert method, check if the value exists, if it is return false
      // b. set the value-index in the map
      this.map.set(val, this.arr.length);
      // Add the value to the end of the array
      this.arr.push(val);
      // Return true to indicate successful insertion
      return true;
// 4. for remove method.
// Check if the value exists in the set
if (!this.map.has(val)) return false;

// Get the index of the value in the array
const valIdx = this.map.get(val);
// Get the index of the last element in the array
const lastIdx = this.arr.length - 1;
// Get the value of the last element in the array
const lastNum = this.arr[lastIdx];

// Swap the value to be removed with the last element in the array
// 5. for getRandom Generate a random index within the length of the array
// return the value of that index




class RandomizedSet {
  constructor() {
      // Initialize an empty Map to store the value-index mapping
      this.map = new Map();
      // Initialize an empty array to store the values
      this.arr = [];
  }

  insert(val) {
      // Check if the value already exists in the set
      if (this.map.has(val)) return false;

      // Set the value-index mapping in the Map
      this.map.set(val, this.arr.length);
      // Add the value to the end of the array
      this.arr.push(val);
      // Return true to indicate successful insertion
      return true;
  }

  remove(val) {
      // Check if the value exists in the set
      if (!this.map.has(val)) return false;

      // Get the index of the value in the array
      const valIdx = this.map.get(val);
      // Get the index of the last element in the array
      const lastIdx = this.arr.length - 1;
      // Get the value of the last element in the array
      const lastNum = this.arr[lastIdx];

      // Swap the value to be removed with the last element in the array
      [this.arr[valIdx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[valIdx]];
      // Remove the value from the end of the array
      this.arr.pop();
      // Update the index of the last element in the Map to be the index of the removed value
      this.map.set(lastNum, valIdx);
      // Delete the value from the Map
      this.map.delete(val);
      // Return true to indicate successful removal
      return true;
  }

  getRandom() {
      // Generate a random index within the length of the array
      const randIdx = Math.floor(Math.random() * this.arr.length);
      // Return the value at the randomly generated index
      return this.arr[randIdx];
  }
}
