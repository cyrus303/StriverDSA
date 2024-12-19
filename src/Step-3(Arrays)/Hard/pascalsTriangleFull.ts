// 118. Pascal's Triangle
// Easy
//
// Given an integer numRows, return the first numRows of Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//
// Example 1:
//
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//
// Example 2:
//
// Input: numRows = 1
// Output: [[1]]

export {};

//NOTE: Neetcode solution

const optimisedSolutionOne = (numRows: number) => {
  const result = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const temp = [0, ...result.at(-1)!, 0];
    const row = [];
    for (let j = 0; j < result.at(-1)!.length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }
  return result;
};

console.log(optimisedSolutionOne(6));

//NOTE: Neetcode solution

const pascalTriangle = (numRows: number) => {
  const result = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const temp = [0, ...result.at(-1)!, 0];
    const row = [];

    for (let j = 0; j < temp.length - 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }
  return result;
};

console.log(pascalTriangle(5));

const generatRowElements = (numRows: number) => {
  let rowElements = [1];
  let ans = 1;

  for (let i = 1; i < numRows; i++) {
    ans = ans * (numRows - i);
    ans = ans / i;
    rowElements.push(ans);
  }
  return rowElements;
};

const optimalSolution = (row: number) => {
  const result = [];
  for (let i = 1; i <= row; i++) {
    const rowElements = generatRowElements(i);
    result.push(rowElements);
  }
  return result;
};

console.log(optimalSolution(5));

const nCr = (row: number, col: number) => {
  let result = 1;
  for (let i = 0; i < col; i++) {
    result = result * (row - i);
    result = result / (i + 1);
  }
  return result;
};

const bruteForceSolution = (numRows: number) => {
  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let rowElements = [1];
    for (let j = 1; j <= i; j++) {
      let element = nCr(i, j);
      rowElements.push(element);
    }
    triangle.push(rowElements);
  }
  return triangle;
};

console.log(bruteForceSolution(5));

const optimisedSolution = (numRows: number) => {};

console.log(optimisedSolution(5));
