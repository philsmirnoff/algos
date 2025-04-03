// Alien Dictionary

// Solution
// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.



// Example 1:

// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"
// Example 2:

// Input: words = ["z","x"]
// Output: "zx"
// Example 3:

// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".


var alienOrder = function(words) {
  let adjList = {}; // create an empty object to store the adjacency list
  let inDegree = {}; // create an empty object to store the in-degree of each vertex
  let uniqueChars = new Set(); // create a set to store all the unique characters in the input words
  let result = ""; // create an empty string to store the topological order

  // initialize the in-degree of each vertex to 0
  for (let word of words) {
    for (let char of word) {
      inDegree[char] = 0;
    }
  }

  // build the adjacency list and update the in-degree of each vertex
  for (let i = 0; i < words.length - 1; i++) {
    let currWord = words[i];
    let nextWord = words[i + 1];
    let minLength = Math.min(currWord.length, nextWord.length);

    // compare the characters of the current and next words until a mismatch is found
    for (let j = 0; j < minLength; j++) {
      let currChar = currWord[j];
      let nextChar = nextWord[j];

      if (currChar !== nextChar) {
        // if a mismatch is found, add an edge from currChar to nextChar in the adjacency list
        if (!adjList[currChar]) {
          adjList[currChar] = new Set();
        }

        if (!adjList[currChar].has(nextChar)) {
          adjList[currChar].add(nextChar);
          inDegree[nextChar]++; // increment the in-degree of nextChar
        }
        break;
      }
      // if both words have the same prefix but the current word is longer, the order is invalid
      if (j === minLength - 1 && currWord.length > nextWord.length) {
        return "";
      }
    }
  }

  // perform a topological sort using Kahn's algorithm
  let queue = [];

  // add all vertices with in-degree 0 to the queue
  for (let char in inDegree) {
    if (inDegree[char] === 0) {
      queue.push(char);
    }
  }

  // process the vertices in the queue and update the in-degree of their neighbors
  while (queue.length > 0) {
    let currChar = queue.shift();
    result += currChar;

    if (adjList[currChar]) {
      for (let neighbor of adjList[currChar]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  // check if all vertices have been processed
  if (result.length !== Object.keys(inDegree).length) {
    return "";
  }

  return result;
};

// Time Complexity: O(V + E), where V is the number of unique characters in the input words and E is the total number of characters in the input words.
// Space Complexity: O(V + E), since we need to store the adjacency list and in-degree of each vertex.


// Explanation:

// The approach used here is to build an adjacency list from the input words and then perform a topological sort on the vertices to obtain the lexicographically sorted order of the characters.

// The code creates an empty object called "adjList" to store the adjacency list, an empty object called "inDegree" to store the in-degree of each vertex, and a set called "uniqueChars" to store all the unique characters in the input words. It also creates an empty string called "result" to store the topological order.

// The first loop initializes the in-degree of each vertex to 0 by iterating over each character in each word and adding it



