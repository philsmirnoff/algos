// Sliding Window Maximum

// Solution
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.



// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]






var maxSlidingWindow = function(nums, k) {
  // initialize an empty result array and queue
  const res = [];
  const queue = [];
  // initialize pointers l and r to track the window boundaries
  let [l, r] = [0, 0];

  // loop through the array using r pointer
  while (r < nums.length) {
      // remove elements from the queue that are smaller than the current element
      while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
          queue.pop();
      }
      // add the current element to the queue
      queue.push(r);
      // remove elements from the queue that are outside the window
      if (l > queue[0]) queue.shift();

      // once the window size is reached, add the maximum element to the result array
      if (r + 1 >= k) {
          res.push(nums[queue[0]]);
          // move the left pointer to the right by one position
          l += 1;
      }
      // move the right pointer to the right by one position
      r += 1;
  }
  // return the result array
  return res;
};

// The function takes two arguments: an array of numbers nums and a window size k.

// The function initializes an empty result array and an empty queue to store the indices of the elements in the window.

// The function initializes two pointers l and r to the beginning of the array.

// The function enters a loop that continues until the r pointer reaches the end of the array.

// During each iteration of the loop, the function removes elements from the queue that are smaller than the current element, since they cannot be the maximum value in the sliding window.

// The function adds the current element's index to the queue.

// The function removes elements from the queue that are outside the window, i.e., smaller than the left pointer l.

// Once the window size k is reached, the function adds the maximum element in the window to the result array.

// The function then moves the left pointer l to the right by one position.

// Finally, the function moves the right pointer r to the right by one position.

// After the loop, the function returns the result array containing the maximum values in each sliding window.

// This algorithm has a time complexity of O(n), where n is the length of the input array, and a space complexity of O(k), where k is the window size. The function uses a monotonic queue data structure to efficiently maintain the maximum value in the sliding window, making it an optimal solution to the sliding window maximum problem.
