// Given an array nums of n integers.Return sum of all subsets of the array nums.
// Output can be printed in any order.
//
// Examples:
//
// Input : nums = [2, 3]
// Output : [0, 2, 3, 5]
//
// Explanation :
// When no elements is taken then Sum = 0.
// When only 2 is taken then Sum = 2.
// When only 3 is taken then Sum = 3.
// When element 2 and 3 are taken then sum = 2+3 = 5.
//
// Input : nums = [5, 2, 1]
// Output : [0, 1, 2, 3, 5, 6, 7, 8]
//
// Explanation :
// When no elements is taken then Sum = 0.
// When only 5 is taken then Sum = 5.
// When only 2 is taken then Sum = 2.
// When only 1 is taken then Sum = 1.
// When element 2 and 1 are taken then sum = 2+1 = 3.

export {};

const sumOfSubsets = (
  inputArr: number[],
  i: number,
  currentSubset: number[],
  allSubsets: number[],
) => {
  if (i === inputArr.length) {
    // Calculate sum for all subset sizes
    const sum = currentSubset.reduce((acc, val) => acc + val, 0);
    allSubsets.push(sum);

    return;
  }

  // Include current element
  currentSubset.push(inputArr[i]);
  sumOfSubsets(inputArr, i + 1, currentSubset, allSubsets);

  // Exclude current element
  currentSubset.pop();
  sumOfSubsets(inputArr, i + 1, currentSubset, allSubsets);
};

const main = (inputArr: number[]) => {
  let i = 0;
  let currentSubset: number[] = [];
  let allSubsets: number[] = [];

  sumOfSubsets(inputArr, i, currentSubset, allSubsets);
  console.log(allSubsets);
};

const inputArr = [5, 2, 1];
main(inputArr);
