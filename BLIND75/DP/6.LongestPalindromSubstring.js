### **Approach 1: Check All Substrings**

**Intuition**

We can start with a brute-force approach. We will simply check if each substring is a palindrome, and take the longest one that is.

First, let's talk about how we can check if a given string is a palindrome. This is a classic problem and we can do it using two pointers. If a string is a palindrome, the first character is equal to the last character. The second character is equal to the second last character, and so on.

RACECAR

We initialize two pointers: one at the start of the string and another at the end of it. We check if the characters at the pointers are equal - if they aren't, we know the string cannot be a palindrome. If they are equal, we move to the next pair of characters by moving the pointers toward each other. We continue until we either find a mismatch or the pointers meet. If the pointers meet, then we have checked all pairs and we know the string is a palindrome.

One bonus to using this algorithm is that we frequently exit early on strings that are not palindromes. If you had a string of length `1000` and the third and third last characters did not match, we would exit the algorithm after only 3 iterations.

There's another optimization that we can do. Because the problem wants the longest palindrome, we can start by checking the longest-length substrings and iterate toward the shorter-length substrings. This way, the first time we find a substring that is a palindrome, we can immediately return it as the answer.

**Algorithm**

1. Create a helper method `check(i, j)` to determine if a substring is a palindrome.
    - To save space, we will not pass the substring itself. Instead, we will pass two indices that represent the substring in question. The first character will be `s[i]` and the last character will be `s[j - 1]`.
    - In this function, declare two pointers `left = i` and `right = j - 1`.
    - While `left < right`, do the following steps:
    - If `s[left] != s[right]`, return `false`.
    - Otherwise, increment `left` and decrement `right`.
    - If we get through the while loop, return `true`.
2. Use a for loop to iterate a variable `length` starting from `s.length` until `1`. This variable represents the length of the substrings we are currently considering.
3. Use a for loop to iterate a variable `start` starting from `0` until and including `s.length - length`. This variable represents the starting point of the substring we are currently considering.
4. In each inner loop iteration, we are considering the substring starting at `start` until `start + length`. Pass these values into `check` to see if this substring is a palindrome. If it is, return the substring.

var longestPalindrome = function (s) {
    let check = function (i, j) {
        let left = i;
        let right = j - 1;

        while (left < right) {
            if (s.charAt(left) !== s.charAt(right)) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    for (let length = s.length; length > 0; length--) {
        for (let start = 0; start <= s.length - length; start++) {
            if (check(start, start + length)) {
                return s.substring(start, start + length);
            }
        }
    }

    return "";
};

Time complexity:
O(N*2)
Space Complexity:
O(1)


Solution umber 2:


function longestPalindrome(s) {
  // `start` will store the starting index of the longest palindrome found,
  // `maxLength` is the length of that palindrome (at least 1, since any char is a palindrome).
  let start = 0, maxLength = 1;

  // Helper function: expand around the “center” defined by (left, right)
  // and update `start` and `maxLength` whenever we find a longer palindrome.
  function expandAroundCenter(left, right) {
    // As long as we're in bounds and characters match, we have a palindrome.
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Compute length of current palindrome window [left..right]
      const currLength = right - left + 1;

      // If it's longer than anything we've seen, record its position and length.
      if (currLength > maxLength) {
        start = left;
        maxLength = currLength;
      }

      // Move one step outward on both sides to try to expand further.
      left--;
      right++;
    }
    // When the loop exits, either bounds are exceeded or characters differ.
  }

  // Iterate over each index, treating it as the “middle” of a palindrome.
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);     // Odd-length palindromes (single-center)
    expandAroundCenter(i, i + 1); // Even-length palindromes (double-center)
  }

  // Extract and return the longest palindromic substring found.
  // `start` is its first index, and `maxLength` is how many chars long it is.
  return s.slice(start, start + maxLength);
}


To find the longest palindromic substring in a given string, we can use a simple approach called "expand around center". Imagine you're reading the string from left to right, character by character. At each character, you can think of it as a potential center of a palindrome. To check if there's a palindrome centered around that character, you expand outward from the center and compare characters on both sides. If the characters match, you continue expanding until you find a mismatch or reach the boundaries of the string. By doing this for each character in the string, you can find the longest palindrome.

The tricky part is handling palindromes with even lengths. In that case, the center of the palindrome is between two characters rather than a single character. So, we treat each character and the space between two characters as potential centers and expand around them. By trying different centers and expanding around them, we can find the longest palindromic substring in the given string.

Time/Space Complexity Analysis
Time Complexity: O(n²), as we have nested loops iterating through the string. The outer loop runs for each character in the string, and the inner loop expands around the center to find palindromes. In the worst case, we may need to expand on both sides for every character, resulting in a quadratic time complexity.
Space Complexity: O(1), as we only use a constant amount of extra space to store variables and temporary values.
