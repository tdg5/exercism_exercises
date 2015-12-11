"use strict";

class PrimeFactors {
  for(composite) {
    let factors = [];
    for(let i = 2; i <= Math.sqrt(composite); ++i) {
      while (composite % i === 0) {
        factors.push(i);
        composite /= i;
      }
    }
    if (composite > 1) { factors.push(composite); }
    return factors;
  }
}

let primeFactors = new PrimeFactors();
module.exports = primeFactors;
