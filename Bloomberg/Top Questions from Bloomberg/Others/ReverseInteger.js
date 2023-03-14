// Reverse Integer

// Solution
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


const reverse = function(x) {
  let reversed = 0; // initialize the reversed variable to 0
  const sign = x < 0 ? -1 : 1; // determine the sign of the input
  x = Math.abs(x); // convert x to a positive number
  while (x > 0) { // while there are digits left to process
    const digit = x % 10; // extract the rightmost digit of x
    reversed = reversed * 10 + digit; // append the digit to the reversed number
    x = Math.floor(x / 10); // remove the rightmost digit from x
  }
  reversed *= sign; // apply the original sign to the reversed number
  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) { // check if reversed is outside the 32-bit signed integer range
    return 0; // if it is, return 0
  }
  return reversed; // otherwise, return the reversed number
};

// Time complexity:

// The while loop iterates once for each digit in the input number, which is O(log(x)) in the worst case.
// All other operations (such as arithmetic and comparison) are constant time.
// Therefore, the overall time complexity of the algorithm is O(log(x)).
// Space complexity:

// The algorithm uses a constant amount of additional space, regardless of the size of the input number.
// Therefore, the space complexity of the algorithm is O(1).
// In summary, the solution has a time complexity of O(log(x)) and a space complexity of O(1).
