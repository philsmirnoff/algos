// m booths are setup and n groups of people would be visiting these booths.
// The booths will display robots (type 0) and drones (type 1).
// So in binary format the booth string will look in 0's and 1's format.
// Each group will visit the booths from row i to j'th position only.
// There is an experience factor which is calculated as no of drone booths visited * no of robots booths visited.
// You need to maximize the experience factor.

// Simple, readable solution (O(n²) time, O(1) space)
/**
 * Maximize (#ones * #zeros) over all contiguous subarrays of a binary string s.
 * Returns: { maxProduct, start, end }
 */
function maxExperienceSubarraySimple(s) {
  const n = s.length; // total number of booths
  let best = -1; // best (maximum) product found so far
  let bestL = 0,
    bestR = -1; // indices of the best subarray [bestL..bestR]

  // Choose a start index l for the subarray
  for (let l = 0; l < n; l++) {
    // For each new l, reset counters for the expanding window
    let ones = 0; // number of '1' (drones) in current [l..r]
    let zeros = 0; // number of '0' (robots) in current [l..r]

    // Expand the end index r from l to the end
    for (let r = l; r < n; r++) {
      // Update counts with the newly included booth s[r]
      if (s[r] === "1") ones++;
      else zeros++;

      // Compute experience for the current subarray [l..r]
      const product = ones * zeros;

      // If it's better than what we had, record it
      if (product > best) {
        best = product;
        bestL = l;
        bestR = r;
      }
    }
  }

  // Return the maximum product and the indices of the optimal range
  return { maxProduct: best, start: bestL, end: bestR };
}

// Line-by-line explanation

// function maxExperienceSubarraySimple(s) {
// Define a function that takes the binary string s representing booths.

// const n = s.length;
// Store the length once to avoid recomputing.

// let best = -1;
// Tracks the maximum experience seen so far. Start with -1 so any valid product (≥ 0) will beat it.

// let bestL = 0, bestR = -1;
// To remember the indices [i, j] of the best subarray we find.

// for (let l = 0; l < n; l++) {
// Outer loop: choose a start index l for the subarray.

// let ones = 0; let zeros = 0;
// Reset counters for this starting point. We’ll grow the window [l..r] and keep counts incrementally.

// for (let r = l; r < n; r++) {
// Inner loop: grow the end of the subarray from l outward.

// if (s[r] === '1') ones++; else zeros++;
// Update counts based on the new character s[r] (drone or robot).

// const product = ones * zeros;
// Compute the experience factor for the current window [l..r].

// if (product > best) { best = product; bestL = l; bestR = r; }
// If this window is the best so far, remember its score and indices.

// return { maxProduct: best, start: bestL, end: bestR };
// Return both the maximum experience and the subarray that achieves it.

// Dry run (tiny example)

// s = "1010"

// Start l = 0

// r = 0: window "1" → ones=1, zeros=0 → product=0 → best=0, [0,0]

// r = 1: "10" → ones=1, zeros=1 → product=1 → best=1, [0,1]

// r = 2: "101" → ones=2, zeros=1 → product=2 → best=2, [0,2]

// r = 3: "1010" → ones=2, zeros=2 → product=4 → best=4, [0,3]

// Start l = 1 (and so on…)
// You won’t beat 4 in this case.

// Final answer: maxProduct=4, start=0, end=3 ("1010" has 2 ones × 2 zeros).

// Complexity

// Time: O(n²)
// Two nested loops over l and r. Counting is O(1) per step.

// Space: O(1)
// Only a few counters and variables—no extra arrays.

// Notes & variations

// If you’re given many fixed queries [i, j] and just need to compute the product per query quickly, build a prefix sum of ones once (O(n)) and answer each query in O(1):

// ones = prefixOnes[j+1] - prefixOnes[i]
// zeros = (j - i + 1) - ones
// product = ones * zeros

// If the string can be very large and you need something beyond O(n²), you’ll likely need to discuss constraints or heuristics with the interviewer; the O(n²) solution is the clearest and most interview-friendly starting point.

// If you want, I can also return the best subarray string itself (e.g., s.slice(start, end+1)) or adapt this to handle an array of 0/1 integers instead of a string.
