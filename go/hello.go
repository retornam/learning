package main

import "fmt"

func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  a, b := swap("hello", "world")
    fmt.Println(a, b)
}

// for loop
/*
sum := 0
for i := 0; i < 10; i++ {
  sum += i
}
fmt.Println(sum)
}

sum := 1
for ; sum < 1000; {
  sum += sum
}
fmt.Println(sum)
*/


