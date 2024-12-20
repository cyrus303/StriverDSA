// 3 Sum : Find triplets that add up to a zero
//
// Problem Statement: Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero.
// In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

// Example 1:
// Input:
//  nums = [-1,0,1,2,-1,-4]
//
// Output:
//  [[-1,-1,2],[-1,0,1]]
//
// Explanation:
//  Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k
//
// Example 2:
// Input:
//  nums=[-1,0,1,0]
// Output:
//  Output: [[-1,0,1],[-1,1,0]]
// Explanation:
//  Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition of summing up to zero with i!=j!=k

export {};

const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;

const bruteForceSolution = (arr: number[], target: number) => {
  const triplets = new Set<string>();
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          if (i !== j && j !== k && k !== i) {
            triplets.add(JSON.stringify([arr[i], arr[j], arr[k]]));
          }
        }
      }
    }
  }
  return Array.from(triplets).map((triplet) => JSON.parse(triplet));
};

console.log(bruteForceSolution(nums, target));

const optimisedSolution = (arr: number[]) => {
  if (arr.length < 3 || !Array.isArray(arr)) {
    return [];
  }
  arr.sort((a, b) => a - b);
  const result = new Set<string>();

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.add(JSON.stringify([arr[i], arr[left], arr[right]]));
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return Array.from(result).map((item) => JSON.parse(item));
};

console.log(optimisedSolution(nums));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
