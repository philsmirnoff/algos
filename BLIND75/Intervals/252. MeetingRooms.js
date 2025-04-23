Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true


const canAttendMeetings = (intervals) => {
  // sort for comparison
  intervals.sort((a,b) => a[0]-b[0])

  // iterate through each interval
  for (let i = 0; i < intervals.length - 1; i++) {
      let currentEnd = intervals[i][1]
      let nextStart = intervals[i+1][0]

      // currentEnd should be less than or equal to nextStart
      if (currentEnd > nextStart) return false
  }

  return true

};
