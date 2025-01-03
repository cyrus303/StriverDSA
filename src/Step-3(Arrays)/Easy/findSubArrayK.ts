// Indexes of Subarray Sum
//
// Difficulty: Medium
//
// Given an unsorted array arr containing only non-negative integers,
// your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target.
// You need to return the 1-based indices of the leftmost and rightmost elements of this subarray.
//
// Examples:
//
// Input: arr[] = [1,2,3,7,5], target = 12
// Output: [2, 4]
// Explanation: The sum of elements from 2nd to 4th position is 12.
// Input: arr[] = [1,2,3,4,5,6,7,8,9,10], target = 15,
// Output: [1, 5]
// Explanation: The sum of elements from 1st to 5th position is 15.
// Input: arr[] = [7,2,1], target = 2
// Output: [2, 2]
// Explanation: The sum of elements from 2nd to 2nd position is 2.
// Input: arr[] = [5,3,4], target = 2
// Output: [-1]
// Explanation: There is no subarray with sum 2.
export {};
const numbers = [1, 2, 3, 7, 5];
const target = 12;

const optimalSolution = (arr: number[], target: number) => {
  let curSum = 0;
  let start = 0;
  let end = -1;
  let HASHMAP = new Map();

  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];

    if (curSum - target === 0) {
      start = 0;
      end = i + 1;
      break;
    }

    if (HASHMAP.has(curSum - target)) {
      start = HASHMAP.get(curSum - target) + 1;
      end = i;
      break;
    }
    HASHMAP.set(curSum, i);
  }

  if (end === -1) {
    return "not found";
  } else {
    return { start, end };
  }
};

console.log(optimalSolution(numbers, target));
