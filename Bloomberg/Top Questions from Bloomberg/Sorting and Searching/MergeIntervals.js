// Merge Intervals

// Solution
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // Sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  // Iterate through the intervals and merge overlapping intervals
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      // If the current interval overlaps with the last merged interval,
      // update the last merged interval's end time to the maximum of the two
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Otherwise, add the current interval to the merged intervals
      merged.push(current);
    }
  }

  return merged;
};


// The solution first sorts the intervals by their start times using the sort method with a comparison function that compares the start times of the intervals.

// It then initializes an array merged with the first interval in the sorted array. It iterates through the remaining intervals in the array and merges any overlapping intervals with the last merged interval in merged.

// To merge two overlapping intervals, the function updates the end time of the last merged interval to the maximum of the two end times. If the current interval doesn't overlap with the last merged interval, the function adds the current interval to merged.

// Finally, the function returns merged, which contains the non-overlapping intervals that cover all the intervals in the input.

// The time complexity of this solution is O(n log n), due to the sorting step, where n is the number of intervals. The space complexity is O(n), for storing the merged intervals.
