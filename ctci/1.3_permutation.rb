def all_permutations(str)
  puts str.chars.to_a.permutation.map(&:join)
end

all_permutations("abc")
