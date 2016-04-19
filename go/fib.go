// fib seq with closure
package main

import "fmt"

func fib() func() int {
  first, second := 0, 1
    return func() int {
      ret := first
       first, second = second, first+second
       return ret
    }
}

func main() {
  f := fib()
  for i := 0; i < 10; i++ {
    fmt.Println(f())
  }
}
