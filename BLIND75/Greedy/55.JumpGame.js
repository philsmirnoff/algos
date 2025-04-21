/**
 * @param {number[]} nums
 * @return {boolean}
 */
canJump(nums) {
  // Step 1: Initialize `goal` as the last index of the array
  let goal = nums.length - 1;

  // Step 2: Iterate through the array backwards (from the last index to the first)
  for (let i = nums.length - 1; i >= 0; i--) {
      // Step 3: Check if we can jump from the current index to the `goal` (or further)
      // We check if the current index plus the jump length (`nums[i]`) can reach or exceed the `goal`
      if (i + nums[i] >= goal) {
          // Step 4: If it can, update the `goal` to be the current index.
          // This means that we can now "reach" the new goal, which is closer to the start.
          goal = i;
      }
  }

  // Step 5: After the loop, check if `goal` is 0. If it is, it means we can reach the first index.
  // This is because we updated the `goal` every time we found a reachable index.
  // If `goal` is 0, it means we can jump from the start to the end.
  return goal === 0;
}

time complexity O(n)
space complexity O(1)
