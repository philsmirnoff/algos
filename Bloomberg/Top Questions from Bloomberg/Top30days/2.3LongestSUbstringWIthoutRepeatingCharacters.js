function lengthOfLongestSubstring(s) {
  let start = 0; // Left boundary of the sliding window
  let maxLength = 0; // Maximum length of substring without repeating characters
  let set = new Set(); // To keep track of characters in the current window

  // Iterate over each character in the string with the 'end' pointer
  for (let end = 0; end < s.length; end++) {
    // If the current character is in the set (i.e., repeating character)
    while (set.has(s[end])) {
      // Remove the character at the 'start' pointer from the set
      set.delete(s[start]);
      // Move the 'start' pointer to the right to shrink the window
      start = start + 1;
    }
    // Add the current character to the set
    set.add(s[end]);
    // Update the maximum length found so far
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength; // Return the maximum length of the substring found
}
