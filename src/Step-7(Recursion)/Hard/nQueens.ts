// 51. N-Queens
// Hard
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
//
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.'
// both indicate a queen and an empty space, respectively.
//
// Example 1:
//
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
//
// Example 2:
//
// Input: n = 1
// Output: [["Q"]]

export {};

const isSafe = (board: string[][], row: number, col: number, n: number) => {
  //horizontal check
  for (let j = 0; j < n; j++) {
    if (board[row][j] === "Q") {
      return false;
    }
  }

  // vertical check
  for (let i = 0; i < n; i++) {
    if (board[i][col] === "Q") {
      return false;
    }
  }

  // left diagonal check
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  //right diagonal check
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  return true;
};

const nQueens = (
  board: string[][],
  row: number,
  n: number,
  ans: string[][],
) => {
  if (row === n) {
    ans.push(board.map((r) => r.join("")));
    return;
  }
  for (let j = 0; j < n; j++) {
    if (isSafe(board, row, j, n)) {
      board[row][j] = "Q";
      nQueens(board, row + 1, n, ans);
      board[row][j] = ".";
    }
  }
};

function main() {
  const ans: string[][] = [];
  const n = 4;
  let row = 0;
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));

  nQueens(board, row, n, ans);
  console.log(ans);
}

main();
