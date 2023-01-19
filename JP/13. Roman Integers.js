// 13. Roman to Integer
// Easy

// 8863

// 509

// Add to List

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



// This problem can be solved by iterating through the Roman numeral string, and using a switch statement or an object to determine the value of each character. We also need to keep track of the previous character to check if we need to subtract the value of the current character from the total.

const romanToInt = s => {
  const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  let total = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      let curr = map[s[i]];
      if (curr < prev) {
          total -= curr;
      } else {
          total += curr;
          prev = curr;
      }
  }
  return total;
}

// In this solution, we create an object map that maps each Roman numeral character to its corresponding value. We initialize a variable total to 0 and a variable prev to 0.

// We iterate through the string from the last character to the first one. For each character, we find its value from the map. If the value of the current character is less than the previous one, it means that it needs to be subtracted from the total (e.g. IV = 4) so we subtract it. Otherwise, we add it to the total and update the value of prev.

// Finally, we return the total, which is the integer representation of the given Roman numeral.

// The time complexity of this solution is O(n) where n is the length of the input string, since we need to iterate through the entire string once, and the space complexity is O(1) as we are only using a constant amount of extra space.
