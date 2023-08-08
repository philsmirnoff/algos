// Meeting Rooms II

// Solution
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.



// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

var minMeetingRooms = function(intervals) {
  // Create two empty arrays to store the start and end times of the meetings
  const start = [];
  const end = [];
  // Initialize count, result, i, and j to 0
  let count = 0;
  let result = 0;
  let i = 0;
  let j = 0;

  // Loop through the meetings and add their start and end times to the corresponding arrays
  for (let val of intervals) {
      start.push(val[0]);
      end.push(val[1]);
  }

  // Sort the start and end arrays in ascending order
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  // Use a while loop to iterate through the meetings
  while (i < start.length) {
      // If the start time of the current meeting is less than the end time of the last meeting that ended, we need another room
      if (start[i] < end[j]) {
          count++;
          i++;
      } else {
          // If the start time of the current meeting is greater than or equal to the end time of the last meeting that ended, we can reuse that room
          j++;
          count--;
      }
      // Update the result to be the maximum of the current count and the previous result
      result = Math.max(count, result);
  }

  // Return the final result, which is the minimum number of rooms needed
  return result;
};

time complexity: O(nlogn)
space complexity: O(n)
