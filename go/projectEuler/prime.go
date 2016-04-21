// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

package main

import(
  "fmt"
)

func prime() int {
  var p int = 1
  var s int = 0
  for i := 0; i < 10000000000000; i++ {
    if isPrime(p) == true {
      s += 1
      if s == 10001 {
        fmt.Println(s)
        return p
      } else if s != 10001 {
        p++    
      }
    }
  }
  return p
}

func isPrime(n int) bool {
  var d int = 2
  for n > d {
    if n % d == 0 {
      return false 
    } else {
      d++
    }
  }
  return true
}
func main() {
  fmt.Println(prime())
}
