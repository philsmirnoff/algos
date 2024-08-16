You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.



Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.


Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

var characterReplacement = function(s, k) {
  let windowStart = 0,
      maxLength = 0,
      maxRepeatLetterCount = 0,
      frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;

    // we don't need to place the maxRepeatLetterCount under the below 'if', see the
    // explanation in the 'Solution' section above.
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // current window size is from windowStart to windowEnd, overall we have a letter
    // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
    //  which has one letter repeating 'maxRepeatLetterCount' times and the remaining
    // letters we should replace. If the remaining letters are more than 'k', it is the
    // time to shrink the window as we are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      let leftChar = s[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1

    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;

};
