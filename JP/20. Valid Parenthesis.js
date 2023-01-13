20. Valid Parentheses
Easy

12957

580

Add to List

Share
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   // lets define hashmap first
    let hashMap = {'(': ')', '{': '}', '[': ']'}
    let stack = []

    for (let ch of s) {
        if (hashMap[ch]) {
            // if ch is an opening bracket
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length -1] === ch) {
            // ch is a closing bracket and the top of a stack is matches
            stack.pop()
        } else {
            // ch is a closing bracket and the top of the stack doesnot match
            return false
        }
    }
     return stack.length === 0;
};

Time complexity O(n);
Spae complexity: 0(n)

https://www.youtube.com/watch?v=OxbxP5_-Tcs
