// Program to generate Pascal's Triangle
//
// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

export {};

const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const bruteForce = (row: number, col: number) => {
  if (col > row) {
    console.log("Invalid position. Column cannot be greater than row.");
    return;
  }
  row = row - 1;
  col = col - 1;
  const rowFact = factorial(row);
  const colFact = factorial(col);
  const remainingFact = factorial(row - col);

  const result = rowFact / (colFact * remainingFact);
  console.log(result);
};

// bruteForce(8, 3);

const nCr = (n: number, r: number) => {
  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }
  return result;
};

const optimisedSolution = (row: number, col: number) => {
  const element = nCr(row - 1, col - 1);
  return element;
};

console.log(optimisedSolution(7, 3));
