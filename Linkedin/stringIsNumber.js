// Given a string, check whether it represents a valid number.

// A valid number:

// May have optional leading or trailing spaces.

// Can have an optional sign (+ or -).

// May contain a decimal point.

// Can be in scientific notation (e.g., 1e10, -3.5E-2).

// Should not have invalid characters like letters or multiple dots.

// Examples

// "123" → true
// "  0.5  " → true
// "-90e3" → true
// "1e" → false
// "e3" → false
// "6e-1" → true
// "99e2.5" → false
// "abc" → false
// "1a" → false

function isNumber(s) {
  // 1️⃣ Remove leading/trailing spaces
  s = s.trim();
  if (s === "") return false; // Empty string is invalid

  // 2️⃣ State variables to track what we've seen
  let seenDigit = false; // Have we seen any digits yet?
  let seenDot = false; // Have we seen a decimal point?
  let seenE = false; // Have we seen an exponent 'e' or 'E'?

  // 3️⃣ Iterate through each character
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= "0" && ch <= "9") {
      // Digits are always fine
      seenDigit = true;
    } else if (ch === ".") {
      // A dot can't appear twice or after an exponent
      if (seenDot || seenE) return false;
      seenDot = true;
    } else if (ch === "e" || ch === "E") {
      // 'e' cannot appear twice and must come after a digit
      if (seenE || !seenDigit) return false;
      seenE = true;
      seenDigit = false; // reset — must have digits after 'e'
    } else if (ch === "+" || ch === "-") {
      // '+' or '-' can only appear at:
      // - the beginning
      // - immediately after 'e' or 'E'
      if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") return false;
    } else {
      // Any other character is invalid
      return false;
    }
  }

  // At the end, we must have seen at least one digit
  return seenDigit;
}
