

function lengthOfLongestSubstring(s) {
  let start = 0;             // Left boundary of the sliding window
  let maxLength = 0;         // Maximum length of substring without repeating characters
  let set = new Set();       // To keep track of characters in the current window

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
  return maxLength;          // Return the maximum length of the substring found
}

How It Works
Initialization:

start: Points to the beginning of the current window of characters being considered.
maxLength: Keeps track of the maximum length of a substring without repeating characters found so far.
set: A Set to keep track of unique characters in the current window.
Iteration:

The for loop iterates over the string with the end pointer representing the end of the current window.
Handling Repeats:

Inside the loop, the while loop checks if the current character s[end] is already in the set.
If it is, it means there's a repeat, so the function removes characters from the set starting from the start pointer until the repeating character is removed.
The start pointer is then incremented to shrink the window from the left.
Updating the Window:

After ensuring no repeating characters are in the set, the current character s[end] is added to the set.
The length of the current window is calculated as end - start + 1.
maxLength is updated to be the maximum of its current value and the length of the current window.
Return Result:

After processing all characters, maxLength holds the length of the longest substring without repeating characters and is returned.
Time and Space Complexity
Time Complexity:

The for loop runs in O(n) time, where n is the length of the string s.
The while loop inside the for loop can also run in O(n) time in the worst case, but since each character is added and removed from the set at most once, the total time complexity is O(n).
Space Complexity:

The set can store up to O(n) characters in the worst case, where n is the length of the string s.
Therefore, the space complexity is O(n).
Summary
Time Complexity: O(n) – Each character is processed at most twice (once added and once removed).
Space Complexity: O(n) – The set stores unique characters and can grow up to the size of the input string.
This solution efficiently finds the length of the longest substring without repeating characters using a sliding window approach and a set to track unique characters.
