/*
Rotate array by K elements

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

Examples:

Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position.
*/

export {};
const solution = (arr: number[], k: number) => {
  console.log('input:', arr, k);
  rotateArray(arr, k % arr.length);
  console.log('output:', arr);
};

const rotateArray = (arr: number[], k: number) => {
  if (k === 0) return;

  const temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;

  rotateArray(arr, k - 1);
};

const arr = [1, 2, 3, 4, 5];
const k = 12;
solution(arr, k);
