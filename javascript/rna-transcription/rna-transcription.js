"use strict";

var DNA_COMPLEMENTS = {
    A: "T",
    C: "G",
    G: "C",
    U: "A"
  },
  RNA_COMPLEMENTS = invert(DNA_COMPLEMENTS);

function invert(complements) {
  var k, inversion = {};
  for (k in complements) { inversion[complements[k]] = k; }
  return inversion;
}

function transcribe(sequence, complements) {
  var i, complementSequence = "";

  for(i = 0; i < sequence.length; ++i) {
    complementSequence = complementSequence + complements[sequence[i]];
  }
  return complementSequence;
}

class DnaTranscriber {
  toDna(rna) {
    return transcribe(rna, DNA_COMPLEMENTS);
  }

  toRna(dna) {
    return transcribe(dna, RNA_COMPLEMENTS);
  }
}

module.exports = DnaTranscriber;
