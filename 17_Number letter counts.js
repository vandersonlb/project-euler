/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage
https://projecteuler.net/problem=17
*/

/* ---- FIRST APROACH ---- */
var start = Date.now();

let _1to20 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let _10to100 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let _100to1000 = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', 'one thousand'];
let _1to99 = [];
let _1to1000 = [];

for (let dozens = 0; dozens < 10; dozens++) {
  _10to100[dozens] ? _1to99.push(_10to100[dozens]) : null;
  for (let units = 0; units < 9; units++) {
    if (dozens < 2) _1to99.push(_1to20[units + dozens * 10]);
    if (dozens >= 2) _1to99.push(_10to100[dozens] + "-" + _1to20[units]);
  }
}

for (let hundreds = 0; hundreds <= 10; hundreds++) {
  _100to1000[hundreds] ? _1to1000.push(_100to1000[hundreds]) : null;
  if (hundreds == 10) break;
  _1to99.forEach((num) => {
    if (hundreds < 1) _1to1000.push(num);
    if (hundreds >= 1) _1to1000.push(_100to1000[hundreds] + " and " + num);
  });
}

let total = _1to1000.reduce((total, num) => {
  return total + num.replace(/\W/g, '');
}, '');

console.log(total.length);

var end = Date.now();
console.log(end-start + ' miliseconds');


/* ---- SECOND APROACH ---- */
var start = Date.now();

let stringNums ={
  1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten', 
  11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
  20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety',
  100:'one hundred', 200:'two hundred', 300:'three hundred', 400:'four hundred', 500:'five hundred', 600:'six hundred', 700:'seven hundred', 800:'eight hundred', 900:'nine hundred', 1000:'one thousand'
};

let allNums = [];

for (let hundreds = 0; hundreds < 10; hundreds++) {
  for (let dozens = 0; dozens < 10; dozens++) {
    for (let units = 1; units <= 10; units++) {
      if (hundreds == 0) {
        dozens < 2 || units == 10 ? allNums.push(`${stringNums[units + dozens*10]}`) : allNums.push(`${stringNums[dozens*10]}-${stringNums[units]}`);
      } else {
        if (units == 10 && dozens == 9) {
          allNums.push(`${stringNums[(hundreds+1)*100]}`);
        } else {
          dozens < 2 || units == 10 ? allNums.push(`${stringNums[hundreds*100]} and ${stringNums[units + dozens*10]}`) : allNums.push(`${stringNums[hundreds*100]} and ${stringNums[dozens*10]}-${stringNums[units]}`);
        }
      }
    }
  }
}

let count = allNums.reduce((total, num) => total + num.replace(/\W/g, ''));
console.log(count.length);

var end = Date.now();
console.log(end-start + ' miliseconds');