// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
export {};

type Assertions = {
  isArray: (value: unknown) => asserts value is number[];
  isFunction: (value: unknown) => asserts value is Function;
};

const assertObj: Assertions = {
  isArray: function assertIsArray(value: unknown): asserts value is number[] {
    if (!Array.isArray(value)) {
      throw new Error("input needs to be an array");
    }
  },
  isFunction: function assertIsCallback(
    value: unknown,
  ): asserts value is Function {
    if (typeof value !== "function") {
      throw new Error("Provided value is not a valid callback function.");
    }
  },
};

const someRecursive = (inputArr: number[], callback: Function) => {
  console.log("inputArr ->", inputArr);
  assertObj.isArray(inputArr);
  assertObj.isFunction(callback);

  if (inputArr.length <= 0) {
    return false;
  }

  const element = inputArr.pop();
  const result = callback(element);

  if (result) {
    return true;
  } else {
    return someRecursive(inputArr, callback);
  }
};

const isOdd = (val: number) => val % 2 !== 0;

let result = someRecursive([1, 2, 3, 4], isOdd); // true
console.log("final result ->", result);
