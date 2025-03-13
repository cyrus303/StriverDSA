// 47. Permutations II
// Medium
//
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
//
// Example 1:
//
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
//
// Example 2:
//
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

export {};

const getpermutation = (inputArr: number[], i: number, ans: number[][]) => {
  if (i === inputArr.length) {
    ans.push([...inputArr]);
    return;
  }

  let seenEle = new Set();

  for (let idx = i; idx < inputArr.length; idx++) {
    if (seenEle.has(inputArr[idx])) {
      continue;
    }

    seenEle.add(inputArr[idx]);

    [inputArr[i], inputArr[idx]] = [inputArr[idx], inputArr[i]];
    getpermutation(inputArr, i + 1, ans);

    [inputArr[idx], inputArr[i]] = [inputArr[i], inputArr[idx]];
  }
};

function main() {
  const inputArr = [1, 1, 2, 2];
  let i = 0;

  const ans: number[][] = [];

  getpermutation(inputArr, i, ans);
  console.log(ans);
}

main();
