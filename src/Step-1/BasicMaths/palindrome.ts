// Check if a number is Palindrome or Not
//
// Problem Statement: Given an integer N, return true if it is a palindrome else return false.
//
// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
//
// Examples
//
// Example 1:
// Input:N = 4554
// Output:Palindrome Number
// Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
//
// Example 2:
// Input:N = 7789
// Output: Not Palindrome
// Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome

export {};

const palindrome = (num: number) => {
  console.log("Palindrome Function, input value is: ", num);
  const len = num.toString().length - 1;
  let i = 0;
  let j = len;
  let numArray = num.toString().split("");
  while (i <= j) {
    if (numArray[i] !== numArray[j]) {
      console.log("not a palindrome");
      return;
    }
    i++;
    j--;
  }
  console.log("is a palidrome");
};

palindrome(4554);
