/*
Check if a number is prime or not
Problem Statement: Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.

Example 1:
Input: N = 3
Output: Prime
Explanation: 3 is a prime number

Example 2:
Input: N = 26
Output: Non-Prime
Explanation: 26 is not prime
*/
export {};

const solution = (n: number) => {
  console.log(n);
  if (n <= 1) {
    console.log('Not A Prime Number');
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log('Not A Prime Number');
      return;
    }
  }
  console.log('Prime Number');
};

solution(-20);

/*
The time complexity of the optimized solution is O(√n), where n is the input number. This is because we iterate through the numbers from 2 to √n to check for divisibility.

The space complexity is O(1), as we are not using any additional data structures that grow with the input size. We only have a fixed amount of space used for variables such as i and n. Therefore, the space complexity remains constant irrespective of the input size.
*/
