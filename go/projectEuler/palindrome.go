package main 

import (
    "fmt"
    "strconv"
)

func largest(f int) int {
  m := 0
  for i := f; i > 0; i-- {
    if m > i*i {
      return m 
    }

    for j := i; j > 0; j-- {
      if isPalindrome(i*j) && i*j > m {
        m = i * j
      }
    }
  }
  return 0
}

func isPalindrome(v int) bool {
  var s string = strconv.Itoa(v)
  var l int= len(s)

  for i := 0; i <= l/2; i++ {
    if s[i] != s[l-i-1] {
      return false
    }
  }
  return true
}

func main() {
  fmt.Println(largest(999))
}

