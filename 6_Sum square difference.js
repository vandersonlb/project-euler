/*
The sum of the squares of the first ten natural numbers is,
1**2 + 2**2 + ... + 10**2 = 365
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)**2 = 55**2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
https://projecteuler.net/problem=6
*/

var sumSquare = 0;
var squareSum = 0;

for(i=1;i<=100;i++){
  sumSquare += i**2;
  squareSum += i;
}

console.log(squareSum**2 - sumSquare)