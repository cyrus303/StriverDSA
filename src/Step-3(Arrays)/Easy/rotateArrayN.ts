// Rotate array by K elements
//
// Rotate array by K elements
//
// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
//
// Examples:
//
// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .
//
// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

export {};

type Props = {
  arr: number[];
  K: number;
  N: number;
};
const numbers = [1, 2, 3, 4, 5, 6, 7];

const bruteForceSolution = ({ arr, K, N }: Props) => {
  console.log("Input Array ->", arr);
  console.log("K ->", K);
  console.log("N ->", N);

  const popArray = [];

  let i = 0;
  let modK = K % N;

  while (i < modK) {
    popArray[i] = arr.shift();
    i++;
  }

  for (let i = modK - 1; i >= 0; i--) {
    arr.push(popArray[i]);
  }
  console.log(arr);
};

bruteForceSolution({ arr: numbers, K: 8, N: 7 });
// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
