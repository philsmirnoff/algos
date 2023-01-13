// Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.



// Example 1:

// Input: s = "owoztneoer"
// Output: "012"
// Example 2:

// Input: s = "fviefuro"
// Output: "45"

const originalDigits = function(s) {
  let count = new Array(10).fill(0);
  let result = '';
  for (let i = 0; i < s.length; i++) {
      let c = s[i];
      switch (c) {
          case 'z':
              count[0]++;
              break;
          case 'w':
              count[2]++;
              break;
          case 'u':
              count[4]++;
              break;
          case 'x':
              count[6]++;
              break;
          case 'g':
              count[8]++;
              break;
          case 'h':
              count[3]++;
              break;
          case 'f':
              count[5]++;
              break;
          case 's':
              count[7]++;
              break;
          case 'i':
              count[9]++;
              break;
          case 'o':
              count[1]++;
              break;
      }
  }
  count[3] -= count[8];
  count[5] -= count[4];
  count[7] -= count[6];
  count[9] -= count[8] + count[6] + count[5];
  count[1] -= count[0] + count[2] + count[4];
  for (let i = 0; i <= 9; i++) {
      result += i.toString().repeat(count[i]);
  }
  return result;
}

// This algorithm uses a count array to keep track of the number of occurrences of each digit in the given string, and then uses the unique properties of each digit to determine the count of other digits. For example, the number of occurrences of the digit 'z' in the string determines the count of digit '0', the number of occurrences of the digit 'w' determines the count of digit '2', and so on. The algorithm then uses the count array to construct the original digits in ascending order.

// The time complexity of this algorithm is O(n) and the space complexity is O(1) as the algorithm only uses a constant number of variables and a count array of size 10.
