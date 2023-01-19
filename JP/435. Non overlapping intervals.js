// 435. Non-overlapping Intervals
// Medium

// 5415

// 153

// Add to List

// Share
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


const eraseOverlapIntervals = intervals => {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < prev[1]) {
          count++;
      } else {
          prev = intervals[i];
      }
  }
  return count;
}


// This problem can be solved by sorting the intervals by their end time and then iterating through the intervals, keeping track of the end time of the previous interval and the number of intervals that need to be removed.

// Here is an example of a solution in JavaScript:
// n this solution, we first sort the intervals by their end time in ascending order. We then initialize a variable prev to the first interval and a variable count to 0.

// We iterate through the intervals starting from the second one. if the start time of the current interval is less than the end time of the previous interval, we increment count since it means that the current interval overlaps with the previous one and one of them needs to be removed. Else, we update the previous interval to be the current one.

// Finally, we return the count which is the minimum number of intervals needed to be removed to make the rest non-overlapping.

// The time complexity of this solution is O(n log n) where n is the number of intervals, since we need to sort the intervals, and the space complexity is O(1) as we are using only a constant amount of extra space.
