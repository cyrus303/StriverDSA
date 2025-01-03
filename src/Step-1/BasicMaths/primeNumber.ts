// Check if a number is prime or not
//
// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
//
// Examples
// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
//
// Example 2:
// Input:N =10
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.

export {};

const checkPrime = (N: number) => {
  console.log("input number is: ", N);
  if (N < 2) {
    console.log("Not A Prime Number");
    return;
  }
  if (N === 2) {
    console.log("Is A Prime Number");
    return;
  }
  if (N % 2 === 0) {
    console.log("Not A Prime Number");
    return;
  }

  let sqrtN = Math.sqrt(N);

  for (let i = 3; i <= sqrtN; i += 2) {
    if (N % i === 0) {
      console.log("Not A Prime Number");
      return;
    }
  }
  console.log("Is A Prime Number");
};

checkPrime(13);
checkPrime(10);
