const minMeetingRooms = (intervals) => {
    // Step 1: Extract the start times and end times from the intervals
    let starts = intervals.map(x => x[0]); // Extract start times from each interval
    let ends = intervals.map(x => x[1]); // Extract end times from each interval

    // Step 2: Sort the start times and end times in ascending order
    starts.sort((a, b) => a - b); // Sort start times in ascending order
    ends.sort((a, b) => a - b);   // Sort end times in ascending order

    // Step 3: Initialize variables for tracking room usage
    let roomsNeeded = 0;  // This will track the number of rooms needed
    let e = 0;            // Pointer for the 'ends' array to track the end times

    // Step 4: Loop through the sorted start times to allocate rooms
    for (let s = 0; s < starts.length; s++) {
        // Step 4a: If the current meeting's start time is greater than or equal to
        // the earliest ending meeting's end time, we can reuse that room
        if (starts[s] >= ends[e]) {
            roomsNeeded--;  // Reuse an existing room by reducing the room count
            e++;            // Move the 'e' pointer to the next end time (room now reused)
        }

        // Step 4b: Allocate a new room for the current meeting
        roomsNeeded++;  // Increment the number of rooms needed

    }

    // Step 5: Return the total number of rooms needed to host all meetings
    return roomsNeeded;
}


Key Steps:
Extracting Start and End Times:

We first extract the start times and end times from the intervals array and store them in separate arrays, starts and ends.

Sorting the Arrays:

Both starts and ends are sorted in ascending order to efficiently determine when meetings start and end. This helps us to check if we can reuse meeting rooms by comparing the earliest ending meeting with the current starting meeting.

Tracking Room Usage:

roomsNeeded keeps track of how many rooms are needed to host all the meetings at the current moment.

e is used to keep track of the index of the earliest ending meeting, which helps in determining if a meeting room can be reused.

Iterating Through the Start Times:

For each start time (starts[s]), we check if it can reuse a room (i.e., if it starts after or at the same time as the earliest ending meeting). If so, we decrement the room count (roomsNeeded--) and move the e pointer to the next end time.

Whether we reuse a room or not, we increment the room count (roomsNeeded++) to account for the current meeting starting.

Returning the Final Result:

After iterating through all the meetings, the total number of rooms needed is stored in roomsNeeded, which we return as the result.

Example Walkthrough:
Given the input:

javascript
Copy
const intervals = [[0, 30], [5, 10], [15, 20]];
Initial Arrays:

starts = [0, 5, 15]

ends = [10, 20, 30]

Sorted Arrays (no change in this case):

starts = [0, 5, 15]

ends = [10, 20, 30]

Tracking Room Usage:

roomsNeeded = 0, e = 0 (no rooms allocated yet)

For starts[0] = 0:

No room reuse because 0 < 10.

roomsNeeded increments to 1.

For starts[1] = 5:

No room reuse because 5 < 10.

roomsNeeded increments to 2.

For starts[2] = 15:

Room reuse because 15 >= 10 (end of the first meeting).

roomsNeeded decrements to 1, e increments to 1.

roomsNeeded increments back to 2 for the new meeting.

Final Result:

The minimum number of rooms required is 2.

Time Complexity:
Sorting the starts and ends arrays takes O(n log n).

The loop iterates through the starts array, which takes O(n).

Thus, the overall time complexity is O(n log n).

Space Complexity:
We store two arrays (starts and ends) of length n, so the space complexity is O(n).

This approach is efficient and handles edge cases like overlapping meetings or multiple meetings ending at the same time.
