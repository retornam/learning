def replace_with_percent (str)
  str.each_char do |c|
    if c == " "
      c.replace "%20"
      puts c # prints 3 %20s 
    end
  end
end

replace_with_percent("This is a test")
