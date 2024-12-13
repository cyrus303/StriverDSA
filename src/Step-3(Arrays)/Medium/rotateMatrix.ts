// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.
//
// Example 1:
//
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
//
// Example 2:
//
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

export {};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const bruteForceSolution = (matrix: number[][]) => {
  const rotatedMatrix = [];

  for (let j = 0; j < matrix[0].length; j++) {
    let row = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      row.push(matrix[i][j]);
    }
    rotatedMatrix.push(row);
  }
  return rotatedMatrix;
};

console.log(bruteForceSolution(matrix));

const optimisedSolution = (matrix: number[][]) => {
  const n = matrix.length;

  const rotatedMatrix = new Array(3);
  for (let i = 0; i < n; i++) {
    rotatedMatrix[i] = new Array(3).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  return rotatedMatrix;
};

// console.log(optimisedSolution(matrix));

//NOTE: swap the values ie, [i][j] with [j][i] and reverse the rows

const swapMatrixElements = (matrix: number[][], i: number, j: number) => {
  let temp = matrix[i][j];
  matrix[i][j] = matrix[j][i];
  matrix[j][i] = temp;
};

const optimalSolution = (matrix: number[][]) => {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swapMatrixElements(matrix, i, j);
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
};

console.log(optimalSolution(matrix));
