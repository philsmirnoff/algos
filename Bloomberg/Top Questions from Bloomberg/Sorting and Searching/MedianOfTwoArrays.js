Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // Merge the two sorted arrays into one sorted array
  const mergedArray = mergeArrays(nums1, nums2);

  // Find the median of the merged array
  return findMedian(mergedArray);
};

/**
 * Merges two sorted arrays into one sorted array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add the remaining elements from arr1 and arr2 to the merged array
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

/**
 * Finds the median of a sorted array
 * @param {number[]} arr
 * @return {number}
 */
function findMedian(arr) {
  const n = arr.length;
  if (n % 2 === 0) {
    // If the length of the array is even, average the middle two elements
    return (arr[n/2 - 1] + arr[n/2]) / 2;
  } else {
    // If the length of the array is odd, return the middle element
    return arr[Math.floor(n/2)];
  }
}


// The solution first merges the two sorted arrays into one sorted array using the mergeArrays function. This function creates an empty array merged and iterates through arr1 and arr2 using two indices i and j. If arr1[i] is smaller than arr2[j], push arr1[i] into merged and increment i, otherwise push arr2[j] into merged and increment j. Finally, add the remaining elements from arr1 and arr2 to merged and return it.

// The findMedian function then finds the median of the merged array. If the length of the array is even, it averages the middle two elements; otherwise, it returns the middle element. The findMedianSortedArrays function calls mergeArrays and findMedian and returns the result.

// The time complexity of this solution is O(m + n) for merging the two arrays and O(1) for finding the median, so the overall time complexity is O(m + n). The space complexity is O(m + n) for creating the merged array.
