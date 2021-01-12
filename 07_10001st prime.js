/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
https://projecteuler.net/problem=7
*/

function isPrime(n){
  for(var i=n-1; i>1; i--) {
    if(n%i == 0) return false
  }
  return true;
}

var primes = [];
var num = 2;
var check = 10001;
while(primes.length < check){
  if(isPrime(num)) primes.push(num)
  num++
}

console.log(primes[check-1])