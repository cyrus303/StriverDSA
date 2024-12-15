// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

export {};

function assertIsArray(value: unknown): asserts value is number[] {
  if (!Array.isArray(value)) {
    throw new Error("input must be an array");
  }
}

type NestedArray<T> = T | NestedArray<T>[];

const flatten = <T>(input: NestedArray<T>): number[] => {
  assertIsArray(input);
  console.log("input ->", input);
  let newArr: number | number[] = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      newArr = newArr.concat(flatten(input[i]));
    } else {
      newArr.push(input[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, 3, [4, 5]]));
