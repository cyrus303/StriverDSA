// 242. Valid Anagram
// Easy
//
// Given two strings s and t, return true if t is an
// anagram of s, and false otherwise.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
//
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false

export {};

const s = "anagram";
const t = "nagaram";

const bruteForceSolution = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  for (let char of s) {
    mapS.set(char, (mapS.get(char) || 0) + 1);
  }

  for (let char of t) {
    mapT.set(char, (mapT.get(char) || 0) + 1);
  }

  for (let [keyS, valueS] of mapS) {
    if (mapT.get(keyS) !== valueS) {
      return false;
    }
  }
  return true;
};

console.log(bruteForceSolution(s, t));

// const optimisedSolution = (arr: number[]) => {};
//
// console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
