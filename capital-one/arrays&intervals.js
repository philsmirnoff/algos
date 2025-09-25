// TwoSum

var twoSum = function (nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};

// MergeIntervals
var merge = function (intervals) {
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

// MeetingRoomsII
var minMeetingRooms = function (intervals) {
  const start = [];
  const end = [];
  let count = 0;
  let result = 0;
  let i = 0;
  let j = 0;

  for (let val of intervals) {
    start.push(val[0]);
    end.push(val[1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  while (i < start.length) {
    if (start[i] < end[j]) {
      count++;
      i++;
    } else {
      j++;
      count--;
    }
    result = Math.max(count, result);
  }

  return result;
};

// NonOverlappingIntervals
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

var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  const map = {};
  map[0] = 1; // prefix sum 0 occurs once

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum - k in map) {
      count += map[sum - k];
    }

    if (sum in map) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }
  }

  return count;
};

// Example usage
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2

var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  const map = {};
  map[0] = 1; // prefix sum 0 occurs once

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum - k in map) {
      count += map[sum - k];
    }

    if (sum in map) {
      map[sum]++;
    } else {
      map[sum] = 1;
    }
  }

  return count;
};

// Example usage
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
