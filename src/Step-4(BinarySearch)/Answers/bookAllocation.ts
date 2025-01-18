// Problem statement
// Given an array ‘arr’ of integer numbers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book.
//
// There are ‘m’ number of students, and the task is to allocate all the books to the students.
//
// Allocate books in such a way that:
//
// 1. Each student gets at least one book.
// 2. Each book should be allocated to only one student.
// 3. Book allocation should be in a contiguous manner.
//
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum.
//
// If the allocation of books is not possible, return -1.
//
// Example:
// Input: ‘n’ = 4 ‘m’ = 2
// ‘arr’ = [12, 34, 67, 90]
//
// Output: 113
//
// Explanation: All possible ways to allocate the ‘4’ books to '2' students are:
//
// 12 | 34, 67, 90 - the sum of all the pages of books allocated to student 1 is ‘12’, and student two is ‘34+ 67+ 90 = 191’, so the maximum is ‘max(12, 191)= 191’.
//
// 12, 34 | 67, 90 - the sum of all the pages of books allocated to student 1 is ‘12+ 34 = 46’, and student two is ‘67+ 90 = 157’, so the maximum is ‘max(46, 157)= 157’.
//
// 12, 34, 67 | 90 - the sum of all the pages of books allocated to student 1 is ‘12+ 34 +67 = 113’, and student two is ‘90’, so the maximum is ‘max(113, 90)= 113’.
//
// We are getting the minimum in the last case.
//
// Hence answer is ‘113’.

export {};

const arr = [15, 17, 20];
const m = 2;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const isValid = (arr: number[], m: number, maxAllowedPages: number) => {
  let students = 1;
  let totalPages = 0;

  for (let page of arr) {
    if (page > maxAllowedPages) return false;
    if (page + totalPages <= maxAllowedPages) {
      totalPages += page;
    } else {
      students++;
      totalPages = page;
    }
  }

  return students > m ? false : true;
};

const optimisedSolution = (arr: number[], m: number) => {
  let start = Math.min(...arr);
  let end = arr.reduce((ele, sum) => sum + ele, 0);
  let ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let validCase = isValid(arr, m, mid);

    if (validCase) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(optimisedSolution(arr, m));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
