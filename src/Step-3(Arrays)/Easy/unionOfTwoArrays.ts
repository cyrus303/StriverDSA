// Union of Two Sorted Arrays
//
// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
//
// The union of two arrays can be defined as the common and distinct elements in the two arrays.
// NOTE: Elements in the union should be in ascending order.
//
// Examples
// Example 1:
// Input:
//
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}
// arr2[] = {2,3,4,4,5}
// Output:
//
//  {1,2,3,4,5}
//
// Explanation:
//
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5}
//
// Example 2:
// Input:
//
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output:
//  {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation:
//
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}

export {};

const n = 10;
const m = 7;
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

type Props = {
  n: number;
  m: number;
  arr1: number[];
  arr2: number[];
};
const bruteForceSolution = ({ n, m, arr1, arr2 }: Props) => {
  const uniqueArr = [...arr1, ...arr2];
  console.log(new Set(uniqueArr));
};

console.log(bruteForceSolution({ n, m, arr1, arr2 }));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
