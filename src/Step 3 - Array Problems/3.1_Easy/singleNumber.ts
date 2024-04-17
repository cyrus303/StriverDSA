/*
Find the number that appears once, and the other numbers twice

Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

Examples

Example 1:
Input Format:
 arr[] = {2,2,1}
Result:
 1
Explanation:
 In this array, only the element 1 appear once and so it is the answer.

Example 2:
Input Format:
 arr[] = {4,1,2,1,2}
Result:
 4
Explanation:
 In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.
*/

export {};

const solution = (arr: number[]) => {
  console.log(arr);
  const HASH: Record<string, number> = {};

  arr.map((ele) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });

  const value = Object.keys(HASH).find((key) => HASH[key] === 1);
  console.log(value);
};

const arr = [2, 1, 2];

solution(arr);

const solution2 = (nums: number[]) => {
  let singleNum = 0;
  for (let i = 0; i < nums.length; i++) {
    singleNum ^= nums[i];
  }

  console.log(singleNum);
};

solution2(arr);
