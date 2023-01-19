// 1200. Minimum Absolute Difference
// Easy

// 1891

// 62

// Add to List

// Share
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
 let minDiff = Infinity;
 for (let i = 1; i < arr.length; i++) {
     minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
 }
 let result = [];
 for (let i = 1; i < arr.length; i++) {
     if (arr[i] - arr[i - 1] === minDiff) {
         result.push([arr[i - 1], arr[i]]);
     }
 }
 return result;
};

// This problem can be solved by first sorting the array, then finding the minimum absolute difference between any two elements and storing it in a variable. Then iterating through the array and creating pairs of elements that have the minimum absolute difference, and storing them in a list.

// n this solution, we first sort the array. Then we initialize a variable minDiff to the maximum safe integer, and iterate through the array, finding the minimum absolute difference between any two elements and storing it in minDiff.

// Then we create an empty list result to store the pairs that have the minimum absolute difference. We iterate through the array again, and if the absolute difference between the current element and the previous one equals to minDiff, we store the pair in the result list.

// Finally, we return the result list.

// The time complexity of this solution is O(n log n) where n is the number of elements in the array, since we need to sort the array and iterate through it twice, and the space complexity is O(n) as we are storing all the pairs that have the minimum absolute difference.
