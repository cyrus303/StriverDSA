// print all subsequences with sum K
//
// Given an array nums and an integer k.
// print the elements of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.
//
//
// Examples:
// Input : nums = [4, 9, 2, 5, 1] , k = 10
//
// Output : [4,5,1], [9,1]

export {};

const printSubsequence = (
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
  printSubsequence(arr, K, ans, sum, index + 1);

  sum -= arr[index];
  ans.pop();
  printSubsequence(arr, K, ans, sum, index + 1);
};

function main(inputArr: number[], K: number) {
  const ans: number[] = [];
  let sum = 0;
  let index = 0;
  printSubsequence(inputArr, K, ans, sum, index);
}

const inputArr = [4, 9, 2, 5, 1];
const K = 10;
main(inputArr, K);
