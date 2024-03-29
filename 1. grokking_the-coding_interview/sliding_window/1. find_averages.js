// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
      windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      // slide the window, no need to slide if we've not hit the window size of 'k'
      if (windowEnd >= K - 1) {
          result.push(windowSum / K); // calculate the average
          windowSum -= arr[windowStart]; // subtract the element going out
          windowStart += 1; // slide the window ahead
      }
  }

  return result;
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);


console.log(`Averages of subarrays of size K: ${result}`);


// Time Complexity: O(N)
// Space Complexity: O(N)



const find_averages = (k, arr) => {
    let windowSum = 0;
    let windowStart = 0;
    let result = [];
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        
        while (windowEnd >= k - 1) {
            result.push(windowSum/k)
            windowSum -= arr[windowStart];
            windowStart++
        }
    }
    return result
}