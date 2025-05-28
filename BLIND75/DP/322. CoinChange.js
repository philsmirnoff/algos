For each coin in the coins array, we try to subtract the coin's value from the amount and call the dfs function recursively with the new remaining amount (i.e., amount - coin).

if (amount - coin >= 0) ensures that we only recurse for valid amounts (i.e., non-negative amounts).

The expression 1 + dfs(amount - coin) represents the current coin we're using (+1 for the coin) plus the result of the recursive call (dfs(amount - coin)).

We use Math.min(res, 1 + dfs(amount - coin)) to keep track of the minimum number of coins required. If a valid solution is found for a particular coin, it will be considered for the minimum.

// brute force solution:
var coinChange = function(coins, amount) {
    const dfs = (amount) => {
        if (amount === 0) return 0; // Base case: No coins needed to make amount 0
        if (amount < 0) return Infinity; // Base case: If amount is negative, return Infinity

        let res = Infinity; // Start with an impossible result (Infinity)

        for (let coin of coins) { // Try each coin denomination
            if (amount - coin >= 0) { // If subtracting the coin still results in a valid amount
                res = Math.min(res, 1 + dfs(amount - coin)); // Recursively call dfs and add 1 for the current coin
            }
        }

        return res; // Return the minimum result for the current amount
    }

    const minCoin = dfs(amount); // Call dfs to find the minimum number of coins for the target amount
    return minCoin === Infinity ? -1 : minCoin; // If no solution, return -1, otherwise return the minimum coins found
};

time complexity: exponentioal
space complexity: O(t) number of coins


memoization:
This solution uses depth-first search (DFS) with memoization to find the minimum number of coins required to make a given amount using an infinite supply of coins from the given denominations.

Breakdown of the Approach:
1. Memoization (memo):
A memoization table (represented as an object memo) is used to store the results of previously computed subproblems. This avoids recomputation, which significantly speeds up the solution and reduces redundant recursive calls.

The memo object stores the number of coins required to form each amount. Once we compute the result for a specific amount, we store it in memo[amount] so that subsequent calls for that amount can reuse the result.

2. Recursive DFS (dfs(amount)):
The function dfs(amount) is a recursive function that computes the minimum number of coins required to form the given amount.

Base cases:

if (amount === 0): If the amount is 0, we return 0, since no coins are needed to make amount 0.

if (amount < 0): If the amount is negative, we return Infinity, since it's an invalid solution (you cannot make a negative amount).

Memoization check: if (amount in memo): If the result for the current amount has already been computed and stored in memo, we simply return that result instead of recomputing it.

Recursive calls:

For each coin in the coins array, the function tries to subtract the coin value from the current amount. If the result of amount - coin is valid (i.e., amount - coin >= 0), we recursively call dfs(amount - coin).

For each valid recursive call, we add 1 to the result to account for the current coin being used.

Updating the Result:

res is initialized to Infinity to represent an initially impossible solution.

For each valid coin, the result of 1 + dfs(amount - coin) is compared with the current res to find the minimum number of coins. This is done using Math.min(res, 1 + dfs(amount - coin)).

Once all coins are checked, the result for the current amount is stored in memo[amount].

Return Value:

The function returns the minimum number of coins needed for the current amount.

3. Final Result:
After the DFS function has finished executing, minCoin contains the minimum number of coins needed to form the amount. If no solution was found (i.e., minCoin is still Infinity), the function returns -1 to indicate it's impossible to form the amount with the given coins.

Otherwise, the function returns the value of minCoin.

Code Walkthrough:
javascript
Copy
var coinChange = function(coins, amount) {
    let memo = {}; // Initialize memoization table

    // Recursive DFS function to find the minimum number of coins
    const dfs = (amount) => {
        if (amount === 0) return 0; // Base case: No coins needed to make amount 0
        if (amount < 0) return Infinity; // Base case: If amount is negative, return Infinity

        // If the result for this amount is already computed, return it from the memoization table
        if (amount in memo) return memo[amount];

        let res = Infinity; // Initialize res with Infinity (impossible result)

        // Try each coin denomination
        for (let coin of coins) {
            if (amount - coin >= 0) { // Only consider valid amounts
                res = Math.min(res, 1 + dfs(amount - coin)); // Recursively call dfs and add 1 for the current coin
            }
        }

        // Memoize the result for the current amount
        memo[amount] = res;

        return res; // Return the minimum number of coins for the current amount
    };

    // Call the dfs function for the target amount
    const minCoin = dfs(amount);

    // If no valid solution was found, return -1
    return minCoin === Infinity ? -1 : minCoin;
};
Example Walkthrough:
Example 1:

javascript
Copy
console.log(coinChange([1, 2, 5], 11)); // Output: 3
Start with amount = 11.

Try coins: 1, 2, 5.

