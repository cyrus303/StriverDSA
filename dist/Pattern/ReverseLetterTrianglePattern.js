"use strict";
/*
Pattern-15: Reverse Letter Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
A B C
A B
A

Input Format: N = 6
Result:
A B C D E F
A B C D E
A B C D
A B C
A B
A
*/
Object.defineProperty(exports, "__esModule", { value: true });
const pattern = (n) => {
    for (let i = n; i > 0; i--) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += String.fromCharCode(65 + j);
        }
        console.log(line);
    }
};
pattern(5);
