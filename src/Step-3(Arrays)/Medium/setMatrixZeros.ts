// Set Matrix Zero
//
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0
// and then return the matrix.
//
// Examples
// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]
//
// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]
//
// Explanation:
//  Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
//
// Input:
//  matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
//
// Output:
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
//
// Explanation:
// Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

export {};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

//BUG: works only if one zero is present in the matrix

const bruteForceSolution = (matrix: number[][]) => {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstIndex = -1;
  let secondIndex = -1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        firstIndex = i;
        secondIndex = j;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === firstIndex || j === secondIndex) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// console.log(bruteForceSolution(matrix));

const optimisedSolution = (matrix: number[][]) => {
  console.log("matrix ->", matrix);
  const n = matrix.length;
  const m = matrix[0].length;

  const result = zeroMatrix(matrix, n, m);

  return result;
};

const zeroMatrix = (matrix: number[][], n: number, m: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, m, i);
        markCol(matrix, n, j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

const markRow = (matrix: number[][], m: number, i: number) => {
  for (let j = 0; j < m; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
};

const markCol = (matrix: number[][], n: number, j: number) => {
  for (let i = 0; i < n; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
};

// console.log(optimisedSolution(matrix));

const optimalSolution = (matrix: number[][]) => {
  let firstRow = false;
  let firstCol = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRow = true;
        if (j === 0) firstCol = true;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(optimalSolution(matrix));
