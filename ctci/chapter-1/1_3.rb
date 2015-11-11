# Given two strings, write a method to decide if one is a permutation of the other

def is_a_permutation? (str1, str2)
  new_string_array = str1.chars.permutation.map(&:join)
  new_string_array.each do |s|
    return true if s == str2
  end
end

is_a_permutation?("abc", "bca")
