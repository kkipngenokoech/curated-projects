# HELLO WORLD

go programming language is a battery included programming language. it has a web server already included in it.

The net/http package from the standard library contains all functionalities about the HTTP protocol. This includes (among many other things) an HTTP client and an HTTP server.

N/B: to install go you : `sudo apt install go-lang`.

## go build nameoffile.go

this creates an executable file of our go file.

to execute it you just `./nameofthefile`.

## go run nameoffile.go

you can also run your file this way.

go run nameoffile.go is preferred since we may need to make changes to our file more often than not and this would mean we need to generate the executables every other time.

go run compiles the code and executes it.

the first line of our go files normally has a `package nameOfPackage`.

this normally tells our compile which package our file belongs to.

if the package declaration is  a main, then the program will be compiled into an executable.

every main package always start at the main function for its execution.

## white spaces

go generally ignores white spaces.

## package aliases

we can provide package alias name by adding them to pre names of the packages.

```go
import (
    p "fmt"
)
```

so you will be using the p instead of fmt.

## Go Doc

this allows us to extract documentation for packages and allows us to iew it.
