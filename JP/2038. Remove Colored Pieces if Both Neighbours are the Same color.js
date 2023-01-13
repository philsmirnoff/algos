// There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.

// Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

// Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
// Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
// Alice and Bob cannot remove pieces from the edge of the line.
// If a player cannot make a move on their turn, that player loses and the other player wins.
// Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.



// Example 1:

// Input: colors = "AAABABB"
// Output: true
// Explanation:
// AAABABB -> AABABB
// Alice moves first.
// She removes the second 'A' from the left since that is the only 'A' whose neighbors are both 'A'.

// Now it's Bob's turn.
// Bob cannot make a move on his turn since there are no 'B's whose neighbors are both 'B'.
// Thus, Alice wins, so return true.
// Example 2:

// Input: colors = "AA"
// Output: false
// Explanation:
// Alice has her turn first.
// There are only two 'A's and both are on the edge of the line, so she cannot move on her turn.
// Thus, Bob wins, so return false.
// Example 3:

// Input: colors = "ABBBBBBBAAA"
// Output: false
// Explanation:
// ABBBBBBBAAA -> ABBBBBBBAA
// Alice moves first.
// Her only option is to remove the second to last 'A' from the right.

// ABBBBBBBAA -> ABBBBBBAA
// Next is Bob's turn.
// He has many options for which 'B' piece to remove. He can pick any.

// On Alice's second turn, she has no more pieces that she can remove.
// Thus, Bob wins, so return false.

var winnerOfGame = function(colors) {
  let a = 0;
 let b = 0;

 for (let i = 1; i < colors.length - 1; i++) {
   if (colors[i - 1] === colors[i] && colors[i + 1] === colors[i]) {
     colors[i] === "A" ? a++ : b++;
   }
 }

 return a > b;
};
// The time complexity of this function winnerOfGame is O(n) and the space complexity is O(1).

// The function iterates through the colors array once, using a for loop. Inside the loop, it checks the current element, the previous element, and the next element to determine if it's a valid move for Alice or Bob. If it's a valid move, it increments the count of pieces removed by Alice or Bob. The time complexity of this loop is O(n) because it iterates through all the elements of the array once.

// The function doesn't create any additional data structures, it only uses a couple of variables (a, b) to keep track of the number of pieces removed by Alice and Bob. So the space complexity is O(1)

// It's worth noting that the function assumes that the players are playing optimally, if they are not playing optimally the function may return different results.
