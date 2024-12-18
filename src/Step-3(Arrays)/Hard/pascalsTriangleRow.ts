// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.
//
// In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:

export {};

const nCr = (n: number, r: number) => {
  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }
  return result;
};

const bruteForceSolution = (row: number) => {
  const rowElements = [];

  for (let i = 0; i < row; i++) {
    const element = nCr(row - 1, i);
    rowElements.push(element);
  }

  return rowElements;
};

const row = 5;
console.log(bruteForceSolution(row));

const optimisedSolution = (row: number) => {
  const rowElements = [1];
  let ans = 1;

  for (let i = 1; i < row; i++) {
    ans = ans * (row - i);
    ans = ans / i;

    rowElements.push(ans);
  }

  return rowElements;
};

console.log(optimisedSolution(row));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
