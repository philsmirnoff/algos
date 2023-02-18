// Subarray Sum Equals K

// Solution
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.



// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2


var subarraySum = function(nums, k) {
  let sum = 0;
  let count = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map.has(sum - k)) {
          count += map.get(sum - k);
      }
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};

// To solve this problem, we can use a hash table to keep track of the number of subarrays that have a certain sum. We will iterate through the array and keep track of the current sum of the subarray we are considering. For each element in the array, we check if the difference between the current sum and k has been encountered before. If it has, we increment the count of subarrays that have that difference as their sum. We then update the hash table with the current sum, so that it can be used in future iterations.
// In this code, sum is the current sum of the subarray we are considering, and count is the total number of subarrays that have a sum of k. The hash table map keeps track of the number of subarrays that have a certain sum.

// The function starts by initializing sum and count to 0, and adding an entry to the hash table for the sum 0, with a count of 1 (since an empty subarray has a sum of 0). It then iterates through the array nums and updates sum for each element. If the difference between sum and k has been encountered before (i.e., map has a key of sum - k), we increment count by the count of subarrays that have that sum. Finally, we update the hash table with the current sum.

// At the end of the loop, count contains the total number of subarrays in nums that have a sum of k. We return count as the result of the function.
