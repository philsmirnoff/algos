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

The given climbStairs function is solving a classic problem called the "Staircase Problem," where you are tasked with finding how many distinct ways you can climb to the top of a staircase with n steps, given that at each step, you can either climb 1 step or 2 steps.

Let's break down the code and walk through the steps when n = 3:
Step 1: Base Case
The function first checks if n is less than or equal to 1:

javascript
Copy
if (n <= 1) return 1;
This is because if there are no steps (n = 0), there is only one way to "climb" (doing nothing). Similarly, if there is 1 step, there is only one way to climb it (taking one step). Since n = 3, this step doesn't apply.

Step 2: Initialize the DP Array
Next, the function creates an array dp that will store the number of ways to reach each step up to n:

javascript
Copy
let dp = new Array(n + 1).fill(0);
This initializes an array of size n + 1 (for steps 0 through n), where all elements are initially set to 0. The reason it's n + 1 is because we need to store the number of ways for each step from 0 to n. For example, when n = 3, this creates an array dp = [0, 0, 0, 0].

Step 3: Set Base Cases in the DP Array
The base cases are defined:

javascript
Copy
dp[0] = 1;
dp[1] = 1;
dp[0] = 1 means there is 1 way to be on the ground (step 0).

dp[1] = 1 means there is 1 way to reach step 1 (by taking a single 1-step).

Now, dp = [1, 1, 0, 0] for n = 3.

Step 4: Iterate from 2 to n and Fill the DP Array
Now, the function uses a loop to calculate the number of ways to reach each step from 2 to n:

javascript
Copy
for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}
The idea here is that the number of ways to reach step i is the sum of the number of ways to reach step i-1 (from the previous step, which is a 1-step move) and the number of ways to reach step i-2 (from two steps below, which is a 2-step move).

When i = 2:
The number of ways to reach step 2 is dp[2] = dp[1] + dp[0] = 1 + 1 = 2.

Now, dp = [1, 1, 2, 0].

When i = 3:
The number of ways to reach step 3 is dp[3] = dp[2] + dp[1] = 2 + 1 = 3.

Now, dp = [1, 1, 2, 3].

Step 5: Return the Result
Finally, the function returns dp[n], which contains the number of ways to reach step n:

javascript
Copy
return dp[n];
In this case, dp[3] = 3, so the function will return 3.

Summary for n = 3:
dp[0] = 1 (1 way to be on step 0)

dp[1] = 1 (1 way to reach step 1)

dp[2] = 2 (2 ways to reach step 2: [1 + 1] or [2])

dp[3] = 3 (3 ways to reach step 3: [1 + 1 + 1], [1 + 2], or [2 + 1])

Thus, the function will return 3, as there are 3 ways to climb 3 steps.

Time and Space Complexity:
Time complexity: O(n) because we loop through the steps from 2 to n once, and each operation inside the loop takes constant time.

Space complexity: O(n) because we use an array dp of size n + 1 to store the number of ways to reach each step.

Yes! The solution you provided can be optimized further to use only
𝑂
(
1
)
O(1) space. Since each step only relies on the previous two values, we don’t need to store the entire dp array. Instead, we can keep track of just the last two computed values.

Here’s the optimized version of your climbStairs function:

javascript
Copy
const climbStairs = (n) => {
    if (n <= 1) return 1;

    let prev1 = 1;  // Represents dp[i - 1]
    let prev2 = 1;  // Represents dp[i - 2]

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;  // dp[i] = dp[i - 1] + dp[i - 2]
        prev2 = prev1;  // Update prev2 to prev1 for next iteration
        prev1 = current;  // Update prev1 to current for next iteration
    }

    return prev1;
};
Explanation:
Space Optimization: Instead of storing all the values in an array, we only keep track of the last two values (prev1 and prev2). This reduces the space complexity from
𝑂
(
𝑛
)
O(n) to
𝑂
(
1
)
O(1).

Time Complexity: The time complexity remains
𝑂
(
𝑛
)
O(n) because we still need to iterate over the range from 2 to
𝑛
n.

This version is more space-efficient while maintaining the same time complexity.
