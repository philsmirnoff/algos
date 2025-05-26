function lengthOfLIS_DP(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1);  // every element is an LIS of length 1 by itself
  let best = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // extend subsequence ending at j
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    best = Math.max(best, dp[i]);
  }

  return best;
}


Below is a deep dive into the O(n²) DP solution—what each part does, why it works, and a concrete walkthrough on an example.

js
Copy
Edit
function lengthOfLIS_DP(nums) {
  const n = nums.length;
  // dp[i] = length of the longest strictly increasing subsequence ending at index i
  const dp = new Array(n).fill(1);
  // best = the maximum dp[i] we've seen so far
  let best = 1;

  // Build up dp[] one index at a time
  for (let i = 0; i < n; i++) {
    // Look at every j before i: can we append nums[i] after nums[j]?
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // If so, extending the subsequence ending at j gives length dp[j]+1
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // Track the overall maximum
    best = Math.max(best, dp[i]);
  }

  return best;
}
1. Why it works
Subproblem definition

We ask: “What’s the LIS ending exactly at index i?”

That’s dp[i].

Transition

To end at i, you must come from some earlier j < i with nums[j] < nums[i].

If you pick the best such j, you get dp[i] = max(dp[j]) + 1.

Initialization

Every single element by itself is an increasing subsequence of length 1, so dp[...] starts filled with 1.

Answer extraction

The overall LIS may end at any i, so we keep best = max(dp[i]) as we go.

2. Step-by-step on [10,9,2,5,3,7,101,18]
i	nums[i]	dp before j‐loop	j checks	dp[i] after	best
0	10
1
,
…
1,…	— (no j < 0)	1	1
1	9
1
,
1
,
…
1,1,…	j=0: 10<9? No	1	1
2	2
1
,
1
,
1
,
…
1,1,1,…	j=0:10<2?No, j=1:9<2?No	1	1
3	5
1
,
1
,
1
,
1
,
…
1,1,1,1,…	j=0:10<5?No; j=1:9<5?No; j=2:2<5?Yes → dp[3]=dp[2]+1=2	2	2
4	3
1
,
1
,
1
,
2
,
1
,
…
1,1,1,2,1,…	j=0:10<3?No; j=1:9<3?No; j=2:2<3?Yes→2; j=3:5<3?No	2	2
5	7
1
,
1
,
1
,
2
,
2
,
1
,
…
1,1,1,2,2,1,…	j=0:10<7?No; j=1:9<7?No; j=2:2<7?Yes→2; j=3:5<7?Yes→3; j=4:3<7?Yes→3	3	3
6	101
1
,
1
,
1
,
2
,
2
,
3
,
1
,
…
1,1,1,2,2,3,1,…	… check j=0…5, the best is from j=5: 7<101 → dp[6]=dp[5]+1=4	4	4
7	18
1
,
1
,
1
,
2
,
2
,
3
,
4
,
1
1,1,1,2,2,3,4,1	best extension is again from j=5: 7<18 → dp[7]=4	4	4

Final dp = [1,1,1,2,2,3,4,4], so the answer is 4.

3. Complexity
Time:
Two nested loops over n (outer i, inner j) → O(n²).

Space:
The dp array of size n → O(n).

This DP is intuitive to code and easy to reason about. For n up to 2,500 it typically runs comfortably, but if you need faster (e.g. n ~ 10⁵), you’d switch to the O(n log n) “tails” method.
