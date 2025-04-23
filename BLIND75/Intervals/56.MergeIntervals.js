Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

      // sort all intervals by its start time
      // initilise the first interval on the merged result array
      // check if the endtime of last interval in merged result arr is bigger
      // than start time of the current interval => update the end time by using Math.max function
      // otherwise just push it to the merged result array

  const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

      // Initialize the first interval in the merged result array
      let merged = [intervals[0]];

      for (let i = 1; i < intervals.length; i++) {
          let lastMerged = merged[merged.length - 1];
          let current = intervals[i];

          // If the current interval overlaps with the last merged one, merge them
          if (current[0] <= lastMerged[1]) {
              lastMerged[1] = Math.max(current[1], lastMerged[1]);
          } else {
              // Otherwise, just add the current interval to the result
              merged.push(current);
          }
      }

      return merged;
  }
