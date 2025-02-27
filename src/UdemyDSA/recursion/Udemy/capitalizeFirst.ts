// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.
//
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

export {};

const capitalizeFirst = (inputArr: string[]): any => {
  console.log("input ->", inputArr);
  if (inputArr.length === 0) return [];
  else {
    const capitalizedValue = inputArr[0]
      .slice(0, 1)
      .toUpperCase()
      .concat(inputArr[0].slice(1));
    return [capitalizedValue, ...capitalizeFirst(inputArr.slice(1))];
  }
};

const result = capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
console.log(result);
