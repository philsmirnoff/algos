
// brute force solution
// Main function that initiates the word break verification
const wordBreak = (word, wordDict) => {
  // Call the helper function starting from index 0
  return verifyBreak(word, wordDict, 0);
}

// Helper function to recursively check if the word can be segmented
const verifyBreak = (word, dic, start) => {
  // Base case: If we've reached the end of the word, return true
  if (start === word.length) return true;

  // Try every possible end index starting from start+1 to word.length
  for (let end = start + 1; end <= word.length; end++) {
    // Extract the substring from start to end (not including end)
    let wildGuess = word.substring(start, end);

    // If the substring is in the dictionary AND the rest of the string can be segmented
    if (dic.includes(wildGuess) && verifyBreak(word, dic, end)) {
      return true; // If both conditions are satisfied, the word can be broken successfully
    }
  }

  // If no valid segmentation found starting from `start`, return false
  return false;
}

// 🔍 Time Complexity (Worst Case):
// In the worst case:

// For each index start, the function tries every possible end index (from start + 1 to word.length), generating a substring each time.

// At each recursive step, we make up to n recursive calls, where n = word.length.

// This leads to an exponential number of calls:
// T(n) = 2^n in the worst case.

// So, the time complexity is:

// ⏱ Time: O(2^n)
// Because the function explores all possible segmentations (essentially building a binary tree of choices at each index: break or don’t break here).

// .

// 💾 Space Complexity:
// Two components:

// Call stack: The recursion depth can go up to n (in the case of splitting one character at a time).

// So stack space is O(n).

// Substring creation: substring(start, end) creates a new string of length up to n for each call.

// However, JS engines often optimize this, so we generally don’t count it heavily in complexity unless explicitly stated.

// So, the space complexity is:

// 🧠 Space: O(n) due to the recursive call stack.

