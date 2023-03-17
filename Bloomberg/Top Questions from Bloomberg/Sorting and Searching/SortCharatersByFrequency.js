// Sort Characters By Frequency

// Solution
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.



// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


var frequencySort = function(s) {
  const charCounts = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  // Sort the characters by decreasing frequency
  const sortedChars = Object.keys(charCounts).sort((a, b) => charCounts[b] - charCounts[a]);

  let sortedString = '';

  // Construct the sorted string by appending each character
  // its frequency number of times
  for (let i = 0; i < sortedChars.length; i++) {
    const char = sortedChars[i];
    const count = charCounts[char];
    sortedString += char.repeat(count);
  }

  return sortedString;
};

// The solution first counts the frequency of each character in the string using an object charCounts. It then sorts the characters in descending order of their frequency using Object.keys to get an array of keys (i.e., the characters) from charCounts, and the sort method with a comparison function that compares the frequencies of the characters.

// It then constructs the sorted string by appending each character to sortedString its frequency number of times using the repeat method.

// Finally, the function returns sortedString, which contains the sorted string with characters sorted in decreasing order of frequency.

// The time complexity of this solution is O(n log n), due to the sorting step, where n is the length of the input string. The space complexity is O(n), for storing the frequency counts and the sorted characters.
