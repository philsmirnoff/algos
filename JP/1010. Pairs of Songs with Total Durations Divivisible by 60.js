// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.



// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.


var numPairsDivisibleBy60 = function(time) {
  let res = 0;
  let map = new Array(60).fill(0);
  for (let i = 0; i < time.length; i++) {
      let t = time[i] % 60;
      res += map[(60 - t) % 60];
      map[t]++;
  }
  return res;
};

// This JavaScript function takes an array of integers as input, and returns the number of pairs of songs whose total duration in seconds is divisible by 60. The function uses a map to keep track of the number of occurrences of each remainder when dividing the song's duration by 60. It then iterates through the input array, and for each song's duration, it increments the count of the remainder in the map, and adds to the result the number of occurrences of the complement of the remainder mod 60. This way it is counting all possible pairs that add up to a multiple of 60.
