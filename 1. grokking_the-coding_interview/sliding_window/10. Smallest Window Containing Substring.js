// Problem Challenge 3: Smallest Window containing Substring (hard)


// Problem Statement

// Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

// Example 1:

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"


function find_substring(str, pattern) {
  let windowStart = 0,
      matched = 0,
      substrStart = 0,
      minLength = str.length + 1,
      charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
          charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
  }

  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
          charFrequency[rightChar] -= 1;
          if (charFrequency[rightChar] >= 0) { // Count every matching of a character
              matched += 1;
          }
      }

      // Shrink the window if we can, finish as soon as we remove a matched character
      while (matched === pattern.length) {
          if (minLength > windowEnd - windowStart + 1) {
              minLength = windowEnd - windowStart + 1;
              substrStart = windowStart;
          }

          const leftChar = str[windowStart];
          windowStart += 1;
          if (leftChar in charFrequency) {
              // Note that we could have redundant matching characters, therefore we'll
              // decrement the matched count only when a useful occurrence of a matched
              // character is going out of the window
              if (charFrequency[leftChar] === 0) {
                  matched -= 1;
              }
              charFrequency[leftChar] += 1;
          }
      }
  }

  if (minLength > str.length) {
      return '';
  }
  return str.substring(substrStart, substrStart + minLength);
}


console.log(find_substring('aabdec', 'abc'));
console.log(find_substring('aabdec', 'abac'));
console.log(find_substring('abdbca', 'abc'));
console.log(find_substring('adcad', 'abc'));

// Time Complexity


// The time complexity of the above algorithm will be O(N + M)O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.

// Space Complexity

// The space complexity of the algorithm is O(M)O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap. In the worst case, we also need O(N)O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.
