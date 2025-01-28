// 796. Rotate String
// Easy
//
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
//
// A shift on s consists of moving the leftmost character of s to the rightmost position.
//
// For example, if s = "abcde", then it will be "bcdea" after one shift.
//
//
// Example 1:
//
// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:
//
// Input: s = "abcde", goal = "abced"
// Output: false

export {};

const s = "abced";
const goal = "cedab";

const bruteForceSolution = (s: string, goal: string) => {
  if (s.length !== goal.length) return false;
  const double = s + s;
  return double.includes(goal);
};

console.log(bruteForceSolution(s, goal));

const optimisedSolution = (s: string, goal: string) => {
  if (s.length !== goal.length) return false;
  const double = s + s;

  for (let i = 0; i < s.length; i++) {
    let subString = double.slice(i, i + goal.length);
    if (subString === goal) return true;
  }

  return false;
};

console.log(optimisedSolution(s, goal));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
