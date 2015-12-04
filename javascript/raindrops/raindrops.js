"use strict";

class Raindrops {
  convert(value) {
    var conversion = value % 3 == 0 ? "Pling" : "";
    if (value % 5 == 0) { conversion = conversion + "Plang"; }
    if (value % 7 == 0) { conversion = conversion + "Plong"; }
    return conversion || value.toString();
  }
}

module.exports = Raindrops;
