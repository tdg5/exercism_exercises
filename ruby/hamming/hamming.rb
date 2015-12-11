module Hamming
  VERSION = 1

  def self.compute(expected_seq, seq)
    raise ArgumentError if expected_seq.length != seq.length
    dist = i = 0
    while i < expected_seq.length
      dist += 1 if expected_seq[i] != seq[i]
      i += 1
    end
    dist
  end
end
