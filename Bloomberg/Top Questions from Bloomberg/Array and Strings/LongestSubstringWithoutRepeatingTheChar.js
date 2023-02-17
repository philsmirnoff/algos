// Longest Substring Without Repeating Characters

// Solution
// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Vaersion 1:
const lengthOfLongestSubstring = (s) => {
  // to store the length of the longest substring without repeating characters
  let longest = 0;
  // to store the last index of each character in the string
  let hashmap = {};
  // to store the index of the beginning of the substring without repeaitng characters
  let start = 0;
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if the character is already in the hashmap
    if (hashmap[char]) {
      // move the start of the substring to the next index of the repeated character
      start = Math.max(start, hashmap[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    hashmap[char] = i + 1;
  }
  return longest;
}


verfunction non_repeat_substring(str) {
  let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning
      // so that we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
          // this is tricky; in the current window, we will not have any 'rightChar' after
          // its previous index and if 'windowStart' is already ahead of the last index of
          // 'rightChar', we'll keep 'windowStart'
          windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

Version 3 with Set
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let begin = 0;
  let set = new Set();

  for (let end = 0; end < s.length; end++) {
      while (set.has(s[end])) {
          set.delete(s[begin]);
          begin = begin + 1;
      }
      set.add(s[end])
      max = Math.max(max, end - begin + 1)
  }
  return max
};
