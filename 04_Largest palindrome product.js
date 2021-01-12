/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
https://projecteuler.net/problem=4
*/

var multiplus = []
for(i=100; i<1000; i++){
  for(j=100; j<1000; j++){
    multiplus.push(j*i)
  }
}

var palindromes = []
for(ele of multiplus){
  if(isPalindrome(ele)) palindromes.push(ele)
}

function isPalindrome(arg){
  var arr = String(arg).split('');
  var rev = [...arr].reverse();
  
  for(i=0; i<Math.floor(arr.length/2); i++) {
    if(arr[i] != rev[i]) return false
  }

  return true;
}

console.log(Math.max(...palindromes))