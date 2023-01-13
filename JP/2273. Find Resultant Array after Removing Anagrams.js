// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

// Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".



// Example 1:

// Input: words = ["abba","baba","bbaa","cd","cd"]
// Output: ["abba","cd"]
// Explanation:
// One of the ways we can obtain the resultant array is by using the following operations:
// - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","baba","cd","cd"].
// - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
//   Now words = ["abba","cd","cd"].
// - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
//   Now words = ["abba","cd"].
// We can no longer perform any operations, so ["abba","cd"] is the final answer.
// Example 2:

// Input: words = ["a","b","c","d","e"]
// Output: ["a","b","c","d","e"]
// Explanation:
// No two adjacent strings in words are anagrams of each other, so no operations are performed.


const removeAnagrams = (words) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
      if (i === 0 || !isAnagram(words[i], words[i - 1])) {
          result.push(words[i]);
      }
  }
  return result;
}

const isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
      return false;
  }
  const charCount = new Map();
  for (let i = 0; i < s1.length; i++) {
      charCount.set(s1[i], (charCount.get(s1[i]) || 0) + 1);
  }
  for (let i = 0; i < s2.length; i++) {
      if (!charCount.has(s2[i]) || charCount.get(s2[i]) === 0) {
          return false;
      }
      charCount.set(s2[i], charCount.get(s2[i]) - 1);
  }
  return true;
}

This solution uses two helper functions: removeAnagrams and isAnagram. The removeAnagrams function iterates through the input array of words and for each word, it checks if the previous word is an anagram of it. If it is, it skips it, otherwise, it pushes it to the result array.
The isAnagram function checks if two words are anagrams of each other. It first checks if the lengths of the two words are equal. If they are not, it returns false.
Then it creates a map and counts the number of occurrences of each character in the first word and decrement the count of the corresponding character in the second word. If at any point, a character does not exist in the second word or its count is zero, the function returns false, otherwise it returns true.

This solution has a time complexity of O(N) where N is the number of words in the input array as it iterates through the array once and in the worst case scenario, it will do the anagram check on each pair of words, which has a time complexity of O(N) as well.
