// Spiral Traversal of Matrix
//
// Problem Statement: Given a Matrix, print the given matrix in spiral order.
//
// Examples:
//
// Example 1:
// Input: Matrix[][] = {
//                       { 1, 2, 3, 4 },
// 		                   { 5, 6, 7, 8 },
// 		                   { 9, 10, 11, 12 },
// 	                     { 13, 14, 15, 16 }
// 	                   }
//
// Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
// Explanation: The output of matrix in spiral form.
//
// Example 2:
// Input: Matrix[][] = {
//                       { 1, 2, 3 },
// 	                     { 4, 5, 6 },
// 		                   { 7, 8, 9 }
// 		                 }
//
// Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
// Explanation: The output of matrix in spiral form.

export {};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const bruteForceSolution = (matrix: number[][]) => {
  const ans = [];
  let n = matrix.length;
  let m = matrix[0].length;

  let top = 0;
  let left = 0;
  let bottom = n - 1;
  let right = m - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
};

console.log(bruteForceSolution(matrix));

const optimisedSolution = (mat: number[][]) => {
  const ans = [];

  let n = mat.length;
  let m = mat[0].length;

  let rowBegin = 0;
  let rowEnd = n - 1;

  let colBegin = 0;
  let colEnd = m - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      ans.push(mat[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      ans.push(mat[i][colEnd]);
    }
    colEnd--;

    if (colBegin <= colEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        ans.push(mat[rowEnd][i]);
      }
      rowEnd--;
    }

    if (rowBegin <= rowEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        ans.push(mat[i][colBegin]);
      }
      colBegin++;
    }
  }
  return ans;
};

console.log(optimisedSolution(matrix));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
