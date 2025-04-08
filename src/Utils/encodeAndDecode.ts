// 659 · Encode and Decode Strings
// Algorithms
// Medium
//
// Description
// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
//
// Please implement encode and decode
//
//Example
//Example1
//
//Input: ["lint","code","love","you"]
//Output: ["lint","code","love","you"]
//Explanation:
//One possible encode method is: "lint:;code:;love:;you"
//Example2
//
//Input: ["we", "say", ":", "yes"]
//Output: ["we", "say", ":", "yes"]
//Explanation:
//One possible encode method is: "we:;say:;:::;yes"

export {};

const encode = (strs: string[]) => {
  let res = "";

  for (let str of strs) {
    res = res + str.length + "#" + str;
  }
  return res;
};

const input = ["lint", "3#code", "love", "you"];
const enocdedStr = encode(input);
console.log(enocdedStr);

const decode = (str: string) => {
  const res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const len = +str.slice(i, j);
    res.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return res;
};

const originalString = decode(enocdedStr);
console.log(originalString);
