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
