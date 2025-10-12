// 1. sort the intervals by its start time
// 2. create new arrray merged and initilise it to the first interval on the sorted list
// 3. loop over the intervals startin from index 1 and check if the start time of the current interval is bigger or equal to the end time of the last merged intevral - that means they are not overlapping => so we can push it to the merged array
// 4. else they are overlapping and we need to adjust the star and end time of the current interval and last merged interview.
// 5. return merged

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastMerged = merged[merged.length - 1];
    let current = intervals[i];

    if (current[0] > lastMerged[1]) {
      merged.push(current);
    } else {
      lastMerged[1] = Math.max(current[1], lastMerged[1]);
    }
  }
  return merged;
};
