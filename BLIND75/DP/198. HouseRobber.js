Brute force:
const rob = (nums) => {
  if (nums.length === 0) return 0

  const robHelper = (i) => {
      if (i === 0) return 0
      if (i === 1) return nums[0]

      let skip = robHelper(i - 1)
      let take = robHelper(i - 2) + nums[i - 1]
      let result = Math.max(skip, take)
      return result
  }
  return robHelper(nums.length)
}

topBottom
var rob = function(nums) {
  // Step 1: Check if the input array is empty
  // If there are no houses, there's nothing to rob, so return 0
  if (nums.length === 0) return 0;

  // Step 2: Create a memoization object
  // This will store the results for subproblems to avoid redundant calculations
  const memo = {};

  // Step 3: Define the helper function robHelper(i)
  // This function calculates the maximum amount that can be robbed from the first `i` houses.
  const robHelper = (i) => {
      // Step 4: Base case when `i` is 0, meaning no houses to rob.
      if (i === 0) return 0;

      // Step 5: Base case when `i` is 1, meaning there is one house to rob.
      // Return the value of that house (nums[0]).
      if (i === 1) return nums[0];

      // Step 6: If the result for `i` has been previously computed, return it from `memo`
      // This avoids redundant calculations and speeds up the solution
      if (i in memo) return memo[i];

      // Step 7: Recursive calls to robHelper to calculate the two possibilities:
      // 1. Skip the current house (rob from the previous house)
      // 2. Take the current house and add its value to the amount robbed from two houses before
      let skip = robHelper(i - 1);  // Skip the current house
      let take = robHelper(i - 2) + nums[i - 1];  // Take the current house (add its value)

      // Step 8: The maximum money that can be robbed at step `i` is the best of the two options (skip or take)
      let result = Math.max(skip, take);

      // Step 9: Store the computed result for the current step `i` in `memo`
      memo[i] = result;

      // Step 10: Return the computed result for step `i`
      return result;
  }

  // Step 11: Call robHelper with the length of the array (i.e., consider all houses) and return the result
  return robHelper(nums.length);
};
T.c: O(n)
S/c: O(n)

// Function to determine the maximum amount of money that can be robbed
// without robbing two adjacent houses.
function rob(nums: number[]): number {
  // Initialize two variables:
  // robPrevious - the maximum amount robbed up to the previous house
  // robCurrent - the maximum amount robbed up to the current house
  let [robPrevious, robCurrent] = [0, 0];

  for (const currentHouseValue of nums) {
      // Compute the new maximum excluding and including the current house:
      // The new robPrevious becomes the maximum of either
      // robPrevious or robCurrent from the previous iteration.
      // robCurrent is updated with the sum of robPrevious (excludes the previous house)
      // and the value of the current house, representing the choice to rob this house.
      [robPrevious, robCurrent] = [Math.max(robPrevious, robCurrent), robPrevious + currentHouseValue];
  }

  // Return the maximum amount robbed between the last two houses considered
  return Math.max(robPrevious, robCurrent);
  Time complexity: O(n)
  Space complexity: O(1)


  another great explaination:
  Certainly! Below is the step-by-step conversion of the "House Robber" problem into JavaScript, following the same pattern you described:

Step 1: Recursive Relation
We need to find a recursive relation for the problem. As you described:

A robber can either rob the current house or skip it.

If they rob the current house, they can’t rob the previous one, but they can rob the house before that.

If they skip the current house, they can rob the previous house.

Thus, the relation is:

javascript
Copy
rob(i) = Math.max(rob(i - 2) + currentHouseValue, rob(i - 1))
Step 2: Recursive (Top-down)
The recursive approach without memoization would look like this in JavaScript:

javascript
Copy
const rob = (nums) => {
    return robHelper(nums, nums.length - 1);
};

const robHelper = (nums, i) => {
    if (i < 0) {
        return 0;
    }
    return Math.max(robHelper(nums, i - 2) + nums[i], robHelper(nums, i - 1));
};
Step 3: Recursive + Memoization (Top-down)
To avoid recalculating the same subproblems multiple times, we can use memoization. This stores the results of subproblems in an array to be reused.

javascript
Copy
const rob = (nums) => {
    const memo = new Array(nums.length).fill(-1);  // Initialize memoization array
    return robHelper(nums, nums.length - 1, memo);
};

const robHelper = (nums, i, memo) => {
    if (i < 0) {
        return 0;
    }
    if (memo[i] !== -1) {
        return memo[i];  // Return already computed result
    }
    memo[i] = Math.max(robHelper(nums, i - 2, memo) + nums[i], robHelper(nums, i - 1, memo));
    return memo[i];
};
Step 4: Iterative + Memoization (Bottom-up)
The next step is to use a bottom-up iterative approach with memoization to avoid recursion:

javascript
Copy
const rob = (nums) => {
    if (nums.length === 0) return 0;
    const memo = new Array(nums.length + 1).fill(0);
    memo[1] = nums[0];  // Base case: the first house can be robbed

    for (let i = 1; i < nums.length; i++) {
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
    }

    return memo[nums.length];
};
Step 5: Iterative + 2 Variables (Bottom-up)
Finally, we can optimize the space complexity. We only need to keep track of the last two values in the memo array, as the solution for rob(i) depends only on rob(i-1) and rob(i-2). We can reduce the space complexity to
𝑂
(
1
)
O(1) by using two variables instead.

javascript
Copy
const rob = (nums) => {
    if (nums.length === 0) return 0;

    let prev1 = 0;  // Represents rob(i-1)
    let prev2 = 0;  // Represents rob(i-2)

    for (let num of nums) {
        const temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);  // Rob current house or skip it
        prev2 = temp;  // Update prev2 to the previous prev1
    }

    return prev1;  // The last calculated value is the answer
};
Summary of Steps:
Recursive Relation: Defined the problem's recursive relation.

