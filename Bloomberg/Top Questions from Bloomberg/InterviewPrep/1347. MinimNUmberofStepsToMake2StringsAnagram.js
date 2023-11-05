// 1347. Minimum Number of Steps to Make Two Strings Anagram
// Medium
// 2K
// 80
// company
// DoorDash
// company
// Bloomberg
// IXL
// You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.



// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
// Example 3:

// Input: s = "anagram", t = "mangaar"
// Output: 0
// Explanation: "anagram" and "mangaar" are anagrams.


// 1. create hashmap
// 2. Iterate over the string s, check if letter in hashmap,
// if is, increase the count, else initilize it to 1
// 3. initilize the variable changes to 0
// 4. iterate over the t string, if it has
// decrement the count for the letter
// else the letter doesnt exist, then increment changes
// 5. return changes
var minSteps = function(s, t) {
  /*  create a hashMap for s iterate throgh t
      and check how many letters are missing
  O(N) - time
  O(1) - space, since there are only 26 letters in the alphabet
  */
  let hashMap = {};
  for (let letter of s) {
      if (hashMap[letter]) hashMap[letter] ++;
      else hashMap[letter] = 1;
  }
  let changes = 0;
  for (let letter of t) {
      if (hashMap[letter]) hashMap[letter] --;
      else changes ++;
  }
  return changes;
};
