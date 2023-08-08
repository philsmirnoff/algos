
// [1, 5], [6, 8], [10, 12], [15, 18] 
// new interval [4, 7]
// [1, 8], [10, 12], [15, 18]
var insert = function(intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
 const result = [];
let i = 0;

// Insert all intervals lower than the new interval
 while(i < intervals.length) {
     const [start, end] = intervals[i];
     if(end >= newStart) break;
     result.push([start, end]);
     i += 1;
 }

// Evaluate the upper and lower bounds of the new interval
 while(i < intervals.length) {
     const [start, end] = intervals[i];
     if(start > newEnd) break;
     newStart = Math.min(newStart, start);
     newEnd = Math.max(newEnd, end);
     i += 1;
 }
 result.push([newStart, newEnd]);

// Insert all the intervals greater than the new interval
 while(i < intervals.length) {
     result.push(intervals[i]);
     i += 1;
 }

 return result;
};
