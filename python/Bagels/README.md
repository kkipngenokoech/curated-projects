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

## get_clue() 
  - this function will return a string with the fermi, pico, and bagels clues depending on the guess, and secret number parameters
  - the first case it checks if the guess is correct, it then returns you got it.
  - if the guess is not wrong, the game now has to figure out which clue to give the player.
  - so the code loops trough the length of guess as it compares if the indexed elements compare, if they do return fermi else returns pico if it exists anywhere in the string.
  it then checks if the clue is empty, if it does it returns bagels.
  - `sort()` - returns an alphabetically sorted list of the clues.
  - If the clues are always sorted in alphabetical order, the player can’t be sure which number the Fermi clue refers. This is what we want for the game.
  `return ''.join()` - The join() string method returns a list of strings as a single string joined together. the `''` helps us include space between the two strings.


## is_only_digits()
  - this function checks if the player entered a valid number, guess.
## play_again()
  - this function returns true or false based on if the player wants to play again or not.


## the game:
The print() function calls will tell the player the rules of the game and what the Pico, Fermi, and Bagels clues mean

the first while loop:
infinite while loop that has a condition of True so it will loop forever until a break statement is executed. Inside the infinite loop, you get a secret number from the get_secret_number() function, passing it NUMDIGITS to tell how many digits you want the secret number to have. This secret number is assigned to secret_number. Remember, the value in secret_number is a string not an integer.

you then inform the user the number of guesses he's left with/ has

then you get the players guess.The code keeps looping and asking the player for a guess until the player enters a valid guess. A valid guess has only digits and the same number of digits as the secret number

you then pass the players guess to the clue to return a success or a clue to the player.

the last two if's check if the:
player won or lost and asks the player to guess again or breaks out of the loop if he won

then ask the player if he wants to play again, that's if it returns true; and the game will start all together.
