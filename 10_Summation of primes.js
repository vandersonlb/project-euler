/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
https://projecteuler.net/problem=10
*/

function isPrimeMaster(n){
  for(var i=2; i<=Math.ceil(Math.sqrt(n)); i++) {
    if(n!=2 && n%i==0) return false
  }
  return true;
}

var sum = 0;
for(var i=2; i<2e6; i++){
  if(isPrimeMaster(i)){
    sum += i;
  }
}

console.log(sum);