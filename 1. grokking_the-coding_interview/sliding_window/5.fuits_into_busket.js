// Fruits into Baskets (medium)


// Problem Statement
// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.


// Example 1:
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

function fruits_into_baskets(fruits) {
  let windowStart = 0,
      maxLength = 0,
      fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
      if (!(rightFruit in fruitFrequency)) {
          fruitFrequency[rightFruit] = 0;
      }
      fruitFrequency[rightFruit] += 1;

      // shrink the sliding window, until we are left with '2' fruits in the fruit
      // frequency dictionary
      while (Object.keys(fruitFrequency).length > 2) {
          const leftFruit = fruits[windowStart];
          fruitFrequency[leftFruit] -= 1;
          if (fruitFrequency[leftFruit] === 0) {
              delete fruitFrequency[leftFruit];
          }
          windowStart += 1; // shrink the window
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}


console.log(`Maximum number of fruits: `
  + fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(`Maximum number of fruits: `
  + fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));


//   Time Complexity
// The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input array. The outer 'for' loop runs for all characters, and the inner 'while' loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

// Space Complexity
// The algorithm runs in constant space O(1) as there can be a maximum of three types of fruits stored in the frequency map.


function non_repeat_substring(str) {
  let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning
      // so that we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
          // this is tricky; in the current window, we will not have any 'rightChar' after
          // its previous index and if 'windowStart' is already ahead of the last index of
          // 'rightChar', we'll keep 'windowStart'
          windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);


// Time Complexity

// The above algorithm’s time complexity will be O(N)O(N), where ‘N’ is the number of characters in the input string.

// Space Complexity

// The algorithm’s space complexity will be O(K)O(K), where KK is the number of distinct characters in the input string. This also means K<=NK<=N, because in the worst case, the whole string might not have any duplicate character, so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1)O(1); in this case, we can use a fixed-size array instead of the HashMap.
