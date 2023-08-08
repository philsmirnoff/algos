// Valid Parentheses

const { createSolutionBuilder } = require("typescript");

// Solution
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
  // create an empty stack and a map of opening brackets to closing brackets
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  // loop through the characters in the string
  for (let i = 0; i < s.length; i++) {
    // if the character is an opening bracket, push it onto the stack
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      // otherwise, it must be a closing bracket
      // pop the most recent opening bracket from the stack
      let last = stack.pop();
      // check whether the closing bracket matches the opening bracket
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }

  // if there are any opening brackets left in the stack, the string is invalid
  if (stack.length !== 0) {
    return false;
  }

  // if we've made it this far, the string is valid
  return true;
};


another solution:
const befittingBrackets = (str) => {
  const stack = [];

  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of str) {
    if (char in brackets) {
      stack.push(brackets[char]);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
