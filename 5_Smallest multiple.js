/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
https://projecteuler.net/problem=5
*/

function isDivible(num){
  for(var i=1; i<=20; i++){
    if(num%i !== 0) return false
  }
  return true
}

for(var i=2500; i<1e9; i++){
  if(isDivible(i)) {
    console.log(i);
    break;
  }
}