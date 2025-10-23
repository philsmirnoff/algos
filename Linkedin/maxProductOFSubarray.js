/**
 * Given an integer array nums, find the subarray that has the largest product
 * and return that product.
 *
 * Example:
 * nums = [2,3,-2,4] → output = 6  (subarray [2,3])
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxProduct(nums) {
  // 🟩 Step 1: Initialize tracking variables
  // maxEnd: the maximum product of any subarray ending at the current index
  // minEnd: the minimum product of any subarray ending at the current index
  //         (needed because multiplying a negative can flip signs)
  // ans: the global maximum product found so far
  let maxEnd = nums[0];
  let minEnd = nums[0];
  let ans = nums[0];

  // 🟩 Step 2: Iterate through the array starting from index 1
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]; // current element

    // 🟨 Step 3: If the current number is negative,
    //            swap maxEnd and minEnd because multiplying by a negative
    //            flips the maximum and minimum products.
    if (num < 0) {
      const tmp = maxEnd;
      maxEnd = minEnd;
      minEnd = tmp;
    }

    // 🟩 Step 4: Decide whether to start a new subarray at `num`,
    //            or extend the previous subarray by multiplying.
    // The choice depends on which yields a larger (or smaller) product.
    maxEnd = Math.max(num, maxEnd * num); // best positive product up to i
    minEnd = Math.min(num, minEnd * num); // worst (most negative) product up to i

    // 🟩 Step 5: Update the global maximum product so far.
    ans = Math.max(ans, maxEnd);
  }

  // 🟩 Step 6: Return the result (largest product of any contiguous subarray)
  return ans;
}

// “I keep track of both the maximum and minimum product up to each index because a negative number can flip the sign. When I see a negative, I swap them. At each step, I decide whether to start fresh or extend the current subarray. The overall max across all indices is the answer. This runs in O(n) time and O(1) space.”
