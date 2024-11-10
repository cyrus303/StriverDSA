//Count digits in a number
//
//Problem Statement: Given an integer N, return the number of digits in N.
//
//Examples
//
//Example 1:
//Input:N = 12345
//Output:5
//Explanation:  The number 12345 has 5 digits.
//
//Example 2:
//Input:N = 7789
//Output: 4
//Explanation: The number 7789 has 4 digits.

export { };

const countDigits = (Num: number) => {
  console.log("Number is: ", Num);
  console.log("length of the digits is: ", Num.toString().length);

  let count = 0;

  while (Num > 0) {
    Num = Math.floor(Num / 10)
    count++
  }

  console.log("Count: ", count)
};

countDigits(12345);
