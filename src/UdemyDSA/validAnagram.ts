//valid anagram

const validAnagram = (strOne: string, strTwo: string) => {
  console.log(`input: string 1 -> ${strOne}, string 2 -> ${strTwo}`);

  if (strOne.length !== strTwo.length) return false;

  const HASHONE: Record<string, number> = {};
  const HASHTWO: Record<string, number> = {};

  for (const letter of strOne) {
    HASHONE[letter] = (HASHONE[letter] | 0) + 1;
  }
  for (const letter of strTwo) {
    HASHTWO[letter] = (HASHTWO[letter] | 0) + 1;
  }

  for (const [key, value] of Object.entries(HASHONE)) {
    if (!HASHTWO[key]) {
      return false;
    }
    if (value !== HASHTWO[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("  ", " ")); //false
console.log(validAnagram("racecar", "carrace"));
console.log(validAnagram("listen", "silent")); // true
console.log(validAnagram("hello", "billion")); // false
console.log(validAnagram("cinema", "iceman")); // true
console.log(validAnagram("aabbcc", "abcabc")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("", "")); // true
console.log(validAnagram("a", "a")); // true
console.log(validAnagram("abcd", "dcba")); // true
console.log(validAnagram("ab", "a")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("night", "thing")); // true
console.log(validAnagram("schoolmaster", "theclassroom")); // true
console.log(validAnagram("fluster", "restful")); // true
console.log(validAnagram("dormitory", "dirtyroom")); // true
console.log(validAnagram("gamer", "marge")); // true

// Empty strings
console.log(validAnagram("", "")); // true (both are empty)

// Single character strings
console.log(validAnagram("a", "a")); // true (same single character)
console.log(validAnagram("a", "b")); // false (different single characters)

// Different lengths
console.log(validAnagram("abc", "abcd")); // false (length mismatch)

// Strings with repeated characters
console.log(validAnagram("aaaa", "aaaa")); // true (same characters repeated)
console.log(validAnagram("aabb", "bbaa")); // true (same characters, rearranged)
console.log(validAnagram("aabb", "abab")); // true (same characters, different arrangement)
console.log(validAnagram("aabbcc", "aabbc")); // false (character counts don't match)

// Case sensitivity
console.log(validAnagram("Listen", "Silent")); // false (case-sensitive comparison)
console.log(validAnagram("abc", "ABC")); // false (case-sensitive)

// Special characters
console.log(validAnagram("123", "321")); // true (numbers as characters)
console.log(validAnagram("!@#", "#@!")); // true (special characters rearranged)
console.log(validAnagram("a!b", "b!a")); // true (letters and special characters mixed)

// Non-alphabetic strings
console.log(validAnagram("123", "231")); // true (numbers only)
console.log(validAnagram("123", "1123")); // false (length mismatch)

// Large input
console.log(validAnagram("a".repeat(100) + "b", "b" + "a".repeat(100))); // true (large strings, valid anagram)
console.log(validAnagram("a".repeat(100), "b".repeat(100))); // true (large strings, valid anagram)
