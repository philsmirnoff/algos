// Spiral Matrix


// Given an m x n matrix, return all elements of the matrix in spiral order.



// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(matrix) {
  if (!matrix || !matrix.length) return [];

  let result = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (result.length < rows * cols) {
    // traverse right
    for (let col = left; col <= right && result.length < rows * cols; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // traverse down
    for (let row = top; row <= bottom && result.length < rows * cols; row++) {
      result.push(matrix[row][right]);
    }
    right--;


  // traverse left
  for (let col = right; col >= left && result.length < rows * cols; col--) {
    result.push(matrix[bottom][col]);
  }
  bottom--;

  // traverse up
  for (let row = bottom; row >= top && result.length < rows * cols; row--) {
    result.push(matrix[row][left]);
  }
  left++;
}
return result;

}
