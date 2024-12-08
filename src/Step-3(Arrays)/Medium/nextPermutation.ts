// next_permutation : find next lexicographically greater permutation
//
// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
//
// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).
//
// Examples
// Example 1 :
//
// Input format:
//  Arr[] = {1,3,2}
// Output
// : Arr[] = {2,1,3}
// Explanation:
// All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.
// Example 2:
//
// Input format:
//  Arr[] = {3,2,1}
// Output:
// Arr[] = {1,2,3}
// Explanation:
// As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the topmost permutation.

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

console.log("bruteForceSolution ->", bruteForceSolution(numbers));

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

console.log(generatePermutations(numbers));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
