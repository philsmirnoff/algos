// Decode String

// Solution
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.



// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"


var decodeString = function(s) {
  let stack = []; // create an empty stack to store the decoded string and the number of repetitions
  let currentString = ""; // create an empty string to store the current substring
  let currentNum = 0; // create a variable to store the current number of repetitions

  // loop through each character in the input string
  for (let char of s) {
    if (char === "[") {
      // if the current character is "[", push the current substring and the number of repetitions onto the stack
      stack.push(currentString);
      stack.push(currentNum);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      // if the current character is "]", decode the substring by repeating it the specified number of times
      let num = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else if (char >= "0" && char <= "9") {
      // if the current character is a digit, update the current number of repetitions
      currentNum = currentNum * 10 + parseInt(char);
    } else {
      // if the current character is a letter, append it to the current substring
      currentString += char;
    }
  }

  return currentString;
};

// Explanation:

// The approach used here is to iterate through each character in the input string and use a stack to keep track of the decoded string and the number of repetitions. When a "[" character is encountered, the current substring and number of repetitions are pushed onto the stack. When a "]" character is encountered, the substring is decoded by repeating it the specified number of times.

// The code creates an empty stack called "stack" to store the decoded string and the number of repetitions, an empty string called "currentString" to store the current substring, and a variable called "currentNum" to store the current number of repetitions.

// The loop iterates over each character in the input string. If the current character is "[", the current substring and number of repetitions are pushed onto the stack and the current substring and number of repetitions are reset to empty values. If the current character is "]", the substring is decoded by popping the previous substring and number of repetitions from the stack, concatenating the current substring with the previous substring repeated the specified number of times, and updating the current substring to the decoded substring. If the current character is a digit, the current number of repetitions is updated by multiplying it by 10 and adding the value of the digit. If the current character is a letter, it is appended to the current substring.

// Finally, the function returns the decoded string.

// The time complexity of this solution is O(n), where n is the length of the input string. The algorithm iterates over each character in the input string exactly once.

// The space complexity of this solution is O(m), where m is the maximum depth of the nested square brackets in the input string. The stack can store up to m pairs of values (substrings and numbers of repetitions) at the maximum depth of nesting in the input string.
