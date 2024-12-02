// Sort Colors
//
// Given an array nums with n objects colored red, white, or blue, sort them in-place
// so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
//
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//
// You must solve this problem without using the library's sort function.
//
//
//
// Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
//
// Input: nums = [2,0,1]
// Output: [0,1,2]
//
//
// Constraints:
//
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
//
//
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

export {};

const numbers = [2, 0, 2, 1, 1, 0];

const bruteForceSolution = (arr: number[]) => {
  const zeroArr: number[] = [];
  const oneArr: number[] = [];
  const twoArr: number[] = [];

  arr.forEach((element) => {
    if (element === 0) zeroArr.push(element);
    else if (element === 1) oneArr.push(element);
    else twoArr.push(element);
  });

  return [...zeroArr, ...oneArr, ...twoArr];
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for (const element of arr) {
    if (element === 0) countZero++;
    else if (element === 1) countOne++;
    else countTwo++;
  }
  for (let i = 0; i < countZero; i++) {
    arr[i] = 0;
  }
  for (let i = countZero; i < countZero + countOne; i++) {
    arr[i] = 1;
  }
  for (let i = countZero + countOne; i < countZero + countOne + countTwo; i++) {
    arr[i] = 2;
  }
  return arr;
};

console.log(optimisedSolution(numbers));

const optimalSolution = (arr: number[]) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
    }
  }
  return arr;
};

console.log(optimalSolution(numbers));
