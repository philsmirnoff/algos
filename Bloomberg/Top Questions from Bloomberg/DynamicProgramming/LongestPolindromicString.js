// Longest Palindromic Substring

// Solution
// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
function longestPalindrome(s) {
  let start = 0, maxLength = 1; // initialize start and maxLength
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLength = right - left + 1;
      if (currLength > maxLength) {
        start = left;
        maxLength = currLength;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // handle odd length palindromes
    expandAroundCenter(i, i + 1); // handle even length palindromes
  }
  return s.slice(start, start + maxLength); // return the longest palindromic substring
}
We define a function called longestPalindromicSubstring that takes a string s as input.
We initialize two variables start and maxLength to keep track of the starting index and length of the longest palindromic substring found so far.
We define a nested function expandAroundCenter that takes two indices left and right as input. This function will be used to expand around a center character and check for palindromes.
Within the expandAroundCenter function, we use a while loop to keep expanding outwards from the center character as long as the characters on the left and right are equal and within the bounds of the string.
At each step of the while loop, we check if the current palindrome length is greater than the current maxLength. If so, we update start and maxLength.
We then decrement left and increment right to continue expanding outwards until the while loop condition is no longer satisfied.
We then use a for loop to iterate through each character in the string and call expandAroundCenter twice for each character. The first call handles odd length palindromes by treating the character as the center. The second call handles even length palindromes by treating the character and the next character as the center.
Once the for loop has completed, we return the longest palindromic substring by slicing the string from start to start + maxLength.
Overall, this solution has a time complexity of O(n^2) because we iterate over each character in the string and call expandAroundCenter twice for each character. However, because we are only expanding around a center character and not checking every possible substring, the actual runtime is much faster in practice.
