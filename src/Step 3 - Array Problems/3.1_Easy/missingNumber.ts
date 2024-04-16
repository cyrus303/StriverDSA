/*
Find the missing number in an array

Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

Examples
Example 1:
Input Format:
 N = 5, array[] = {1,2,4,5}
Result:
 3
Explanation:
In the given array, number 3 is missing. So, 3 is the answer.

Example 2:
Input Format:
 N = 3, array[] = {1,3}
Result:
 2
Explanation:
In the given array, number 2 is missing. So, 2 is the answer.

*/

export {};

const solution = (arr: number[], N: number) => {
  let newArr = new Array(N).fill('$');
  for (const value of arr) {
    newArr[value] = value;
  }

  const index = newArr.slice(1).indexOf('$');
  return index + 1;
};

const arr = [1, 3];
const N = 3;

const result = solution(arr, N);
console.log(result);

const OptimalSolution = (arr: number[], N: number) => {
  const summation = (N * (N + 1)) / 2;

  // Summation of all array elements:
  let s2 = 0;
  for (let i = 0; i < N - 1; i++) {
    s2 += arr[i];
  }

  const missingNum = summation - s2;
  return missingNum;
};

const result2 = OptimalSolution(arr, N);
console.log(result2);
