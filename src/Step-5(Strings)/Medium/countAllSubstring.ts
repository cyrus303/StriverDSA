// Substrings with K Distinct
//
// Difficulty: Medium
// Given a string s of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters.
//
// Examples :
//
// Input: s = "aba", k = 2
// Output: 3
// Explanation: The substrings are: "ab", "ba" and "aba".
//
// Input: s = "abaaca", k = 1
// Output: 7
// Explanation: The substrings are: "a", "b", "a", "aa", "a", "c", "a".
//
// Input: s = "cdad", k = 4
// Output: 0

export {};

const inputStr = "aba";
const k = 2;

const bruteForceSolution = (str: string, k: number) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const hashmap = new Set();
    for (let j = i; j < str.length; j++) {
      const char = str[j];

      hashmap.add(char);

      if (Array.from(hashmap).length === k) {
        count++;
      }
    }
  }
  return count;
};

// console.log(bruteForceSolution(inputStr, k));

const optimisedSolution = (str: string, k: number) => {
  let count = 0;
  let left = 0;
  const freqHash = new Map();

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    freqHash.set(char, (freqHash.get(char) || 0) + 1);

    while (freqHash.size > k) {
      const leftChar = str[left];
      freqHash.set(leftChar, freqHash.get(leftChar) - 1);
      if (freqHash.get(leftChar) === 0) {
        freqHash.delete(leftChar);
      }
      left++;
    }
    count += right - left + 1;
  }
  return count;
};

const helper = (str: string, k: number) => {
  return optimisedSolution(str, k) - optimisedSolution(inputStr, k - 1);
};

console.log(helper(inputStr, k));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
