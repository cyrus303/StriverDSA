/*
Reverse a given Array

Problem Statement: You are given an array. The task is to reverse the array and print it.

Examples:

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
*/

export {};

const solution = (n: number[]) => {
  let i = 0;
  let j = n.length - 1;
  while (i < j) {
    let temp = n[i];
    n[i] = n[j];
    n[j] = temp;
    i++;
    j--;
  }
  console.log(n);
};

const arr = [5, 4, 3, 2, 1];
// solution(arr);

const solution2 = (n: number[]): void => {
  let start = 0;
  let end = n.length - 1;
  reverseArray(n, start, end);
  console.log(n);
};

const reverseArray = (
  arr: number[],
  start: number,
  end: number
): void => {
  if (start > end) return;
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  reverseArray(arr, start + 1, end - 1);
};

const arr2 = [7, 6, 5, 4, 3, 2, 1, 0];
solution2(arr2);
