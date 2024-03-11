"use strict";
/*
Pattern – 17: Alpha-Hill Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
  A
 ABA
ABCBA


Input Format: N = 6
Result:
     A
    ABA
   ABCBA
  ABCDCBA
 ABCDEDCBA
ABCDEFEDCBA
*/
const pattern = (n) => {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        let ch = 64;
        let breakPoint = (2 * i + 1) / 2;
        for (let j = 0; j < 2 * i + 1; j++) {
            if (j <= breakPoint) {
                line += String.fromCharCode(++ch);
            }
            else {
                line += String.fromCharCode(--ch);
            }
        }
        for (let j = 0; j < n - i - 1; j++) {
            line += ' ';
        }
        console.log(line);
    }
};
pattern(6);
