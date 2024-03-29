1413. Minimum Value to Get Positive Step by Step Sum
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.



Example 1:

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
step by step sum
startValue = 4 | startValue = 5 | nums
  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
Example 2:

Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive.
Example 3:

Input: nums = [1,-2,-3]
Output: 5

function minStartValue(nums) {
  let min = Infinity;
  let sum = 0;
  nums.forEach(n => {
    min = Math.min(min, sum += n);
  });
  return min >= 1 ? 1 : Math.abs(min - 1);
}

The time complexity of this algorithm is O(N) where N is the number of elements in the input array, as it iterates through the array once using the forEach() method.

The space complexity of this algorithm is O(1) as it uses only a few variables that take a constant amount of space: a variable min to store the minimum value, a variable sum to store the running sum, and a constant value of 1.
