// 283. Move Zeroes
// Easy

// 12397

// 312

// Add to List

// Share
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

// This problem can be solved by keeping track of the index of the next non-zero element to be placed in the array, and iterating through the array, swapping any non-zero elements with the element at that index, and incrementing the index for each non-zero element.

// In this solution, we initialize a variable index to 0, which will keep track of the next non-zero element to be placed in the array. We iterate through the array. If the current element is not 0, we swap it with the element at the index and increment the index. This way, all non-zero elements are moved to the front of the array and all the zeroes are at the end of the array.

// The time complexity of this solution is O(n) where n is the number of elements in the array, since we need to iterate through the entire array once, and the space complexity is O(1) as we are only using a constant amount of extra space.
