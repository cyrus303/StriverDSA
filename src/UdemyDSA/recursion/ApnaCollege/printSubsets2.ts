// 90. Subsets II
// Medium
//
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
//
// The solution set must not contain duplicate subsets. Return the solution in any order.
//
// Example 1:
//
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
//
// Example 2:
//
// Input: nums = [0]
// Output: [[],[0]]

export {};

const getAllSubsets = (
  arr: number[],
  subSets: number[],
  i: number,
  ans: number[][],
) => {
  if (i === arr.length) {
    ans.push([...subSets]);
    return;
  }

  subSets.push(arr[i]);
  getAllSubsets(arr, subSets, i + 1, ans);

  subSets.pop();
  let nextEleIdx = i + 1;
  while (nextEleIdx < arr.length && arr[i] === arr[nextEleIdx]) {
    nextEleIdx++;
  }
  getAllSubsets(arr, subSets, nextEleIdx, ans);
};

function main() {
  const arr = [1, 2, 2, 1];
  const subSets: number[] = [];
  let i = 0;

  const ans: number[][] = [];
  arr.sort((a, b) => a - b);

  getAllSubsets(arr, subSets, i, ans);
  console.log(ans);
}

main();
