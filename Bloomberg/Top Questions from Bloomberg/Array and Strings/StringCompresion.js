// String Compression
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.



// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".



function compress(chars) {
  let i = 0; // index of current character
  let j = 0; // index of current group
  let count = 1; // count of current character

  while (i < chars.length) {
    if (chars[i] === chars[i + 1]) { // found a consecutive character
      count++;
    } else {
      chars[j] = chars[i]; // write the current character
      j++; // move to next position
      if (count > 1) { // write the count if it's greater than 1
        const countStr = count.toString();
        for (let k = 0; k < countStr.length; k++) {
          chars[j] = countStr[k]; // split count into multiple characters
          j++; // move to next position
        }
      }
      count = 1; // reset the count
    }
    i++; // move to next character
  }

  return j;
}


// This function uses two pointers i and j to keep track of the current character and the current position in the output array chars, and a counter count to count the number of consecutive characters. The function iterates over the input array chars and updates the output array in place. When it encounters a new character, it writes the current character and its count to the output array, and moves the j pointer to the next position. If the count is greater than 1, the function splits the count into multiple characters to comply with the given constraint. Finally, the function returns the new length of the output array.

// The time complexity of the function is O(n), where n is the length of the input array chars. This is because the function iterates over the input array exactly once, and the operations inside the loop take constant time.

// The space complexity of the function is O(1) because the function modifies the input array chars in place, without using any additional data structures that grow with the size of the input. The only additional space used is the constant amount of space required to store the loop indices i, j, and count, and the string countStr. Since the maximum length of countStr is 3 (when count is 100 or more), the space used by the function is constant and does not depend on the size of the input.


// const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
// console.log(compress(chars1)); // Output: 6, chars1 is now ["a", "2", "b", "2", "c", "3"]

// const chars2 = ["a"];
// console.log(compress(chars2)); // Output: 1, chars2 is now ["a"]

// const chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
// console.log(compress(chars3)); // Output: 4, chars3 is now ["a", "b", "1", "2"]


var compress = function(chars) {
  let s = '';
  for (let i = 0; i < chars.length; i++) {
      let current = chars[i];
      currentCount = 1;
      while(current === chars[i + 1]) {
          currentCount++
          i++
      }
      if (currentCount === 1) {
          s += current;
      } else {
          s += current + currentCount.toString()
      }
  }
  let j = 0;
  while (j < s.length) {
      chars[j] = s[j];
      j++
  }
  return s.length
};
