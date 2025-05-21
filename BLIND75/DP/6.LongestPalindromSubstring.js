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
