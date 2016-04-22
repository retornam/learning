// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

package main

import (
  "fmt"
)

func abc() (p int) {
  var a, b, c int = 0, 0, 1000
  for i := 0; i < 1000; i++ {
    a = i * i 
    for j := 0; i < 1000; j++ {
      b = j * j
      for k := 0; k < 1000; k++ {
        c = k * k;
        if a + b + c == 1000 {
          p = a * b * c
          return p
        } 
      }
    }
  }
  return p
}

func main() {
  fmt.Println(abc())
}
