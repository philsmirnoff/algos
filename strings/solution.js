// You are given an implementation of a function:
// function solution(A, K);
// This function, given a non empty array A of N integeres(sorted in non-decreasing order) and integer K, checks whether A contains numbers 1, 2, 3, ..., K(every number from 1 to K at least once) and no other numbers.
// For expmple, given the following array A, and K = 3:
// A[0] = 1
// A[1] = 1
// A[2] = 2
// A[3] = 3
// A[4] = 3
// the function should return true

// Solution:
// function solution(A, K) {
//     let set = new Set();
//     for (let i = 0; i < A.length; i++) {
//         set.add(A[i]);
//     }
//     for (let i = 1; i <= K; i++) {
//         if (!set.has(i)) {
//             return false;
//         }
//     }
//     return true;
// }
//
// Time complexity: O(n)
// Space complexity: O(n)
// Correct solution:
// function solution(A, K) {
  // var n = A.length;
  // var i = 0;
  // while (i < n && A[i] <= K) {
    // if (A[i] == K) {
      // K--;
    // }
    // i++;
  // }
  // return K == 0;
// }

// Correct solution:
function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    if (A[i] == K) {
      K--;
    }

    if (K == 0) {
      return true;
    } else if (A[i] > K) {
      return false;
    }

  }
