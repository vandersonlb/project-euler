/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
https://projecteuler.net/problem=9
*/

function runTests() {
  var a, b, test = 400
  for (var i = 0; i < test; i++) {
    a = i
    for (var j = 0; j < test; j++) {
      b = j
      c = Math.sqrt(a ** 2 + b ** 2)
      if (!Number.isInteger(c)) continue
      var sum = [a, b, c].reduce((a, b) => a + b)
      if (sum === 1000) return [a, b, c]
    }
  }
}

console.log(runTests().reduce((a, b) => a * b))