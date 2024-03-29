// 53. Maximum Subarray
// Easy

// 20185

// 989

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// 0(n)
// const maxSub = (nums) => {
//   // by default will be the first number of the array
//   let solution = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//    // we will mutate our input array
//     nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
//     solution = Math.max(solution, nums[i])
//   }
//   return solution
// }

// console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]))

// function maxSubArraySum = (arr, num) => {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) {
//     return null
//   }
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSu, tempSum);
//   }
//   return maxSum;
// }

Solution #3
function maxSubArray(nums) {
  if (nums.length === 1) return nums[0];
  let maxValue = nums[0];
  let accNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], accNum + nums[i]);
    if (calc > maxValue) maxValue = calc;
    accNum = calc
  }
  return maxValue
}

// Time Complexity O(N);
// Space complexity O(1)
