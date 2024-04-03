/*
Check if the given String is Palindrome or not

Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

Examples:

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.
*/

export {};

const solution = (str: string) => {
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// console.log(solution('A man, a plan, a canal: Panama'));

const recursiveSolution = (str: string) => {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(str);
  const result = palindromeCheck(0, str);
  console.log(result);
  return result;
};

const palindromeCheck = (start: number, str: string): boolean => {
  if (start >= str.length / 2) return true;
  if (str.charAt(start) != str.charAt(str.length - start - 1))
    return false;

  return palindromeCheck(start + 1, str);
};

recursiveSolution('0p');
