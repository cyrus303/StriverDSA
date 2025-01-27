// 14. Longest Common Prefix
// Easy
//
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

export {};

const input = ["cluster", "clue", "clutch", "club", "clumsy"];

const input2 = [
  "cluster",
  "clue",
  "clutch",
  "club",
  "clumsy",
  "apple",
  "anchor",
  "antelope",
  "banana",
  "basket",
  "butterfly",
];

const bruteForceSolution = (str: string[]) => {
  let ans = "";
  str = str.sort();

  let firstStr = str[0];
  let lastStr = str[str.length - 1];

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== lastStr[i]) {
      break;
    } else {
      ans += firstStr[i];
    }
  }
  return ans;
};

console.log(bruteForceSolution(input2));

// const optimisedSolution = (arr: number[]) => {};
//
// console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