For coin 5, recursively calculate dfs(6).

For coin 5, recursively calculate dfs(1).

The minimum number of coins needed to form 11 is 3 (using coins 5 + 5 + 1).

Example 2:

javascript
Copy
console.log(coinChange([2], 3)); // Output: -1
Start with amount = 3.

The only coin is 2, and since 3 cannot be formed using only 2, the result is -1.

Example 3:

javascript
Copy
console.log(coinChange([1], 0)); // Output: 0
Start with amount = 0.

No coins are needed to form 0, so the result is 0.

Time Complexity:
Without Memoization: The time complexity without memoization would be exponential, i.e., O(2^amount) because the recursive calls explore all possible combinations.

With Memoization: The time complexity is O(coins.length * amount). We calculate the result for each amount from 1 to amount and for each coin, so the overall complexity is proportional to the number of coins and the target amount.

Space Complexity:
O(amount): The space complexity is determined by the recursion depth and the memoization table, which stores the result for each amount from 0 to amount. Hence, the space complexity is O(amount).

Conclusion:
This solution optimizes the brute force approach by using memoization to avoid recalculating results for the same amount multiple times. It efficiently computes the minimum number of coins required to form a target amount, improving performance significantly compared to a naive recursive solution.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = {}
    const dfs = (amount) => {
        if (amount === 0) return 0; // Base case: No coins needed to make amount 0
        if (amount < 0) return Infinity; // Base case: If amount is negative, return Infinity
        if (amount in memo) return memo[amount]

        let res = Infinity; // Start with an impossible result (Infinity)

        for (let coin of coins) { // Try each coin denomination
            if (amount - coin >= 0) { // If subtracting the coin still results in a valid amount
                res = Math.min(res, 1 + dfs(amount - coin)); // Recursively call dfs and add 1 for the current coin
            }
        }
        memo[amount] = res;

        return res; // Return the minimum result for the current amount
    }

    const minCoin = dfs(amount); // Call dfs to find the minimum number of coins for the target amount
    return minCoin === Infinity ? -1 : minCoin; // If no solution, return -1, otherwise return the minimum coins found
};

// bottom up

Sure! The bottom-up approach uses dynamic programming to iteratively compute the minimum number of coins needed to form each amount, starting from 0 up to the target amount. It avoids recursion by using an array to store the results for each subproblem (i.e., for each amount from 0 to amount).

Key Idea:
Table Definition: Use a dp array where dp[i] will store the minimum number of coins needed to form the amount i.

Base Case: We know that dp[0] = 0, because no coins are needed to make the amount 0.

Recurrence Relation: For each coin in the coin denominations, update the dp array to reflect the minimum number of coins needed for each amount.

Final Result: After filling the dp array, dp[amount] will contain the minimum number of coins required to make the target amount. If it's still infinity (meaning no solution was found), return -1.

Steps:
Initialize a dp array of size amount + 1 and set all values to Infinity, except for dp[0] = 0 (since no coins are needed for amount 0).

For each coin in the given denominations, update the dp array. For each dp[i], check if it can be formed by adding the coin to a previously computed amount i - coin.

At the end, check if dp[amount] is still Infinity. If it is, return -1 (because it's not possible to make that amount). Otherwise, return dp[amount].

Bottom-Up Dynamic Programming Solution:
javascript
Copy
var coinChange = function(coins, amount) {
    // Create a dp array to store the minimum coins for each amount
    const dp = new Array(amount + 1).fill(Infinity);

    // Base case: 0 coins are needed to make amount 0
    dp[0] = 0;

    // Iterate over each amount from 1 to the target amount
    for (let i = 1; i <= amount; i++) {
        // For each coin, update dp[i] (i.e., the minimum coins to make amount i)
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // If dp[amount] is Infinity, it means the amount cannot be formed, return -1
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// Example test cases
console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(coinChange([2], 3));        // Output: -1 (not possible)
console.log(coinChange([1], 0));        // Output: 0 (no coins needed)
Explanation:
dp Array:

dp[i] will store the minimum number of coins needed to form the amount i.

Initially, dp is filled with Infinity because we don't know how to form these amounts yet, except for dp[0], which is set to 0 because no coins are needed to form 0.

Iterating Over Amounts:

We iterate over each amount from 1 to amount (i in the loop). For each i, we check if it can be formed by using each coin from the coins array.

If i - coin >= 0, it means we can form i by adding the current coin. In that case, we update dp[i] to be the minimum of its current value and dp[i - coin] + 1 (i.e., the number of coins required to form i - coin, plus the current coin).

Final Check:

After filling the dp array, dp[amount] will contain the minimum number of coins required to form amount. If it is still Infinity, that means it's not possible to form amount with the given coins, so we return -1.

Otherwise, we return dp[amount], which contains the answer.
