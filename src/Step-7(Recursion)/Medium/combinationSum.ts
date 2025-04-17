// 39. Combination Sum
// Medium
// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
//
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
//
// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
//
// Example 1:
//
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
//
// Example 2:
//
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
//
// Example 3:
//
// Input: candidates = [2], target = 1
// Output: []

export {};

const set = new Set();

const combinationSum = (
  inputArr: number[],
  index: number,
  comb: number[],
  ans: number[][],
  target: number,
) => {
  if (index === inputArr.length || target < 0) {
    return;
  }
  if (target === 0) {
    const key = JSON.stringify(comb);
    if (!set.has(key)) {
      ans.push([...comb]);
      set.add(key);
    }
    return;
  }

  comb.push(inputArr[index]);
  combinationSum(inputArr, index + 1, comb, ans, target - inputArr[index]);
  combinationSum(inputArr, index, comb, ans, target - inputArr[index]);

  comb.pop();
  combinationSum(inputArr, index + 1, comb, ans, target);
};

function main() {
  const inputArr = [2, 3, 6, 7];
  const target = 7;

  const ans: number[][] = [];
  const comb: number[] = [];
  const index = 0;

  combinationSum(inputArr, index, comb, ans, target);
  console.log(ans);
}

main();
