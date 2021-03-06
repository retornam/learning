// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

package main

import (
	"fmt"
)

func multiples(n int) (s int) {
	for i := 0; i < n; i++ {
		if i%3 == 0 || i%5 == 0 {
			// s is the sum of the multiples
			s += i
		}
	}
	return s
}

func main() {
	fmt.Println(multiples(1000))
}
