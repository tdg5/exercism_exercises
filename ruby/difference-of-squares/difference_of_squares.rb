class Squares
  VERSION = 1

  def initialize(limit)
    @range = 1..limit
  end

  def difference
    square_of_sums - sum_of_squares
  end

  def difference_O_n
    sum_of_sqrs = sqr_of_sums = 0
    @range.each do |i|
      sum_of_sqrs += i ** 2
      sqr_of_sums += i
    end
    sqr_of_sums ** 2 - sum_of_sqrs
  end

  def sum_of_squares
    @range.reduce(0) {|reduction, i| reduction + i ** 2 }
  end

  def square_of_sums
    @range.reduce(:+) ** 2
  end
end
