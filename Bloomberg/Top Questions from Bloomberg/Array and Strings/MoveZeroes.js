// Move Zeroes

// Solution
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


var moveZeroes = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          [nums[i], nums[index]] = [nums[index], nums[i]];
          index++;
      }
  }
};

// This is a JavaScript function that takes an array nums and moves all the zeroes in the array to the end of the array, while maintaining the relative order of the non-zero elements.

// The function works by iterating through the array with a for loop and maintaining a separate index index that keeps track of the position where the next non-zero element should be placed. For each element of the array, the function checks whether it is not equal to zero. If it is not, the function swaps the current element with the element at nums[index] using destructuring assignment, and increments index by 1. This way, all non-zero elements are moved to the front of the array, and all zeroes are left at the end of the array.

// Note that the function modifies the input array in place and does not return anything. Therefore, if you call this function with an array as an argument, the original array will be modified.
