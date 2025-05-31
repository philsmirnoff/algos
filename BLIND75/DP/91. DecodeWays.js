var numDecodings = function(s) {

    // Define a recursive DFS function that starts decoding from index `i`
    const dfs = (i) => {
        // Base case: if we’ve reached the end of the string, it’s a valid decoding
        if (i === s.length) return 1;

        // If the current character is '0', it's invalid as no letter maps to '0'
        if (s[i] === "0") return 0;

        // Option 1: decode one digit (e.g., "1" -> 'A'), move one step forward
        let res = dfs(i + 1);

        // Option 2: decode two digits if possible (e.g., "12" -> 'L')
        if (i < s.length - 1) {  // Ensure there is a next character
            // Check if the two-digit number is between 10 and 26
            if (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7")) {
                // If valid, add ways of decoding the rest starting two characters ahead
                res += dfs(i + 2);
            }
        }

        // Return total number of decodings from index `i`
        return res;
    }

    // Start DFS from index 0 (beginning of string)
    return dfs(0);
};


// memoization:
var numDecodings = function(s) {
    const memo = {}; // Cache to store results for each index

    const dfs = (i) => {
        // If we reach the end of the string, it's a valid decoding
        if (i === s.length) return 1;

        // If the character is '0', there's no valid decoding
        if (s[i] === "0") return 0;

        // Return cached result if already computed
        if (i in memo) return memo[i];

        // Decode 1 digit
        let res = dfs(i + 1);

        // Decode 2 digits if it's between 10 and 26
        if (i < s.length - 1) {
            if (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7")) {
                res += dfs(i + 2);
            }
        }

        memo[i] = res; // Cache the result before returning
        return res;
    };

    return dfs(0);
};


✅ Bottom-Up DP Version (O(n) Time, O(1) Space Optimized):
js
Copy
Edit
var numDecodings = function(s) {
    if (s[0] === '0') return 0; // Can't decode if it starts with 0

    let n = s.length;
    let oneAhead = 1;  // dp[i + 1]: ways to decode from the next index
    let twoAhead = 0;  // dp[i + 2]: ways to decode from two indices ahead

    // Start from the end of the string and move backwards
    for (let i = n - 1; i >= 0; i--) {
        let current = 0;

        if (s[i] !== '0') {
            // Always add the 1-digit decoding option
            current += oneAhead;

            // Check if 2-digit decoding is valid (10–26)
            if (
                i + 1 < n &&
                (s[i] === '1' || (s[i] === '2' && s[i + 1] >= '0' && s[i + 1] <= '6'))
            ) {
                current += twoAhead;
            }
        }

        // Shift the window: move one step back
        twoAhead = oneAhead;
        oneAhead = current;
    }

    return oneAhead;
};
