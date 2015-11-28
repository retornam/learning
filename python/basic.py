my_name = "Keala"

# length method
print len(my_name)
# to lowercase method
print my_name.lower()
# capitalize method
print my_name.upper()

i_love_pi = 3.14

print str(i_love_pi)

def hello_world():
  print "Hello World!"

hello_world()

x = 14
y = 15

if x < y: print x
elif y < x: print y
else: print "that is the same number!"

x = 16
ans = 0
while ans * ans <= x:
  ans = ans + 1
print ans
