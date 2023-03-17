// Search in Rotated Sorted Array

// Solution
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      // If the middle element is the target, return its index
      return mid;
    } else if (nums[left] <= nums[mid]) {
      // If the left half of the array is sorted
      if (nums[left] <= target && target < nums[mid]) {
        // If the target is within the left half, search left
        right = mid - 1;
      } else {
        // Otherwise, search right
        left = mid + 1;
      }
    } else {
      // If the right half of the array is sorted
      if (nums[mid] < target && target <= nums[right]) {
        // If the target is within the right half, search right
        left = mid + 1;
      } else {
        // Otherwise, search left
        right = mid - 1;
      }
    }
  }

  // If target is not found, return -1
  return -1;
};

// The solution uses a modified binary search to find the index of the target element in the rotated sorted array. The search function initializes two pointers, left and right, to the first and last indices of the array, respectively. It then enters a while loop that continues while left is less than or equal to right. In each iteration of the loop, it calculates the middle index mid and checks if the middle element is equal to the target. If it is, it returns the index of the middle element.

// If the middle element is not equal to the target, the function checks whether the left half of the array is sorted or the right half of the array is sorted. It does this by comparing the left element nums[left] to the middle element nums[mid]. If nums[left] is less than or equal to nums[mid], then the left half of the array is sorted. If not, then the right half of the array is sorted.

// If the left half of the array is sorted and the target is within the range of the left half, the function sets right to mid - 1 to search the left half of the array. Otherwise, it sets left to mid + 1 to search the right half of the array.

// If the right half of the array is sorted and the target is within the range of the right half, the function sets left to mid + 1 to search the right half of the array. Otherwise, it sets right to mid - 1 to search the left half of the array.

// The function returns -1 if the target is not found.

// The time complexity of this solution is O(log n), since the function performs binary search on the array. The space complexity is O(1), since the function uses only constant extra space.
