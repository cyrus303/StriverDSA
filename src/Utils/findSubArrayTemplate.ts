export {};
const solution = (arr: number[], target: number) => {
  let prefixSum = 0;
  const HASHMAP = new Map();
  //if index -> initialise start and end
  //if count -> initialise count to zero

  for (let i = 0; i < arr.length; i++) {
    prefixSum = prefixSum + arr[i];
    let compliment = target - arr[i];
    //handle end case when i=0
    if (HASHMAP.has(compliment)) {
      //if index -> assign them here
      //if count -> increment
    } else {
      HASHMAP.set(prefixSum, i);
    }
  }
};
