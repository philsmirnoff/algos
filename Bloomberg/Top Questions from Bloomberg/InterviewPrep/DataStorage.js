// Hello I had a first interview with Bloomberg and did not pass. I thought about the possible solutions but I cannot figure out what the optimal solution is.

// Design a module and insert a data looking like this.

// (id:1, timestamp: 1pm, tags: ["us", "uk", "japan"])
// You want to query all the data by passing in a tag and timestamp.

// (tag: "us", start_time: "12pm", end_time: "2pm")
// The module will read more than insert. Reading should be faster than inserting. What is the possible optimal solution that read is more optimized than insert? Thank you in advance


class DataStore {
  // Constructor to initialize the data store
  constructor() {
    this.dataStore = {};
  }

  // Method to insert data into the data store
  insertData(id, timestamp, tags) {
    // Create an entry object with id, timestamp, and tags
    const entry = { id, timestamp, tags };

    // Iterate through the tags array using a for loop
    for (let i = 0; i < tags.length; i++) {
      const tag = tags[i];

      // If the tag doesn't exist in the data store, create an empty array for it
      if (!this.dataStore[tag]) {
        this.dataStore[tag] = [];
      }

      // Push the entry to the array associated with the tag
      this.dataStore[tag].push(entry);
    }
  }

  // Method to query data based on tag and timestamp range
  queryData(tag, start_time, end_time) {
    // Check if there is data for the specified tag
    if (!this.dataStore[tag]) {
      return []; // No data for the specified tag
    }

    // Initialize an empty array to store the query result
    const result = [];

    // Iterate through the entries associated with the specified tag
    for (let i = 0; i < this.dataStore[tag].length; i++) {
      const entry = this.dataStore[tag][i];

      // Check if the entry's timestamp is within the specified range
      if (entry.timestamp >= start_time && entry.timestamp <= end_time) {
        // If yes, push the entry to the result array
        result.push(entry);
      }
    }

    // Return the final result array
    return result;
  }
}

// Example usage
// Create an instance of the DataStore class
const dataModule = new DataStore();

// Insert data into the data store
dataModule.insertData(1, "1pm", ["us


// DataStore class:

// The class itself only contains one property (dataStore), which is an object.
// The space complexity for this is O(1), as it's constant and doesn't depend on the input size.
// insertData(id, timestamp, tags):

// The space used here is proportional to the number of unique tags, as each tag has its array of entries.
// If there are m unique tags, the space complexity is O(m).
// queryData(tag, start_time, end_time):

// The space used here is proportional to the number of entries for the specified tag.
// If there are n entries for the specified tag, the space complexity is O(n).
// Combining everything:

// The overall space complexity is O(m + n), where m is the number of unique tags, and n is the number of entries for the specified tag.
// The time complexity depends on the specific operations (insert or query) and is O(k) or O(n) accordingly.
// It's important to note that these complexities are based on the current implementation, and if you have specific requirements for optimizing further, you might need a different data structure or algorithm.
