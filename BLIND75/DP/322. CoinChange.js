For each coin in the coins array, we try to subtract the coin's value from the amount and call the dfs function recursively with the new remaining amount (i.e., amount - coin).

if (amount - coin >= 0) ensures that we only recurse for valid amounts (i.e., non-negative amounts).

The expression 1 + dfs(amount - coin) represents the current coin we're using (+1 for the coin) plus the result of the recursive call (dfs(amount - coin)).

We use Math.min(res, 1 + dfs(amount - coin)) to keep track of the minimum number of coins required. If a valid solution is found for a particular coin, it will be considered for the minimum.


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
