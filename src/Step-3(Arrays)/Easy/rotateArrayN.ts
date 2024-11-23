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
    arr.push(popArray[i] as number);
  }
  console.log(arr);
};

// bruteForceSolution({ arr: numbers, K: 8, N: 7 });

const optimisedSolution = ({ arr, K, N }: Props): void => {
  K = K % N;
  console.log(`Input Values -> ${arr}, K -> ${K}, N -> ${N}`);

  if (K === 0) {
    console.log(`Final Result -> ${arr}`);
    return;
  }

  let temp = arr[0];

  for (let i = 0; i < N - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[N - 1] = temp;

  optimisedSolution({ arr, K: K - 1, N });
};

const array2 = [3, 7, 8, 9, 10, 11, 13];
optimisedSolution({ arr: array2, K: 7, N: array2.length });

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
