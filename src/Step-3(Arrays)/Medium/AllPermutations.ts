// 46. Permutations
// Medium
//
// Given an array nums of distinct integers, return all the possible
// permutations
// . You can return the answer in any order.
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
//
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
//
// Input: nums = [1]
// Output: [[1]]
//
// Constraints:
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

export {};

const numbers = [1, 2, 3];

//NOTE: recursion and backtracking

const permutationHelper = (
  inputArr: number[],
  idx: number,
  ansArr: number[][],
) => {
  if (idx === inputArr.length) {
    ansArr.push([...inputArr]);
    return;
  }

  for (let i = idx; i < inputArr.length; i++) {
    [inputArr[idx], inputArr[i]] = [inputArr[i], inputArr[idx]];
    permutationHelper(inputArr, idx + 1, ansArr);
    [inputArr[i], inputArr[idx]] = [inputArr[idx], inputArr[i]];
  }
};

const bruteForceSolution = (inputArr: number[]) => {
  const ansArr: number[][] = [];
  const idx = 0;
  permutationHelper(inputArr, idx, ansArr);
  return ansArr;
};

// console.log("bruteForceSolution ->", bruteForceSolution(numbers));

//NOTE: Recusrion with string slice

function generatePermutations(arr: number[]) {
  const results: number[][] = [];

  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    const remaining = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove current element

    const perms: number[][] = generatePermutations(remaining);

    for (const perm of perms) {
      results.push([current, ...perm]);
    }
  }
  return results;
}

// console.log(generatePermutations(numbers));

//BUG: generated permutations are not in order, logic is flawed for finding next permutation

const helper = (
  arr: number[],
  subsets: number[],
  i: number,
  ansArr: number[][],
) => {
  if (i === arr.length) {
    ansArr.push([...subsets]);
    return;
  }
};

const bruteForceSolutionTwo = (inputArr: number[]) => {
  const ansArr: number[][] = [];
  let idx = 0;
  let subsets: number[] = [];
  helper(inputArr, subsets, idx, ansArr);
  console.log(ansArr);
};

console.log("bruteForceSolutionTwo ->", bruteForceSolutionTwo([3, 1, 2]));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
