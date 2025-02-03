// 1781. Sum of Beauty of All Substrings
// Medium
//
// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.
//
// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.
//
// Example 1:
//
// Input: s = "aabcb"
// Output: 5
// Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
// Example 2:
//
// Input: s = "aabcbaa"
// Output: 17

export {};

const input = "aabcb";

const findBeautyCount = (str: string) => {
  const HASH = new Map();
  for (const char of str) {
    HASH.set(char, (HASH.get(char) || 0) + 1);
  }

  const arr = Array.from(HASH);
  arr.sort((a, b) => b[1] - a[1]);

  let minFreq = arr[arr.length - 1][1];
  let maxFreq = arr[0][1];

  return maxFreq - minFreq;
};

const bruteForceSolution = (str: string) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let subStr = str.slice(i, j + 1);

      if (subStr.length >= 2) {
        count += findBeautyCount(subStr);
      }
    }
  }
  return count;
};

console.log("BF ->", bruteForceSolution(input));

const findBCount = (freqMap: any) => {
  let maxFreq = 0;
  let minFreq = Infinity;

  for (const [key, value] of freqMap) {
    maxFreq = Math.max(maxFreq, value);
    minFreq = Math.min(minFreq, value);
  }

  return maxFreq - minFreq;
};

const optimisedSolution = (str: string) => {
  console.log(str);
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const freqMap = new Map();

    for (let j = i; j < str.length; j++) {
      const char = str[j];
      freqMap.set(char, (freqMap.get(char) || 0) + 1);

      count += findBCount(freqMap);
    }
  }
  return count;
};

console.log(optimisedSolution(input));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
