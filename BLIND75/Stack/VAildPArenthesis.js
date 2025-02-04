const isValid = (str) => {
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


const isValid = (str) => {
  // Initialize an empty stack to store the expected closing brackets
  const stack = [];

  // Define a mapping of opening brackets to their corresponding closing brackets
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
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


class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 0:
            return True

        hashmap = {
            "[":"]",
            "{":"}",
            "(":")"
            }
        stack = []

        for char in s:
            if char in hashmap:
                stack.append(hashmap[char])
            else:
                if stack and stack[-1] == char:
                    stack.pop()
                else:
                    return False

        return len(stack) == 0
