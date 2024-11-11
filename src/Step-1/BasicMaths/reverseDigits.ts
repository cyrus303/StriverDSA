// Reverse Digits of A Number
//
// Problem Statement: Given an integer N return the reverse of the given number.
//
// Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.
//
// Examples
// Example 1:
// Input:N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.
// Example 2:
// Input:N = 7789
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.

export { }

const reverseDigits = (Num: number) => {
  console.log(Num.toString().split('').reverse().join(''))

  let reverse = 0;

  while (Num > 0) {
    let digit = Num % 10; // Get the last digit
    reverse = reverse * 10 + digit; // Append digit to reversed number
    Num = Math.floor(Num / 10); // Remove the last digit
  }

  console.log("Reversed number:", reverse);
}


reverseDigits(12345)
