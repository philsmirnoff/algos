/**
 * @param {number[]} nums - binary array of 0s and 1s
 * @param {number} k - max number of zeros allowed to flip
 * @return {number} - the length of the longest subarray of 1s after flipping at most k zeros
 */
function longestOnes(nums, k) {
  let left = 0; // left pointer for the sliding window
  let curr = 0; // current count of zeros in the window
  let ans = 0; // stores the best (maximum) window size found so far
  const n = nums.length;

  // Expand the window by moving the right pointer
  for (let right = 0; right < n; right++) {
    // If we see a zero, increase the count of zeros in the current window
    if (nums[right] === 0) {
      curr++;
    }

    // If there are more than k zeros, shrink the window from the left
    while (curr > k) {
      if (nums[left] === 0) {
        curr--; // we're removing a zero from the window
      }
      left++; // move the left pointer forward
    }

    // The window [left..right] now has at most k zeros
    // Update the answer with the current window size
    ans = Math.max(ans, right - left + 1);
  }

  // Return the maximum length found
  return ans;
}

// 💡 Explanation (step by step)
// Initialize pointers:

// left = start of window

// right = end of window (moves in loop)

// curr = number of zeros in the current window

// ans = max window length found

// Expand window with right:

// Add nums[right] to the window.

// If it’s a zero, increment curr.

// Shrink window when constraint breaks:

// If curr > k (too many zeros), move left forward until zeros ≤ k.

// Each time we move left, if we remove a zero, decrement curr.

// Update maximum:

// Window [left..right] now valid → update ans = max(ans, right - left + 1).

// Return result:

// After processing all indices, ans is the maximum number of consecutive 1s achievable after flipping up to k zeros.

// 🧮 Example
// Input:
// nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

// Walkthrough:

// Expand window → flip up to 2 zeros → longest valid window = length 6.

// ✅ Output: 6

// ⚙️ Complexity
// Time: O(n) — each element is visited at most twice (once by right, once by left).

// Space: O(1) — constant extra memory.
