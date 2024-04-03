/*
Find the highest/lowest frequency element

Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Pre-requisite: Hashing Theory and  Counting frequencies of array elements

Examples:

Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

Example 2:

Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
*/

export {};

const solution = (arr: number[]) => {
  const hash: Record<string, number> = {};
  arr.map((ele) => {
    hash[ele] = (hash[ele] || 0) + 1;
  });

  console.log(hash);

  let minCount = Infinity;
  let maxCount = -Infinity;
  let minKey = null;
  let maxKey = null;

  for (const key in hash) {
    const value = hash[key];
    if (value < minCount) {
      minCount = value;
      minKey = key;
    }

    if (value > maxCount) {
      maxCount = value;
      maxKey = key;
    }
  }
  console.log('Min repeated value (key):', minKey);
  console.log('Max repeated value (key):', maxKey);
};

const arr = [2, 2, 3, 4, 4, 2];
solution(arr);
