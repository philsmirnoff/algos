const rob = (nums) => {
  // we will create two dp arrays: starting from the beginning till the end -2 not including one. And the other one dp2 that starts from the second one from the second house till the end and then later we will calculate the solution:

  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let dp1 = new Array(nums.length)
  let dp2 = new Array(nums.length)

  robTwice(0, nums.length - 2, dp1, nums);
  robTwice(1, nums.length - 1, dp2, nums)


  const robTwice = (i, numsLen, dp, nums) => {
    dp[i] = nums[i]
    dp[i + 1] = Math.max(dp[i], nums[i + 1])

    for (let j = i + 2; j < numsLen; j++) {
      dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j])
    }
  }
}


var rob = function(nums) {
    // This is the helper function that will calculate the maximum loot we can rob from a linear row of houses (not a circle).
    const getMax = (nums) => {
        // Initialize two variables:
        // - prevRob will store the maximum money we can rob up to the previous house.
        // - maxRob will store the maximum money we can rob up to the current house.
        let prevRob = 0, maxRob = 0;

        // Iterate through each house (represented by curVal in nums) and decide whether to rob it or skip it.
        for (let curVal of nums) {
            // Calculate the temporary value for the current house:
            // - If we rob the current house, we add its value to the maximum money robbed up to two houses ago (prevRob).
            // - If we skip the current house, we simply take the money from the previous house (maxRob).
            let temp = Math.max(maxRob, prevRob + curVal);

            // Update prevRob and maxRob for the next iteration:
            // - prevRob now holds the value of maxRob before we robbed the current house.
            prevRob = maxRob;
            // - maxRob is updated to the value of temp, which is the maximum loot considering robbing or skipping the current house.
            maxRob = temp;
        }

        // Return the maximum loot that can be robbed from this row of houses.
        return maxRob;
    };

    // If there's only one house, the maximum loot is the amount in that house.
    if (nums.length === 1) return nums[0];

    // For a circular street, we can't rob both the first and last house simultaneously.
    // Therefore, we solve two subproblems:
    // - Case 1: Rob houses from index 0 to n-2 (exclude the last house).
    // - Case 2: Rob houses from index 1 to n-1 (exclude the first house).
    // We return the maximum of these two cases, or the value of the first house if there's only one house.
    return Math.max(getMax(nums.slice(0, -1)), getMax(nums.slice(1)), nums[0]);
};
