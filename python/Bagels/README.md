In Bagels, a deductive logic game, you
must guess a secret three-digit number
based on clues.
 The clues:
  Pico : when your guess has a correct digit in the wrong place
  Fermi : when your guess has a correct digit in the correct place.
  Bagels : if you guess has no correct digits.

you have 10 tries to guess the secret number.
# import random:
  - Python has a built-in module that you can use to make random numbers.
  - this the random package we have imported.
## get_secret_number() 
  - this function makes a secret number that has only unique digits to it.
  - the parameter we pass as `secret_number_length` is the length of your  secret number.
  - `list(range(10))` - contains a list of zero to 9 [0,1,2,3,4,5,6,7,8,9]
  - `random.shuffle()` - shuffle the order of this the numbers. it just modifies  the list.
N/B : the next lines of code:
  the secret number then will be the first `secret_number_length` of your shuffled length.
  the number to be returned should be a string.