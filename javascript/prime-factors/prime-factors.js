"use strict";

class PrimeFactors {
  for(composite) {
    let factors = [],
      limit = Math.sqrt(composite),
      reduction = composite;

    for(let i = 2; i <= limit; ++i) {
      while (reduction % i === 0) {
        factors.push(i);
        reduction /= i;
      }
    }
    if (reduction > 1) { factors.push(reduction); }
    return factors;
  }
}

let primeFactors = new PrimeFactors();
module.exports = primeFactors;
