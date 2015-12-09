"use strict";

class PrimeFactors {
  for(composite) {
    let factors = [];
    for(let i = 2; i <= Math.sqrt(composite); ++i) {
      while (composite % i === 0) {
        factors.push(i);
        composite = composite / i;
      }
    }
    if (composite > 1) { factors.push(composite); }
    factors.sort(function(a,b) { return a < b ? -1 : a > b ? 1 : 0; });
    return factors;
  }
}

let primeFactors = new PrimeFactors();
module.exports = primeFactors;
