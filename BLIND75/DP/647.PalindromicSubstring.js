1. Idea
Every palindrome in s is centered either on a character (odd length) or between two characters (even length).

For each center, expand outward as long as the characters match—and each time they match, increment your count.

2. Algorithm
Initialize count = 0.

Loop i from 0 to s.length - 1:

Odd centers: call expand(i, i)

Even centers: call expand(i, i+1)

In expand(left, right):

While left >= 0 && right < s.length && s[left] === s[right]

count++

left--, right++

Return count at the end.

This does 2n expansions, each up to O(n), for O(n²) overall, with O(1) extra space.

3. JavaScript Implementation
js
Copy
Edit
function countPalindromicSubstrings(s) {
  let count = 0;

  // Try every possible center (odd and even)
  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // odd-length palindromes
    expand(i, i + 1); // even-length palindromes
  }

  return count;

  // Expand around the given (left, right) and count every valid palindrome
  function expand(left, right) {
    // As long as we're in bounds and the chars match, it's a palindrome
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;   // found one more palindrome
      left--;    // move outward
      right++;
    }
  }
}

// --- Examples ---
console.log(countPalindromicSubstrings("abc")); // 3: "a","b","c"
console.log(countPalindromicSubstrings("aaa")); // 6: "a","a","a","aa","aa","aaa"
4. Complexity
Time: O(n²) — two expansions per index, each up to O(n) work

Space: O(1) — just a few pointers and a counter

This approach is simple, runs in quadratic time (good for n ≤ 1000), and uses no extra memory beyond a couple of indices.








