// Check if there exists a subsequence with sum K
// Given an array nums and an integer k.
// Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.
//
// Examples:
//
// Input : nums = [1, 2, 3, 4, 5] , k = 8
// Output : Yes
// Explanation : The subsequences like [1, 2, 5] , [1, 3, 4] , [3, 5] sum up to 8.
//
// Input : nums = [4, 3, 9, 2] , k = 10
// Output : No
// Explanation : No subsequence can sum up to 10.

export {};

function main() {
  const inputArr = [1, 2, 3, 4, 5];
  const K = 8;
  let index = 0;
  let sum = 0;

  const checkSubsequence = (index: number, sum: number) => {
    if (index === inputArr.length) {
      if (sum === K) {
        return true;
      }
      return false;
    }

    sum += inputArr[index];
    if (checkSubsequence(index + 1, sum) === true) {
      return true;
    }

    sum -= inputArr[index];
    if (checkSubsequence(index + 1, sum) === true) {
      return true;
    }

    return false;
  };

  console.log(checkSubsequence(index, sum));
}

main();
