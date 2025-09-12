//Strings

// Reverse string:

var reverseString = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
};

console.log(reverseString("hello")); // "olleh"

// Reverse Odd String:

const reverseOdd = (str) => {
  if (str.length === 0) return "";

  // split sentence into words
  let words = str.split(" ");

  // iterate and transform each word
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
      // reverse by splitting into array → reverse → join back
      words[i] = words[i].split("").reverse().join("");
    }
  }

  // join words back into a string
  return words.join(" ");
};
// Time: 0(n)
// Space: O(n)

// Valid Palindrome

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

O(n);
O(1);

// ValidParenthesis
const isValid = (str) => {
  // Initialize an empty stack to store the expected closing brackets
  const stack = [];

  // Define a mapping of opening brackets to their corresponding closing brackets
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Iterate over each character in the string
  for (let char of str) {
    // Check if the character is an opening bracket (i.e., one of '(', '[', or '{')
    if (char in brackets) {
      // If it's an opening bracket, push the corresponding closing bracket onto the stack
      stack.push(brackets[char]);
    } else {
      // If the character is not an opening bracket, it must be a closing bracket
      // Check if the stack is not empty and the top of the stack matches the current closing bracket
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        // If it matches, pop the top of the stack (i.e., we found a valid match for this closing bracket)
        stack.pop();
      } else {
        // If there's no match or the stack is empty, the string is invalid
        return false;
      }
    }
  }

  // At the end of the loop, check if the stack is empty
  // If the stack is empty, it means all opening brackets were properly matched and closed
  return stack.length === 0;
};

// GroupAnagrams

var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split("").sort("").join(""));

  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    // if we dont have in our hash sortedstr[i], we will set the hash at that key to an empty array with our strs[i]
    if (!hash[sortedSrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedSrs[i]].push(strs[i]);
    }
    return Object.value(hash);
  }
};

// Find all Anagrams
/**
 * Finds all starting indices of anagrams of pattern string p in string s
 * Uses sliding window technique with character frequency counting
 * @param {string} s - The source string to search in
 * @param {string} p - The pattern string whose anagrams we're looking for
 * @returns {number[]} Array of starting indices where anagrams are found
 */
function findAnagrams(s, p) {
  const sourceLength = s.length;
  const patternLength = p.length;
  const result = [];

  // Early return if source string is shorter than pattern
  if (sourceLength < patternLength) {
    return result;
  }

  // Character frequency arrays for pattern and current window
  // Using array of size 26 for lowercase English letters
  const patternFrequency = new Array(26).fill(0);
  const windowFrequency = new Array(26).fill(0);

  /**
   * Helper function to convert character to array index
   * Maps 'a' to 0, 'b' to 1, ..., 'z' to 25
   */
  const getCharIndex = (char) => {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  };

  // Count character frequencies in pattern string
  for (const char of p) {
    patternFrequency[getCharIndex(char)]++;
  }

  // Initialize window with first (patternLength - 1) characters
  for (const char of s.slice(0, patternLength - 1)) {
    windowFrequency[getCharIndex(char)]++;
  }

  // Slide the window through the source string
  for (let i = patternLength - 1; i < sourceLength; i++) {
    // Add the rightmost character to the window
    windowFrequency[getCharIndex(s[i])]++;

    // Check if current window is an anagram of pattern
    if (patternFrequency.toString() === windowFrequency.toString()) {
      // Add starting index of current window to result
      result.push(i - patternLength + 1);
    }

    // Remove the leftmost character from the window for next iteration
    windowFrequency[getCharIndex(s[i - patternLength + 1])]--;
  }

  return result;
}

// Example usage:
console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
