// Pascal Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

function generate(numRows) {
  if (numRows <= 0) {
      return [];
  }

  let pascalTriangle = [[1]];

  for (let i = 1; i < numRows; i++) {
      let row = [1];
      for (let j = 1; j < i; j++) {
          row.push(pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j]);
      }
      row.push(1);
      pascalTriangle.push(row);
  }

  return pascalTriangle;
}

// The solution uses a nested loop to generate the Pascal's triangle up to the given number of rows. We first create the base case, which is a single row with a single element of value 1. We then use a loop to generate the rest of the rows, by computing the values of each element in a given row based on the values of the two elements directly above it. We start with the second row and push it to the triangle array. We continue adding each subsequent row to the triangle array until we have generated the desired number of rows.

// The time complexity of this solution is O(numRows^2), since we compute each element in the triangle exactly once.

// The space complexity of this solution is O(numRows^2), as we store all elements of the triangle in the output array.
