// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

package main

import (
	"fmt"
	"math"
)

func largestPrime(n int) int {
	var i int

	for i := int(math.Sqrt(float64(n))); i >= i; i-- {
		if n%i == 0 && isPrime(i) {
			return i
		}
	}
	return i
}

func isPrime(n int) bool {
	if n <= 1 {
		return false
	}

	for i := int(math.Sqrt(float64(n))); i >= 1; i-- {
		if i == 1 {
			return true
		}
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(largestPrime(600851475143))
}
