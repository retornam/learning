// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

package main

import (
    "fmt"
    "math"
)

func largestPrime() int64 {
  var n int64 = 600851475143
  var i int64 = 0

  for i := sqrt(n); i >= i; i-- {
    if n % i == 0 && isPrime(i) {
      return i
        break
    }
  }
  return i
}

func isPrime(n int64) bool {
  if n <= 1 {
    return false
  }

  for i := sqrt(n); i >= 1; i-- {
    if i == 1 {
      return true
    }
    if n % i == 0 {
      return false
    }
  }
  return true
}

// this function takes a number and returns the squareroot
func sqrt(n int64) int64 {
  return int64(math.Sqrt(float64(n)))
}

func main() {
  fmt.Println(largestPrime())
}
