Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.



Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
🕵️‍♂️ Problem Analysis:
We're given an array of intervals, and the goal is to find the minimum number of intervals to remove to make the rest non-overlapping. To achieve this, we'll apply the greedy approach.

⭐ Greedy Insight:
Let's try out a few greedy strategies. Say we select the interval with the smallest start time. Oops! This fails when the interval with the smallest start time also happens to be the longest one, leading to many overlapping intervals that need to be discarded.

💡 The Winning Greedy Strategy:
Instead, let's sort the intervals based on their end times. Why? Imagine two intervals, one ending at x and the other ending at y (where x < y). If we skip the interval ending at x and take the one ending at y, we'll may have to remove at least one interval that starts in the range (x, y). So, we should always sort based on the end time of intervals.

🛠️ Implementation:

1: Sort the intervals based on their end times in ascending order.

2: Initialize a variable 'answer' to keep track of the number of intervals to be removed.

3: Consider the first interval as 'last' or the last taken interval.

4: Iterate through the intervals, and for each interval:

If the current interval's start time is less than the end time of the 'last' interval, they overlap. Increment 'answer' as we need to remove an interval to avoid overlap.

Otherwise, update 'last' to the current interval.

5: Return the final value of answer.

function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;

  // Sort intervals by their end time
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEnd = intervals[0][1]; // End time of the last non-overlapping interval

  for (let i = 1; i < intervals.length; i++) {
      // If the current interval overlaps with the last non-overlapping interval
      if (intervals[i][0] < lastEnd) {
          count++; // We need to remove this interval
      } else {
          // Update lastEnd to the end of the current non-overlapping interval
          lastEnd = intervals[i][1];
      }
  }

  return count;
}
