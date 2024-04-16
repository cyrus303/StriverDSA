/*
Move all Zeros to the end of the array

In this article we will learn how to solve the most asked coding interview problem: "Move all Zeros to the end of the array"

Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

Example 1:
Input:
 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output:
 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation:
 All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

Example 2:
Input:
 1,2,0,1,0,4,0
Output:
 1,2,1,4,0,0,0
Explanation:
 All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
*/

export {};
const solution = (arr: number[]) => {
  console.log('input:', arr);
  if (arr.length === 0) return;

  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr.length) {
    if (arr[i] > 0 || arr[i] === 0) {
      i++;
    }
    if (arr[j] !== 0) {
      j++;
    }
    if (arr[i] > 0 && arr[j] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  console.log(arr);
};

const arr: number[] = [
  73348, 66106, 85359, 53996, 18849, 0, 6590, 53381, 86613, 41065,
  83457, 0,
];

solution(arr);
