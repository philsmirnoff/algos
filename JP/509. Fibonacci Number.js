509. Fibonacci Number


// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).



// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

var fib = function(n) {
  if (n <= 1) return n;
let a = 0, b = 1, temp;
for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
}
return b;
};


This solution uses a for loop to iterate through the integers from 2 to n.
It starts with initial values of Fibonacci numbers 0 and 1, and then keeps track of last two numbers of the Fibonacci sequence and add them to get the next number in the sequence, and then it updates the value of a and b to get the next number in the sequence.

It has a time complexity of O(n) as it iterates from 2 to n, and a space complexity of O(1) as it only uses variables a and b to store the Fibonacci numbers.

If you want to optimize this solution you can use dynamic programming with memoization or tabulation.


optimized solution using memoization
const fib = (n, memo = {}) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

n this modified solution, an empty object memo is passed as a second argument to the function, which will be used to store the results of expensive function calls.
In the case where the input n is less than or equal to 1, the function returns n as before.
If n is already in the memo object, the function returns the cached result.
Otherwise, the function calculates fib(n-1, memo) + fib(n-2, memo) and stores the result in the memo object under the key n before returning it.

This way the solution has a time complexity of O(n) and space complexity of O(n) because it is using a data structure to store the result of the function calls.
