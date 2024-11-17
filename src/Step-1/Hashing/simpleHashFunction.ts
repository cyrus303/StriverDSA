// Simple hashing function in Javascript

export {};

const hashing = (value: string[] | number[]) => {
  console.log("input value ->", value);

  const HASH: Record<string, number> = {};

  value.forEach((ele: string | number) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });
  console.log(HASH);
};

hashing("good morning".split(""));
hashing([1, 2, 3, 4, 5, 6, 7]);
