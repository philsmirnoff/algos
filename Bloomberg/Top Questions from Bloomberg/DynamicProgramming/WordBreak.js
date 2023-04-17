Word Break

Solution
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false


const wordBreak = (s, wordDict) => {
  // Get the length of the input string
  const n = s.length;
  // Initialize an array to store whether substrings can be segmented into words
  const dp = new Array(n + 1).fill(false);
  // An empty substring can always be segmented into an empty sequence of words
  dp[0] = true;
  // Iterate over all substrings to determine whether they can be segmented
  for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          // Check if substring from j to i is a word in wordDict, and if dp[j] is true
          if (dp[j] && wordDict.includes(s.substring(j, i))) {
              // Set dp[i] to true if substring can be segmented
              dp[i] = true;
              // Exit inner loop if dp[i] is set to true
              break;
          }
      }
  }
  // Return whether the entire string can be segmented into words
  return dp[n];
};
// The time complexity of this solution is O(n^3), where n is the length of the input string s. This is because we have nested loops to iterate over the string and the dictionary, and for each substring of the input string, we may need to check its presence in the dictionary, which takes O(n) time.

// The space complexity of this solution is O(n), where n is the length of the input string s. This is because we are using a memoization table to store the results of subproblems, which takes O(n) space. Additionally, the recursion stack can go up to O(n) in the worst case.
