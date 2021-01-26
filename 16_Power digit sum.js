/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 21000?
https://projecteuler.net/problem=16
*/

console.log(BigInt(2**1000).toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b)));
