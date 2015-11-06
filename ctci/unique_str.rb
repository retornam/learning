# Implement an algorithm to determine if a string has all unique characters

def is_str_unique (str)
  characters = {}

  str.each_char do |c|
    return false if characters.has_key? c
    characters[c] = true
  end
end

# this will return false
is_str_unique("Keala")
