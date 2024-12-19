export {};

function assertIsArray(value: unknown): asserts value is number[] {
  if (!Array.isArray(value)) {
    throw new Error("value is not an array");
  }
}

const linearSearch = (inputArr: number[], targetValue: number) => {
  assertIsArray(inputArr);

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === targetValue) {
      return i;
    }
  }
  return -1;
};

const inputArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 34, 45, 56, 67, 78, 90, 89,
];

console.log(linearSearch(inputArray, 13));
