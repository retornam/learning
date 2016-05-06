// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

package main

import (
	"fmt"
)

func primesBelowN(n int) int {
	var s int
	for i := 2; i < n; i++ {
		if isPrime(i) {
			s += i
		}
	}
	return s
}

func isPrime(n int) bool {
	var d = 2
	for n > d {
		if n%d == 0 {
			return false
		}
		d++
	}
	return true
}

func main() {
	fmt.Println(primesBelowN(2000000))
}
