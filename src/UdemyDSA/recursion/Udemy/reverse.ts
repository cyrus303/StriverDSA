// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

export {};

//NOTE: Assert function in typescript

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("value is not a string");
  }
}

const reverse = (str: string) => {
  assertIsString(str);
  let result = "";

  const helper = (input: string) => {
    if (input.length === 0) {
      return;
    } else {
      result += input[input.length - 1];
      helper(input.slice(0, input.length - 1));
    }
  };

  helper(str);
  console.log(result);
};

reverse("awesome");
