// Integer to English Words

// Solution
// Convert a non-negative integer num to its English words representation.



// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

function numberToWords(num) {
  if (num === 0) {
    return "Zero";
  }

  const lessThan20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  const getWords = (number) => {
    const words = [];
    if (number < 20) {
      words.push(lessThan20[number]);
    } else if (number < 100) {
      words.push(tens[Math.floor(number / 10)]);
      words.push(lessThan20[number % 10]);
    } else {
      words.push(lessThan20[Math.floor(number / 100)]);
      words.push("Hundred");
      words.push(...getWords(number % 100));
    }
    return words.filter((word) => word !== "");
  };

  const groups = [];
  while (num > 0) {
    groups.push(num % 1000);
    num = Math.floor(num / 1000);
  }

  const words = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    const groupWords = getWords(groups[i]);
    if (groupWords.length > 0) {
      words.push(...groupWords);
      words.push(thousands[i]);
    }
  }

  return words.join(" ");
}
// This function uses arrays to store the words for numbers less than 20, tens, and thousands, and a recursive function called getWords to get the English words for a number between 1 and 999. The function numberToWords then splits the input number into groups of three digits and uses getWords to get the English words for each group, combining them with the appropriate thousands word.

// Here's how you can use the function:


// console.log(numberToWords(123)); // Output: "One Hundred Twenty Three"
// console.log(numberToWords(12345)); // Output: "Twelve Thousand Three Hundred Forty Five"
// console.log(numberToWords(1234567)); // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"



// Ilfir Yakupov
// time and space complexity of this solution?
// The time complexity of the solution is O(log(n)), where n is the input number. This is because we are breaking down the number into groups of 3 digits, and each group takes constant time to convert to English words using the getWords function. Since the number of groups is proportional to the logarithm of the input number, the overall time complexity is O(log(n)).

// The space complexity of the solution is O(1) because we are not using any data structures that grow with the size of the input. The arrays lessThan20, tens, and thousands are fixed-size arrays that are not dependent on the input size, and the getWords function only creates a fixed-size array to store the English words for a given number. The groups and words arrays in the numberToWords function grow with the size of the input, but since each element in these arrays is a string that takes constant space, the overall space complexity is still O(1).




