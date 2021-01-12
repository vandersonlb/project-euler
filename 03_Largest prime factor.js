/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
https://projecteuler.net/problem=3
*/

var num = 600851475143;

for(var i=0; i<num; i++){
  if(num%i == 0 && isPrime(i)) console.log(i)
}

function isPrime(n){
  if(n == 0 || n == 1) return false
  for(var i=n-1; i>1; i--) {
    if(n%i == 0) return false
  }
  return true;
}