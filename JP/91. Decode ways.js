// 91. Decode Ways
// Medium

// 9403

// 4179

// Add to List

// Share
// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.



// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

var numDecodings = function(s) {
  const helper = (data, k, memo) => {
      if (k === 0) return 1
      const idx = data.length - k

      if (data[idx] === '0') return 0
      if (memo.has(k)) return memo.get(k)

      let result = helper(data, k - 1, memo)

      const isAlphabetical = Number(data.substring(idx, idx + 2)) <= 26
      if (k >= 2 && isAlphabetical) result += helper(data, k - 2, memo)

      memo.set(k, result)
      return result
  }

  return helper(s, s.length, new Map())
};


// The code you provided is a recursive solution that uses memoization to solve the problem. The basic idea is to use a helper function that takes in three parameters: the input string, an index k (representing the current substring), and a memoization map. The base case is when k is 0, in which case there is only 1 way to decode the empty string, so we return 1.

// If the current digit is '0', we know it is not a valid decoding, so we return 0. If the memoization map already has a value for k, we return that value to avoid redundant calculations.

// Otherwise, we initialize a variable result to the number of ways to decode the substring s[0...k-1] by calling the helper function recursively with k-1 as the new index. Then, if k is greater than or equal to 2 and the substring s[k-2...k-1] is a valid letter, we add the number of ways to decode the substring s[0...k-2] to result. We then add the result to the memoization map and return it.

// The time complexity of this solution is O(n) and space complexity is O(n) as well, since it is using memoization to store the result of subproblems, and it will not recalculate the result for the same subproblem.

// This solution will also handle the edge case of leading zero and only one valid decoding as the check for valid decoding is done at the start of the recursion and if it is not valid it will not proceed to next steps.
