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
