// 412. Fizz Buzz


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
          result.push("FizzBuzz");
      } else if (i % 3 === 0) {
          result.push("Fizz");
      } else if (i % 5 === 0) {
          result.push("Buzz");
      } else {
          result.push(i.toString());
      }
  }
  return result;
}


// This solution uses a for loop to iterate through the integers from 1 to n. For each integer, it checks if it is divisible by 15, 3 or 5, and if so, it adds the corresponding string ("FizzBuzz", "Fizz", or "Buzz") to the result array. If the integer is not divisible by any of these numbers, it adds the integer as a string to the result array.

// Finally, it returns the result array.

// This solution has a time complexity of O(N) where N is the value of the input parameter n, as it iterates through the integers from 1 to n once. It also has a space complexity of O(N) as it creates an array of size N to store the result.
