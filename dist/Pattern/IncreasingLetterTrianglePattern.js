"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern = (n) => {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += String.fromCharCode(65 + j) + ' ';
        }
        console.log(line);
    }
};
pattern(26);
console.log('\n', 'A'.charCodeAt(0));
console.log('\n', String.fromCharCode(65));
