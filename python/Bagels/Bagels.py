import random
def get_secret_number(secret_number_length):
    numbers = list(range(10))
    random.shuffle(numbers)
    secret_number = ''
    for index in range(secret_number_length):
        secret_number += str(numbers[index])
    return secret_number

def get_clue(guess, secret_number):
    if guess == secret_number:
        return 'You nailed it'
    clue = []
    for index in range(len(guess)):
        if guess[index] == secret_number[index]:
            clue.append('Fermi')
        elif guess[index] in secret_number:
            clue.append('Pico')
    if (len(clue)) == 0:
        return 'Bagels'
    clue.sort()
    return ''.join(clue)

def is_only_digits(numbers):
    if numbers == '':
        return False
    for index in numbers:
        if index not in '0 1 2 3 4 5 6 7 8 9'.split():
            return False
    return True

def play_again():
    print('Do you want to play again?Yes or No')
    return input().lower().startswith('y')

# HOW GAME STARTS HERE NOW
NUMDIGITS = 3
MAXGUESS = 10
print(f'I am thinking of {NUMDIGITS}-digit number, try to guess what it is?')
print('here are some clues:')
print('When I say:    That means:')
print('  Pico         One digit is correct but in the wrong position.')
print('  Fermi        One digit is correct and in the right position.')
print('  Bagels       No digit is correct.')

while True:
    secret_number = get_secret_number(NUMDIGITS)
    print(f'I have thought of a number, you have {MAXGUESS} guesses to get it')
    num_of_guess = 1
    while (num_of_guess < MAXGUESS):
        guess = ''
        while len(guess) != NUMDIGITS or not is_only_digits(guess):
            print('Guess #%s: ' % (num_of_guess))
            guess = input()
        clue = get_clue(guess, secret_number)
        print(clue)
        num_of_guess += 1

        if guess == secret_number:
            break
        if num_of_guess > MAXGUESS:
            print(f'you ran out of guesses, the secret number was {secret_number}')
    if not play_again():
        break
