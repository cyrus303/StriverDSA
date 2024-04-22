/*
Longest Subarray with given Sum K(Positives)

Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Examples
Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
Result: 3
Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.
*/

export {};

const solution = (arr: number[], N: number) => {
  let longest = -1;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j <= arr.length; j++) {
      sum = sum + arr[j];
      if (sum === N) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }
  console.log(longest);
};

const arr = [2, 3, 5, 1, 9];
const N = 10;

solution(arr, N);
