// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

export {};

type NestedArray<T> = T | NestedArray<T>[];

const flatten = <T>(input: NestedArray<T>) => {
  console.log("input ->", input);
};

flatten([1, 2, 3, [4, 5]]);
flatten([1, [2, [3, 4], [[5]]]]);
