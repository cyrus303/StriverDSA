// factorial of a number using recursion

export {};
const countDown = (n: number) => {
  if (n === 0) {
    console.log("all done");
    return;
  }
  console.log(n);
  return countDown(n - 1);
};

countDown(5);

const factorial = (n: number): number => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log("factorial ->", factorial(5));

//NOTE: design pattern - helper method recursion

const collectOdds = (nums: number[]) => {
  const result: number[] = [];

  const helperFunction = (inputArr: number[]) => {
    if (inputArr.length === 0) return;
    if (inputArr[0] % 2 !== 0) {
      result.push(inputArr[0]);
    }
    helperFunction(inputArr.slice(1));
  };

  helperFunction(nums);

  return result;
};

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
