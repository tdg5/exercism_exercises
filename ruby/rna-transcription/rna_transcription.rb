module Complement
  VERSION = 2

  DNA_TO_RNA = {
    "G" => "C",
    "C" => "G",
    "T" => "A",
    "A" => "U",
  }
  RNA_TO_DNA = DNA_TO_RNA.invert
  EXCEPTION_PROC = lambda { |key, hash| raise ArgumentError, "Invalid input" }
  DNA_TO_RNA.default_proc = RNA_TO_DNA.default_proc = EXCEPTION_PROC

  def self.of_dna(seq)
    translate(seq, DNA_TO_RNA)
  end

  def self.of_rna(seq)
    translate(seq, RNA_TO_DNA)
  end

  private_class_method
  def self.translate(seq, complement_map)
    seq.chars.map(&complement_map.method(:[])).join
  end
end
