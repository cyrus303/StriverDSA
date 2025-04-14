// Count all subsequences with sum K
//
// Given an array nums and an integer k.
// Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.
//
//
// Examples:
// Input : nums = [4, 9, 2, 5, 1] , k = 10
//
// Output : 2
//
// Explanation : The possible subsets with sum k are [9, 1] , [4, 5, 1].
//
// Input : nums = [4, 2, 10, 5, 1, 3] , k = 5
//
// Output : 3
//
// Explanation : The possible subsets with sum k are [4, 1] , [2, 3] , [5].

export {};

const generateSubsequence = (
  arr: number[],
  K: number,
  ans: number[],
  sum: number,
  index: number,
) => {
  if (index === arr.length) {
    if (sum === K) {
      console.log([...ans]);
    }
    return;
  }

  ans.push(arr[index]);
  sum += arr[index];
  generateSubsequence(arr, K, ans, sum, index + 1);

  sum -= arr[index];
  ans.pop();
  generateSubsequence(arr, K, ans, sum, index + 1);
};

function main(inputArr: number[], K: number) {
  const ans: number[] = [];
  let sum = 0;
  let index = 0;
  generateSubsequence(inputArr, K, ans, sum, index);
}

const inputArr = [4, 9, 2, 5, 1];
const K = 6;
main(inputArr, K);
