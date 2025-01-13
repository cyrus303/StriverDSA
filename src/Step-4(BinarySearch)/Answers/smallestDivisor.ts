// 1283. Find the Smallest Divisor Given a Threshold
// Medium
//
// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor,
// divide all the array by it, and sum the division's result.
//
// Find the smallest divisor such that the result mentioned above is less than or equal to threshold.
//
// Each result of the division is rounded to the nearest integer greater than or equal to that element.
// (For example: 7/3 = 3 and 10/2 = 5).
//
// The test cases are generated so that there will be an answer.
//
// Example 1:
//
// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).
//
// Example 2:
//
// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44

export {};

const arr = [1, 2, 5, 9];
const threshold = 5;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const helper = (arr: number[], divisor: number) => {
  let ans = 0;
  for (let num of arr) {
    ans += Math.ceil(num / divisor);
  }
  return ans;
};

const optimisedSolution = (arr: number[], threshold: number) => {
  let start = 1;
  let end = Math.max(...arr);
  let smallestDivisor = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const sumOfDivisors = helper(arr, mid);
    if (sumOfDivisors <= threshold) {
      smallestDivisor = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return smallestDivisor;
};

console.log(optimisedSolution(arr, threshold));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
