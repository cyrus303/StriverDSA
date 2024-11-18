// Find the highest/lowest frequency element
//
// Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
//
// Pre-requisite: Hashing Theory and  Counting frequencies of array elements
//
// Examples:
//
// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.
//
// Example 2:
//
// Input: array[] = {2,2,3,4,4,2};
// Output: 2 3
// Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

export {};

const findHighAndLow = (num: number[]) => {
  console.log("input values are ->", num);

  const HASH: Record<string, number> = {};

  num.forEach((ele) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });
  console.log("HASH ->", HASH);

  // Sort the frequency map by frequency in descending order
  const sortedFreqMap = Object.entries(HASH).sort((a, b) => b[1] - a[1]);

  const highestFreqElement = sortedFreqMap[0][0];
  const lowestFreqElement = sortedFreqMap[sortedFreqMap.length - 1][0];

  console.log("highestFreqElement", highestFreqElement);
  console.log("lowestFreqElement", lowestFreqElement);
};

const inputArr = [2, 2, 3, 4, 4, 2];
findHighAndLow(inputArr);
