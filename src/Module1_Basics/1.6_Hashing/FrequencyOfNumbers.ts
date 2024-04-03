/*
Count frequency of each element in the array

Problem statement: Given an array, we have found the number of occurrences of each element in the array.

Examples:

Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
	        5  2
        15  1
Explanation: 10 occurs 3 times in the array
	            5 occurs 2 times in the array
             15 occurs 1 time in the array

Example2:
Input: arr[] = {2,2,3,4,4,2};
Output: 2  3
	      3  1
        4  2
Explanation: 2 occurs 3 times in the array
	           3 occurs 1 time in the array
             4 occurs 2 time in the array
*/

export {};

type hashType = Record<string, number>;

const solution = (n: number[]) => {
  const hash: hashType = {};
  n.map((ele) => {
    hash[ele] = (hash[ele] || 0) + 1;
  });

  console.log(hash);
};

const arr = [2, 2, 3, 4, 4, 2];
// solution(arr);

async function getCharmandar() {
  const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon';
  // get list of pokemon
  const response = await fetch(pokemonListUrl);
  const pokeList = await response.json();
  // find charmander in the array of pokemon
  const charmanderData = pokeList.results.map(
    async (poke: {name: string; url: string}) => {
      const {name, url} = poke;
      if (name === 'charmander') {
        const response = await fetch(url);
        const charmander = await response.json();
        const response2 = await fetch(charmander.species.url);
        const result = await response2.json();
        console.log(result);
      }
    }
  );
}

getCharmandar();
