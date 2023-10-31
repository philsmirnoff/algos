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
}

[[1,4]]


// 1. Sort the intervals by start time
// 2. Iterate through the intervals and merge overlapping intervals
// 3. 

