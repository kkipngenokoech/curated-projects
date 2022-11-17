package main

import (
	//"fmt"
	"os"
)

type Page struct {
	Title string
	Body  []byte
}

func (p *Page) Save() error {
	fileName := p.Title + ".txt"
	return os.WriteFile(fileName, p.Body, 0600)
}
