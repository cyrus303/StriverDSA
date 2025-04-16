// Count all subsequences with sum K
// Given an array nums and an integer k.
// Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.
//
// Examples:
//
// Input : nums = [4, 9, 2, 5, 1] , k = 10
//
// Output : 2
// Explanation : The possible subsets with sum k are [9, 1] , [4, 5, 1].
//
// Input : nums = [4, 2, 10, 5, 1, 3] , k = 5
//
// Output : 3
// Explanation : The possible subsets with sum k are [4, 1] , [2, 3] , [5].

export {};

function main() {
  const inputArr = [4, 9, 2, 5, 1];
  const K = 10;
  const index = 0;
  const sum = 0;

  const countSubsequence = (index: number, sum: number) => {
    if (index === inputArr.length) {
      if (sum === K) {
        return 1;
      }
      return 0;
    }

    sum += inputArr[index];
    const pickCount: number = countSubsequence(index + 1, sum);

    sum -= inputArr[index];
    const notPickCount: number = countSubsequence(index + 1, sum);

    return pickCount + notPickCount;
  };

  console.log(countSubsequence(index, sum));
}

main();
