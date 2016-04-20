// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

package main

import (
  "fmt"
)

func prime() int {
  var n int = 600851475143
  for d := 2; n > d; d++ {
    if n % d == 0 {
      fmt.Println(d)
    }
  }
  return n
}

func main() {
  fmt.Println(prime())
}
