# Implement a method to perform basic string compression using the counts of repeated characters

def add_char_with_count (last_char, char_count)
  last char + char_count.to_s
end

def compress (str)

  return str if str.length < 2

  char_count = 1
  last_char = str[0]
  result = []

  str.slice(1..-1).each_byte do |c|
    char = c.chr

    if char == last_char
      char_count += 1
    else
      result << add_character_with_count(last_char, char_count)
      char_count = 1
    end

    last_char = char
  end

  result << add_character_with_count(last_char, char_count)

  result.join("")
end
