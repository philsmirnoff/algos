// // 412. Fizz Buzz


// // Given an integer n, return a string array answer (1-indexed) where:

// // answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// // answer[i] == "Fizz" if i is divisible by 3.
// // answer[i] == "Buzz" if i is divisible by 5.
// // answer[i] == i (as a string) if none of the above conditions are true.


// // Example 1:

// // Input: n = 3
// // Output: ["1","2","Fizz"]
// // Example 2:

// // Input: n = 5
// // Output: ["1","2","Fizz","4","Buzz"]
// // Example 3:

// // Input: n = 15
// // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// var fizzBuzz = function(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//       if (i % 15 === 0) {
//           result.push("FizzBuzz");
//       } else if (i % 3 === 0) {
//           result.push("Fizz");
//       } else if (i % 5 === 0) {
//           result.push("Buzz");
//       } else {
//           result.push(i.toString());
//       }
//   }
//   return result;
// }


// // This solution uses a for loop to iterate through the integers from 1 to n. For each integer, it checks if it is divisible by 15, 3 or 5, and if so, it adds the corresponding string ("FizzBuzz", "Fizz", or "Buzz") to the result array. If the integer is not divisible by any of these numbers, it adds the integer as a string to the result array.

// // Finally, it returns the result array.

// // This solution has a time complexity of O(N) where N is the value of the input parameter n, as it iterates through the integers from 1 to n once. It also has a space complexity of O(N) as it creates an array of size N to store the result.


// Solve this coding challenge from Hackerrank in python3 Given an array of strings, remove each
// string that is an anagram of an earlier
// string, then return the remaining array in
// sorted order.
// Example
// str = ['code', 'doce', 'ecod', 'framer, 'frame']
// * "code" and "doce" are anagrams. Remove
// "doce" from the array and keep the first
// occurrence "code" in the array.
// • "code " and "ecod" are anagrams. Remove
// "ecod" from the array and keep the first
// occurrence "code"' in the array.
// "code" and "framer" are not
// anagrams. Keep both strings in the array.
// •
// "framer"and "frame" are not anagrams
// due to the extra 'r'in 'framer' Keep both
// strings in the array.
// Order the remaining strings in ascending
// order: [''code", "frame", "framer"]. Function Description
// Complete the function funwithAnagrams.

// funWithAnagrams has the following parameters:
// string text[n]: an array of strings
// Returns:
// string[m]: an array of the remaining strings in ascending alphabetical order.


// def funWithAnagrams(text):
//     # Create a set to store unique anagrams
//     unique_anagrams = set()
//     # Create an empty list to store the remaining strings
//     remaining_strings = []
//     for string in text:
//         # Sort the string alphabetically
//         sorted_string = "".join(sorted(string))
//         # If the sorted string is not in the set of unique anagrams
//         if sorted_string not in unique_anagrams:
//             # Add the sorted string to the set
//             unique_anagrams.add(sorted_string)
//             # Append the original string to the list of remaining strings
//             remaining_strings.append(string)
//     # Sort the remaining strings alphabetically
//     remaining_strings.sort()
//     return remaining_strings


There is an array of n integers called num.
The array can be reduced by 1 element by performing a move. Each move consists of the following three steps:
1. Pick two different elements num[i] and num[j], i is not equal to j.
2. Remove the two selected elements from the array.
3. Add the sum of the two selected elements to the end of the array.

Each move has a cost associated with it: the sum of the two elements removed from the array during the move. Calculate the minimum total cost of reducing the array to one element.

Example
num = [4, 6, 8]
Remove 4 and 6 in the first move at a cost
of 4 + 6 = 10, and the resultant array is
num' = [8,10].
Remove 8 and 10 in the second move at a cost of 8 + 10 = 18, and the resultant array is num = [18]
The total cost of reducing this array to one element using this sequence of moves is
10 + 18 = 28. This is just one set of possible
moves. For instance, one could have
started with 4 and 8. Then 4 + 8 = 12, num'
= [6, 12], 6 + 12 = 18, num" = [18], cost = 12 + 18 = 30.

Complete the function reductionCost

reductionCost has the following parameters:
int num[n): an array of integers
Return
int: the minimum total cost of reducing the input array to one element


def reductionCost(num):
  #define heapq
  import heapq
  #define cost
  cost = 0
  #define heap
  heap = []
  #loop through num

