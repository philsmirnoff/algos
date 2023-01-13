// You are given a 0-indexed binary string target of length n. You have another binary string s of length n that is initially set to all zeros. You want to make s equal to target.

// In one operation, you can pick an index i where 0 <= i < n and flip all bits in the inclusive range [i, n - 1]. Flip means changing '0' to '1' and '1' to '0'.

// Return the minimum number of operations needed to make s equal to target.



// Example 1:

// Input: target = "10111"
// Output: 3
// Explanation: Initially, s = "00000".
// Choose index i = 2: "00000" -> "00111"
// Choose index i = 0: "00111" -> "11000"
// Choose index i = 1: "11000" -> "10111"
// We need at least 3 flip operations to form target.
// Example 2:

// Input: target = "101"
// Output: 3
// Explanation: Initially, s = "000".
// Choose index i = 0: "000" -> "111"
// Choose index i = 1: "111" -> "100"
// Choose index i = 2: "100" -> "101"
// We need at least 3 flip operations to form target.
// Example 3:

// Input: target = "00000"
// Output: 0
// Explanation: We do not need any operations since the initial s already equals target.

var minFlips = function(target) {
  const n = target.length;
  let isOne = false;
  let count = 0;

  for (let i = 0; i < target.length; i++) {
      const char = target.charAt(i);

      if ((char === "0" && !isOne) || (char === "1" && isOne)) continue;

      isOne = !isOne;
      count++;
  }

  return count;
};

// The time complexity of this function minFlips is O(n) and the space complexity is O(1)

// The function iterates through the string "target" using a for loop, which takes O(n) time, where n is the length of the string. Inside the loop, it checks the current character and the previous state of the character, it increments the count only if the current character is different from the previous state. It also keeps track of the state of the current character. So the time complexity of this loop is O(n).

// The function only uses a few variables to keep track of the current state and the count, so the space complexity is O(1)
