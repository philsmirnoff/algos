// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].


function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (windowEnd >= k - 1) {
          maxSum = Math.max(maxSum, windowSum);
          windowSum -= arr[windowStart]; // subtract the element going out
          windowStart += 1; // slide the window ahead
      }
  }
  return maxSum;
}

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);


// Time Complexity: O(N)
// Space Complexity: O(1)


const maxSumSubbarray = (k, arr) => {
    let maxSum = 0;
    let windowStart = 0;
    let windowSum = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while (windowEnd <= k - 1) {
            maxSum = Math.max(windowSum, maxSum);

            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}
