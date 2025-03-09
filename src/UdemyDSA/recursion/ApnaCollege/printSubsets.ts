// 78. Subsets
// Medium
//
// Given an integer array nums of unique elements, return all possible subsets (the power set).
//
// The solution set must not contain duplicate subsets. Return the solution in any order.
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//
// Example 2:
//
// Input: nums = [0]
// Output: [[],[0]]

export {};

const getAllSubsets = (
  arr: number[],
  ans: number[],
  i: number,
  allSubsets: number[][],
) => {
  //baseCase
  if (i === arr.length) {
    allSubsets.push([...ans]);
    return;
  }
  //include
  ans.push(arr[i]);
  getAllSubsets(arr, ans, i + 1, allSubsets);

  //exclude
  ans.pop();
  getAllSubsets(arr, ans, i + 1, allSubsets);
};

function main() {
  const allSubsets: number[][] = [];
  const arr = [1, 2, 3];
  const ans: number[] = [];
  let i = 0;

  getAllSubsets(arr, ans, i, allSubsets);
  console.log(allSubsets);
}

main();
