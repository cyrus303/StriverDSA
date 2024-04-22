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

const arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
const K = 6;

const solution = (arr: number[], K: number) => {
  let longest = -1;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j <= arr.length; j++) {
      sum = sum + arr[j];
      if (sum === K) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }
  console.log(longest);
};

// const arr = [2, 3, 5, 1, 9];
// const K = 10;

solution(arr, K);

//only if the input array elemets are >= 0
const betterSolution = (arr: number[], K: number) => {
  let left = 0;
  let right = 0;
  let sum = arr[0];
  let maxLen = 0;
  const n = arr.length;

  while (right < n) {
    right++;
    if (right < n) sum = sum + arr[right];

    if (sum === K) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    while (left <= right && sum > K) {
      sum = sum - arr[left];
      left++;
    }
  }
  console.log(maxLen);
};

betterSolution(arr, K);
