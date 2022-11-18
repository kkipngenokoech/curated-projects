package main

import (
	"fmt"
)

func main() {
	var publisher, writer, artist, title string
	title, writer, artist, publisher = "Mr. GoToSleep", "Tracey Hatchet", "Jewel Tampson", "DizzyBooks Publishing Inc"
	var year, pageNumber int
	year, pageNumber = 1997, 14
	var grade float32
	grade = 6.4
	fmt.Println(title, "written by ", writer, "drawn by ", artist, "was published by ", publisher, " in the year ", year, "and it has ", pageNumber, " pages, it belongs to grade ", grade)

	title, writer, artist, year, pageNumber, grade = "Epic Vol. 1", "Ryan N. Shawn", "Phoebe Paperclips", 2013, 160, 9.0

	fmt.Println(title, "written by ", writer, "drawn ", artist, "was published by ", publisher, " in the year ", year, "and it has ", pageNumber, " pages, it belongs to grade ", grade)
}
