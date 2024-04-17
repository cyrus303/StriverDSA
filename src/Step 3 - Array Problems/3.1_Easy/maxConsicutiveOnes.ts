/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3

Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:
1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

export {};

const solution = (arr: number[]) => {
  console.log(arr);
  let i = 0;
  let j = 0;
  let count = 0;
  let consicutiveOnes = 0;

  while (j <= arr.length) {
    if (arr[j] === 1) {
      j++;
      count = count + 1;
    } else {
      j++;
      i = j;
      consicutiveOnes = Math.max(consicutiveOnes, count);
      count = 0;
    }
  }
  console.log(consicutiveOnes);
};

const arr = [1, 1, 0, 1, 1, 1];

solution(arr);

const solution2 = (nums: number[]) => {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }

  console.log(Math.max(count, max));
};

solution2(arr);
