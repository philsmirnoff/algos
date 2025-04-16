/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // This keeps track of the farthest index we can reach
  let reachable = 0;

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
      // If the current index is beyond the farthest reachable point, we can't move forward
      if (i > reachable) return false;

      // Update the farthest reachable index from this point
      reachable = Math.max(reachable, i + nums[i]);

      // Optimization: If we can reach or go beyond the last index, return true early
      if (reachable >= nums.length - 1) return true;
  }

  // If we finish the loop, we could reach the end
  return true;
};

Time Complexity: O(n)
We iterate through the array once.

Each element is visited exactly once, and we perform a constant amount of work per iteration (Math.max, comparisons).

Therefore, time complexity is linear in the size of the input.

🧠 Space Complexity: O(1)
We use only a single variable reachable to track the farthest reachable index.

