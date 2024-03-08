"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.time();
// const pattern = (n: number) => {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     const line = Array.from({length: i + 1}, () => count++);
//     console.log(line.join(' '));
//   }
// };
const pattern = (n) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += `${count++} `;
        }
        console.log(line);
    }
};
pattern(10);
console.timeEnd();
