def reverse(str)
  word = ""
  i = str.length
  while i > 0 
    word = word + str[i-1]
    i -= 1
  end
  return word
end

reverse("hello")
