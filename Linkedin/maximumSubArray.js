https://leetcode.com/problems/maximum-subarray/description/

// 53. Maximum Subarray
// Medium
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// for this current i we ll make a check if this value will amke subbarray larger
// if yes, we will update the sum, adding the value to the sum, if not we will assign sum to this value and // this value will be the first value of the subbarray and all the previous values will be disguarded, disgard the rest

const maxSubArray = (nums) => {
    let max = nums[0]
    let sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum+=nums[i]
        } else {
            sum = nums[i]
        }
        max = Math.max(max, sum)
    }
    return max
}


// Grokking coding interview
// Solution: Maximum Sum Subarray of Size K
// Problem Statement
// Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

// function max_sub_array_of_size_k(k, arr) {
//     let maxSum = 0,
//         windowSum = 0,
//         windowStart = 0;

//     for (window_end = 0; window_end < arr.length; window_end++) {
//         windowSum += arr[window_end]; // add the next element
//         // slide the window, no need to slide if we've not hit the window size of 'k'
//         if (window_end >= k - 1) {
//             maxSum = Math.max(maxSum, windowSum);
//             windowSum -= arr[windowStart]; // subtract the element going out
//             windowStart += 1; // slide the window ahead
//         }
//     }
//     return maxSum;
// }