Recursive (Top-down): Solved the problem recursively without memoization.

Recursive + Memo (Top-down): Improved with memoization to avoid redundant calculations.

Iterative + Memo (Bottom-up): Used a bottom-up approach with a memo array to store results.

Iterative + 2 Variables (Bottom-up): Optimized space complexity by using just two variables.

Time and Space Complexity:
Time Complexity:
𝑂
(
𝑛
)
O(n) for all steps, as we iterate through the list once.

Space Complexity:

Step 2:
𝑂
(
𝑛
)
O(n) for recursion stack.

Step 3:
𝑂
(
𝑛
)
O(n) for memoization.

Step 4:
𝑂
(
𝑛
)
O(n) for the memo array.

Step 5:
𝑂
(
1
)
O(1) for just two variables.

By optimizing to two variables, the space complexity is minimized to
𝑂
(
1
)
O(1), making it the most efficient solution in terms of space while keeping the time complexity
𝑂
(
𝑛
)
O(n).

```jsx
javascript
Copy
const rob = (nums) => {
    if (nums.length === 0) return 0; // If there are no houses, return 0

    let prev1 = 0; // Represents the maximum money we can rob up to the previous house (i-1)
    let prev2 = 0; // Represents the maximum money we can rob up to the house before the previous house (i-2)

    for (let num of nums) {
        let temp = prev1; // Store the current prev1 value (maximum up to house i-1)

        // For each house, we decide whether to rob it or not
        // If we rob the current house, we add num (current house's value) to prev2 (the loot up to house i-2)
        prev1 = Math.max(prev2 + num, prev1); // Rob current house or skip it

        prev2 = temp; // Update prev2 to the old value of prev1 (which was before we considered the current house)
    }

    return prev1; // prev1 contains the result: the maximum loot we can get by robbing the last house
}

```

### Key Concepts:

1. **Base Case**:
    - If there are no houses (`nums.length === 0`), we return `0` because there is nothing to rob.
2. **Two Variables (`prev1` and `prev2`)**:
    - `prev1` keeps track of the maximum loot we can rob **up to the previous house** (i.e., house `i-1`).
    - `prev2` keeps track of the maximum loot we can rob **up to the house before the previous house** (i.e., house `i-2`).
3. **The Iteration**:
    - We loop through each house in the `nums` array. For each house:
        - We store the current `prev1` value in `temp`. This is necessary because we'll update `prev1` in the next line and need to preserve its old value for `prev2`.
        - We then calculate the maximum loot for the current house:
            - **`prev2 + num`**: This represents robbing the current house (`num`) and adding it to the loot from the house before the previous one (`prev2`).
            - **`prev1`**: This represents skipping the current house and taking the loot from the previous house (`prev1`).
        - We set `prev1` to the maximum of these two options, i.e., either robbing the current house or skipping it.
        - Finally, we update `prev2` to the old value of `prev1` (`temp`), so `prev2` always holds the maximum loot up to the house two steps before.
4. **Final Result**:
    - After the loop, `prev1` holds the maximum loot we can get by robbing up to the last house. We return `prev1`.

### Example Walkthrough:

Let's walk through an example with `nums = [2, 7, 9, 3, 1]`.

1. **Initial Values**:
    - `prev1 = 0`, `prev2 = 0`
2. **First Iteration (num = 2)**:
    - `temp = prev1 = 0`
    - `prev1 = Math.max(prev2 + num, prev1) = Math.max(0 + 2, 0) = 2`
    - `prev2 = temp = 0`
3. **Second Iteration (num = 7)**:
    - `temp = prev1 = 2`
    - `prev1 = Math.max(prev2 + num, prev1) = Math.max(0 + 7, 2) = 7`
    - `prev2 = temp = 2`
4. **Third Iteration (num = 9)**:
    - `temp = prev1 = 7`
    - `prev1 = Math.max(prev2 + num, prev1) = Math.max(2 + 9, 7) = 11`
    - `prev2 = temp = 7`
5. **Fourth Iteration (num = 3)**:
    - `temp = prev1 = 11`
    - `prev1 = Math.max(prev2 + num, prev1) = Math.max(7 + 3, 11) = 11`
    - `prev2 = temp = 11`
6. **Fifth Iteration (num = 1)**:
    - `temp = prev1 = 11`
    - `prev1 = Math.max(prev2 + num, prev1) = Math.max(11 + 1, 11) = 12`
    - `prev2 = temp = 11`

### Final Answer:

After iterating through all the houses, `prev1 = 12`, which is the maximum loot we can rob. So, the function returns `12`.

### Why This Works:

- By maintaining `prev1` and `prev2`, we are keeping track of the optimal loot we can rob while following the rule that you can't rob two adjacent houses.
- **Space Optimization**: Instead of using an array to store the maximum loot for each house, this solution uses only two variables, `prev1` and `prev2`, to reduce the space complexity from O(n)O(n)O(n) to O(1)O(1)O(1).
- **Time Complexity**: The time complexity is O(n)O(n)O(n) because we are iterating through the list of houses once.

### Summary:

- `prev1` represents the maximum loot up to the previous house (house `i - 1`).
- `prev2` represents the maximum loot up to the house before the previous house (house `i - 2`).
- At each step, we decide whether to rob the current house (adding its value to `prev2`) or skip it and take the loot from `prev1`.
- The result after iterating through all houses is stored in `prev1`.
