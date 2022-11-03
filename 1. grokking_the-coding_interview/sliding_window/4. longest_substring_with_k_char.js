// Longest Substring with K Distinct Characters (medium)

// Problem Statement

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

// Example 1:

// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".


// We can use a HashMap to remember the frequency of each character we have processed. Here is how we will solve this problem:

// First, we will insert characters from the beginning of the string until we have K distinct characters in the HashMap.
// These characters will constitute our sliding window. We are asked to find the longest such window having no more than K distinct characters. We will remember the length of this window as the longest window so far.
// After this, we will keep adding one character in the sliding window (i.e., slide the window ahead) in a stepwise fashion.
// In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than K. We will shrink the window until we have no more than K distinct characters in the HashMap. This is needed as we intend to find the longest window.
// While shrinking, we’ll decrement the character’s frequency going out of the window and remove it from the HashMap if its frequency becomes zero.
// At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
      maxLength = 0,
      charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in charFrequency)) {
          charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      // shrink the sliding window, until we are left with 'k' distinct characters in 
      // the char_frequency
      while (Object.keys(charFrequency).length > k) {
          const leftChar = str[windowStart];
          charFrequency[leftChar] -= 1;
          if (charFrequency[leftChar] === 0) {
              delete charFrequency[leftChar];
          }
          windowStart += 1; // shrink the window
      }
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// Time Complexity: O(N)
// Space Complexity: O(K)