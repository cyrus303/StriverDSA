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

const optimisedSolution = (numRows: number) => {
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

// console.log(optimisedSolution(6));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));

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
