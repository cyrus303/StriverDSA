// Check if the given String is Palindrome or not
//
// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
//
// Examples:
//
// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.
//
// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

export {};

const palindrome = (str: string) => {
  console.log("input string -->", str);
  let i = 0;
  let j = str.length - 1;

  while (i <= (str.length - 1) / 2) {
    if (str[i] !== str[j]) {
      console.log("Not a palindrome");
      return;
    } else {
      i++;
      j--;
    }
  }
  console.log("Its a palindrome");
};

palindrome("ABCDCBAN");
