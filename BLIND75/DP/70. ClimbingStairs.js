const climbStairs = (n) => {
  if (n <= 1) return 1

  return climbStairs(n - 1) + climbStairs(n - 2)

}

// topDown

var climbStairs = function(n, memo = {}) {
  // Step 1: Base Case - If n is 1 or 0, there's only one way to climb to the top (by either doing nothing or taking a single step).
  if (n <= 1) return 1;

  // Step 2: Check if the result for this step (n) has already been computed and stored in memo.
  // This avoids redundant calculations by reusing previously computed results (memoization).
  if (n in memo) return memo[n];

  // Step 3: If the result for this step is not in memo, compute it recursively.
  // The total number of ways to reach step n is the sum of the ways to reach step n-1 and step n-2.
  // This is because you can either take one step from n-1 or two steps from n-2.
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  // Step 4: Store the result in memo and return it.
  // By saving it in memo, we ensure that future calls to climbStairs(n) don't recompute the same result.
  return memo[n];
};

// bottom up


climbStairs(n) {
  // Step 1: Base case - If n is less than or equal to 1, return 1
  // This is because there's only one way to climb 0 steps (do nothing) or 1 step (take one step).
  if (n <= 1) return 1;

  // Step 2: Create an array 'dp' to store the number of ways to reach each step up to n
  // Initialize the array with n+1 elements all set to 0. This is to store the number of ways for each step.
  let dp = new Array(n + 1).fill(0);

  // Step 3: Set base cases in the dp array
  // There's 1 way to reach step 0 (by doing nothing) and 1 way to reach step 1 (by taking one step).
  dp[0] = 1;
  dp[1] = 1;

  // Step 4: Iterate through the steps from 2 to n
  for (let i = 2; i <= n; i++) {
      // Step 5: For each step i, calculate the number of ways to get to that step
      // The number of ways to reach step i is the sum of the ways to reach step i-1 and step i-2.
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  // Step 6: Return the number of ways to reach step n
  return dp[n];
}



