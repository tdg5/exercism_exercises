"use strict";

let NUMERALS = [
  [ 1000, "M" ],
  [ 900, "CM", ],
  [ 500, "D" ],
  [ 400, "CD" ],
  [ 100, "C" ],
  [ 90, "XC" ],
  [ 50, "L" ],
  [ 40, "XL" ],
  [ 10, "X" ],
  [ 9, "IX"],
  [ 5, "V" ],
  [ 4, "IV" ],
  [ 1, "I" ]
];

function eachNumeralUnit(fn) {
  for(let i = 0; i < NUMERALS.length; ++i) {
    let unit = NUMERALS[i][0],
      numeral = NUMERALS[i][1];
    fn(numeral, unit);
  }
}

function toRoman(num) {
  let result = "";
  eachNumeralUnit(function(numeral, unit) {
    while (unit <= num) {
      result = result + numeral;
      num = num - unit;
    }
  });
  return result;
}

module.exports = toRoman;
