import random
def get_secret_number(secret_number_length):
    numbers = list(range(10))
    random.shuffle(numbers)
    secret_number = ''
    for index in range(secret_number_length):
        secret_number += str(numbers[index])
    return secret_number
