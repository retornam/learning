def reverse(str)
  word = ""
  i = str.length
  while i > 0 
    word = word + str[i-1]
    i -= 1
  end
  puts word
end

reverse("hello")
