# GO VARIABLES

## LITERALS

these are the values - the integers, the strings...

they are literally what they say they are.

## CONSTANTS

This are named literals which cannot be updated once they are created.

to declare such literals you use the `const` keyword. `const gravity = 9.8`.

## VARIABLES

these are examples of variables that can be updated.

to declare such variables you use the keyword `var`, the name you will use to refer to the variable and datatype of the variable.

`var multiverse uint32`

## DATA TYPES IN GO

numbers data type:

1. integer
2. float
3. complex

## INFERRING GO TYPES

there's a way of declaring go variables without explicitly telling it the type of data type we are going to use.

for this we are going to use `:=`.
this creates a variable and infers its type based on the value we provided.

`gravity := 9.8`

that means we do away with the var keyword and the datatype.

an alternative way is by `var gravity = 9.8`

## MULTIPLE VARIABLE DECLARATION IN ONE LINE

`var part1, part2 string`.
