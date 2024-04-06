/*
Find the Largest element in an array

Problem Statement: Given an array, we have to find the largest element in the array.

Examples
Example 1:
Input:
  arr[] = {2,5,1,3,0};
Output:
  5
Explanation:
  5 is the largest element in the array.

Example2:
Input:
  arr[] = {8,10,5,7,9};
Output:
  10
Explanation:
  10 is the largest element in the array.
*/

export {};

const solution = (arr: number[]) => {
  let largest: number = -Infinity;
  arr.forEach((element) => {
    if (element > largest) {
      largest = element;
    }
  });
  console.log(largest);
};

const arr = [-5, -7, -1, -8, -3];
solution(arr);

const recursiveSolution = (
  arr: number[],
  index: number = 0,
  largest: number = arr[0]
): number => {
  if (index >= arr.length) {
    return largest;
  }
  if (arr[index] > largest) {
    largest = arr[index];
  }
  return recursiveSolution(arr, index + 1, largest);
};

const largest = recursiveSolution(arr);
console.log(largest);
