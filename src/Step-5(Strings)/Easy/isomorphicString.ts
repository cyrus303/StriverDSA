// 205. Isomorphic Strings
// Easy
//
// Given two strings s and t, determine if they are isomorphic.
//
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.
//
// Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
//
// Explanation:
// The strings s and t can be made identical by:
//
// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
//
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
//
// Explanation:
// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
//
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true

export {};

const s = "badc";
const t = "baba";

const bruteForceSolution = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  const map = new Map();
  let i = 0;

  while (i < s.length) {
    if (map.get(s[i]) === undefined) {
      const value = [...map].find(([_, v]) => v === t[i]);
      if (value) return false;
      map.set(s[i], t[i]);
    } else {
      let key = map.get(s[i]);
      if (key !== t[i]) {
        return false;
      }
    }
    i++;
  }

  return true;
};

console.log(bruteForceSolution(s, t));

const optimisedSolution = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    } else {
      mapS.set(charS, charT);
    }

    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    } else {
      mapT.set(charT, charS);
    }
  }

  return true;
};

console.log(optimisedSolution(s, t));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
