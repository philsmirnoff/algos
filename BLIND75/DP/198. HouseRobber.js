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
