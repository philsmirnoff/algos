// 1. sort the intervals by its start time
// 2. create new arrray merged and initilise it to the first interval on the sorted list
// 3. loop over the intervals startin from index 1 and check if the start time of the current interval is bigger or equal to the end time of the last merged intevral - that means they are not overlapping => so we can push it to the merged array
// 4. else they are overlapping and we need to adjust the star and end time of the current interval and last merged interview.
// 5. return merged

const merge = (intervals) => {
  // define function 'merge' that accepts an array of intervals (each interval is [start, end])
  intervals.sort((a, b) => a[0] - b[0]); // sort intervals in-place by start time ascending

  let merged = [intervals[0]]; // initialize merged list with the first (earliest) interval

  for (let i = 1; i < intervals.length; i++) {
    // iterate through remaining intervals
    let lastMerged = merged[merged.length - 1]; // get the most recently merged interval
    let current = intervals[i]; // current interval being processed

    if (current[0] > lastMerged[1]) {
      // if current starts after lastMerged ends => no overlap
      merged.push(current); // push current as a new non-overlapping interval
    } else {
      // overlap exists: extend the end of lastMerged to the later end between the two
      lastMerged[1] = Math.max(current[1], lastMerged[1]);
    }
  }
  return merged; // return the array of merged intervals
};
