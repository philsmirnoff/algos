// 1353. Maximum Number of Events That Can Be Attended
// Medium

// 2268

// 303

// Add to List

// Share
// You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.

// You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend one event at any time d.

// Return the maximum number of events you can attend.



// Example 1:


// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.
// Example 2:

// Input: events= [[1,2],[2,3],[3,4],[1,2]]
// Output: 4


// Constraints:

// 1 <= events.length <= 105
// events[i].length == 2
// 1 <= startDayi <= endDayi <= 105


var maxEvents = function(events) {
   events.sort((a, b) => a[0] - b[0]);

   // A priority queue to get the first event that ends sooner
 const queue = new MinPriorityQueue({
   compare: (a, b) => events[a][1] > events[b][1],
 });

 let i = 0,
   res = 0;

   // Iterate over all available days
 for (let day = 0; day <= Math.pow(10, 5); day++) {
       // Add all events that start today to the queue
   while (i < events.length && events[i][0] == day) queue.enqueue(i++);

       // Attend the event that ends sooner
   if (queue.size()) {
     queue.dequeue();
     res++;

           // Remove all other events that ended today
     while (queue.size() && events[queue.front()][1] == day)
       queue.dequeue();
   }
 }

 return res;
}


// The time complexity of this algorithm is O(n log n) and the space complexity is O(n).

// The sorting step at the beginning of the algorithm has a time complexity of O(n log n) since JavaScript's sort function uses a modified version of merge sort, which has a time complexity of O(n log n) in the average and worst case scenarios.

// The while loop inside the outer for loop iterates over all days in the range [0, 10^5], which is a constant number of iterations, and the operations inside the while loop has a time complexity of O(1) since it's just adding elements to the queue and checking the size of the queue.

// The second while loop also has a time complexity of O(1) since it's just dequeueing elements from the queue and checking the size of the queue.

// Since the size of the queue will be at most n, the space complexity of the algorithm is O(n).

// Overall, the time complexity of the algorithm is O(n log n) and the space complexity is O(n).



