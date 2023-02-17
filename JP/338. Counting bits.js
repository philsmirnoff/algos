// 338. Counting Bits
// Easy

// 8303

// 393

// Add to List

// Share
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 
var countBits = function(n) {
  let ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;

};

// This solution uses a dynamic programming approach. We create an array ans of length n + 1 and initialize it with all 0s. We then iterate from 1 to n, and for each iteration, we set the value of ans[i] to the value of ans[i >> 1] plus the number of 1s in the binary representation of i & 1. The reason we use i >> 1 instead of i / 2 is that bit shifting is faster than division.
