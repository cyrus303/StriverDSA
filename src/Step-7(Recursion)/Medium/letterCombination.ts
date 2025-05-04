// 17. Letter Combinations of a Phone Number
// Medium
// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations that the number could represent.
// Return the answer in any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.
//
// Example 1:
//
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
//
// Example 2:
//
// Input: digits = ""
// Output: []
//
// Example 3:
//
// Input: digits = "2"
// Output: ["a","b","c"]

export {};

const digitsToChar = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "qprs",
  "8": "tuv",
  "9": "wxyz",
} as const;

const digits = "23";

const bruteForceSolution = (digits: string) => {
  let i = 0;
  let res: string[] = [];
  let currentStr = "";

  letterCombination(digits, i, res, currentStr);
  console.log(res);
};

const letterCombination = (
  inputStr: string,
  i: number,
  res: string[],
  currentStr: string,
) => {
  if (i === inputStr.length) {
    res.push(currentStr);
    return;
  }

  const key = inputStr[i] as keyof typeof digitsToChar;
  const letters = digitsToChar[key];
  for (let char of letters) {
    letterCombination(inputStr, i + 1, res, currentStr + char);
  }
};

bruteForceSolution(digits);
