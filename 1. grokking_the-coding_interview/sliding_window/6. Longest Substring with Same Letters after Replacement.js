// Longest Substring with Same Letters after Replacement (hard)


// Problem Statement

// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

// Example 1:

// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// Solution

// This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with Distinct Characters. We can use a HashMap to count the frequency of each letter.

// We will iterate through the string to add one letter at a time in the window.
// We will also keep track of the count of the maximum repeating letter in any window (let’s call it maxRepeatLetterCount).
// So, at any time, we know that we do have a window with one letter repeating maxRepeatLetterCount times; this means we should try to replace the remaining letters.
// If the remaining letters are less than or equal to ‘k’, we can replace them all.
// If we have more than ‘k’ remaining letters, we should shrink the window as we cannot replace more than ‘k’ letters.
// While shrinking the window, we don’t need to update maxRepeatLetterCount. Since we are only interested in the longest valid substring, our sliding windows do not have to shrink, even if a window may cover an invalid substring. Either we expand the window by appending a character to the right or we shift the entire window to the right by one. We only expand the window when the frequency of the newly added character exceeds the historical maximum frequency (from a previous window that included a valid substring). In other words, we do not need to know the exact maximum count of the current window. The only thing we need to know is whether the maximum count exceeds the historical maximum count, and that can only happen because of the newly added char.


function length_of_longest_substring(str, k) {
  let windowStart = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (!(rightChar in frequencyMap)) {
          frequencyMap[rightChar] = 0;
      }
      frequencyMap[rightChar] += 1;

      // we don't need to place the maxRepeatLetterCount under the below 'if', see the
      // explanation in the 'Solution' section above.
      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

      // current window size is from windowStart to windowEnd, overall we have a letter
      // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
      //  which has one letter repeating 'maxRepeatLetterCount' times and the remaining
      // letters we should replace. If the remaining letters are more than 'k', it is the
      // time to shrink the window as we are not allowed to replace more than 'k' letters
      if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
          leftChar = str[windowStart];
          frequencyMap[leftChar] -= 1;
          windowStart += 1;
      }

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));


// Time Complexity


// The above algorithm’s time complexity will be O(N)O(N), where ‘N’ is the number of letters in the input string.

// Space Complexity

// As we expect only the lower case letters in the input string, we can conclude that the space complexity will be O(26)O(26) to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1)O(1).
