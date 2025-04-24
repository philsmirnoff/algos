class Solution {
  /**
   * @param {number[][]} events
   * @return {number}
   */
  maxEvents(events) {
      // Step 1: Sort the events by their end day
      events.sort((a, b) => a[1] - b[1]);

      let attendedEvents = 0;
      let lastEndTime = 0; // Keeps track of the last attended event's end day

      // Step 2: Iterate over each event
      for (let event of events) {
          let start = event[0];
          let end = event[1];

          // Step 3: Attend the event if its start time is after the last attended event's end time
          if (start > lastEndTime) {
              attendedEvents++; // Attend this event
              lastEndTime = end; // Update the last attended event's end day
          }
      }

      return attendedEvents;
  }
}

Explanation:
Sorting the Events:
First, we sort the events based on their end times (a[1] - b[1]). This helps us to greedily pick the event that ends the earliest, freeing up time for subsequent events.

Greedy Choice:
For each event, we check if the start time is strictly greater than the end time of the last attended event. If so, we can attend this event. We then update the lastEndTime to the end time of this event.

Count of Attended Events:
We keep a counter attendedEvents to count how many events we've attended.

Example Walkthrough:
Example 1:
Input: events = [[1, 2], [2, 3], [3, 4]]

Sort the Events:
After sorting, the events remain the same: [[1, 2], [2, 3], [3, 4]].

Attend Events:

Attend the event [1, 2], update lastEndTime to 2.

Attend the event [2, 3], update lastEndTime to 3.

Attend the event [3, 4], update lastEndTime to 4.

Output:
We attend all 3 events, so the output is 3.

Example 2:
Input: events = [[1, 2], [2, 3], [3, 4], [1, 2]]

Sort the Events:
After sorting, the events become: [[1, 2], [1, 2], [2, 3], [3, 4]].

Attend Events:

Attend the event [1, 2], update lastEndTime to 2.

Attend the event [2, 3], update lastEndTime to 3.

Attend the event [3, 4], update lastEndTime to 4.

Attend the event [1, 2], update lastEndTime to 2.

Output:
We attend all 4 events, so the output is 4.

Time and Space Complexity:
Time Complexity:

Sorting the events takes O(n log n), where n is the number of events.

Iterating through the sorted events takes O(n).

Overall time complexity: O(n log n).

Space Complexity:

We use O(1) additional space (apart from the input data).

Space complexity: O(1) (excluding the input).

