// isPalindrome
// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

export {};

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("input needs to be of typo string");
  }
}

const isPalindrome = (str: string): boolean => {
  assertIsString(str);
  console.log("input string ->", str);
  let result = true;

  const helper = (input: string) => {
    if (!result) return;
    if (input.length <= 1) return;

    if (input[0] !== input[input.length - 1]) {
      result = false;
      return;
    }

    helper(input.slice(1, input.length - 1));
  };

  helper(str);
  console.log("result ->", result);

  return result;
};

isPalindrome("racecara");
