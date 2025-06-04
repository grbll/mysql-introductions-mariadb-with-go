package main

import "time"

func main() {
	for {
		println("hi")
		time.Sleep(2 * time.Second)
	}
}
