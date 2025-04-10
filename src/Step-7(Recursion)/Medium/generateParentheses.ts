// 22. Generate Parentheses
// Medium
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// Example 1:
//
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
//
// Input: n = 1
// Output: ["()"]
//
// Constraints:
//
// 1 <= n <= 8

export {};

function main(N: number) {
  const stack: string[] = [];
  const ans: string[] = [];

  const generateParentheses = (openCount: number, closeCount: number) => {
    if (openCount === N && closeCount === N) {
      ans.push([...stack].join(""));
      return;
    }

    if (openCount < N) {
      stack.push("(");
      generateParentheses(openCount + 1, closeCount);
      stack.pop();
    }

    if (closeCount < openCount) {
      stack.push(")");
      generateParentheses(openCount, closeCount + 1);
      stack.pop();
    }
  };

  generateParentheses(0, 0);

  console.log(ans);
}

main(3);
