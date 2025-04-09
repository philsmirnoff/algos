// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.



// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []


// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40


const combinationSum = (candidates, target) => {
  let result = []

  const dfs(index, currentVal, arr) => {
    if (currrentVal < 0) return;
    if (currentVal === 0) {
      result.push([...arr])
    }

    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i])
      dfs(i, currentVal - candidates[i], arr)
      arr.pop()
    }
  }
  dfs(0, target, [])
  return result
}

time complexity: O(N*T/M + 1) where T is tager value we looking for and m is minimum number within candidates.T/M + 1 is the depth of Tree
space complexity is a T/M

video solution from AlgoJS:
https://www.youtube.com/watch?v=2u_l4GM6dKw


The solution you've provided is a valid approach and is quite similar to the one I outlined earlier, but with a few differences in implementation. Let's break it down and analyze it:

Key Differences:
DFS (Depth-First Search): This approach uses DFS with the recursive function dfs(index, currentVal, arr) to explore all combinations.

Base Case:

If the currentVal is less than 0, it simply returns without doing anything (stopping the recursion when a combination exceeds the target).

If the currentVal equals 0, it pushes the current combination arr to the result array (this is a valid combination that sums up to the target).

Recursive Exploration: The for loop explores the numbers starting from the current index (index), allowing repeated elements from candidates (i.e., the same number can be used multiple times).

Issues:
There are a couple of issues in the code that will prevent it from working as expected:

Typo in the if statement: The condition if (currrentVal < 0) contains a typo (currrentVal should be currentVal).

Early Return for Negative Values: The condition if (currentVal < 0) prevents going further if the current sum exceeds the target, which is correct.

Missing Return in Recursive Function: The DFS function doesn't handle the return value correctly when currentVal === 0. Although the result is correctly pushed, the function does not explicitly return after that, but this does not affect the correctness in this case because the recursion ends naturally.

Corrected Version:
javascript
Copy
const combinationSum = (candidates, target) => {
  let result = [];

  const dfs = (index, currentVal, arr) => {
    // If the current value exceeds the target, return.
    if (currentVal < 0) return;

    // If we reach the target, push the current combination to the result.
    if (currentVal === 0) {
      result.push([...arr]);
      return;
    }

    // Try each candidate from the current index onward.
    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);  // Choose the candidate
      dfs(i, currentVal - candidates[i], arr);  // Recurse with the reduced target
      arr.pop();  // Backtrack and remove the last chosen number
    }
  }

  // Start DFS from the first index with the target value.
  dfs(0, target, []);
  return result;
}

// Test examples
console.log(combinationSum([2, 5, 6, 9], 9));  // Output: [[2, 2, 5], [9]]
console.log(combinationSum([3, 4, 5], 16));  // Output: [[3, 3, 3, 3, 4], [3, 3, 5, 5], [4, 4, 4, 4], [3, 4, 4, 5]]
console.log(combinationSum([3], 5));  // Output: []
Explanation:
DFS with Backtracking: The recursive dfs function explores every possible combination starting from each index. It allows repeated elements (by not incrementing index in the recursive call) and backtracks by popping the last added number from arr to try other combinations.

Termination Condition: The recursion terminates when currentVal becomes less than 0 (i.e., sum exceeds the target) or exactly 0 (i.e., we found a valid combination).
