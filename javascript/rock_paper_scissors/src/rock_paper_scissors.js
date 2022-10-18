function computer_choice(list_of_choices)
{
    const random_index = Math.random()*list_of_choices.length
    // console.log (random_index) - used for debugging
    const random_item = list_of_choices[Math.floor(random_index)]
    // console.log(random_item) - used for debugging
    return random_item
}
const choice_list = ["rock","paper","scissors"]
const get_computer_choice = computer_choice(choice_list)
function playround (computerselection, playerselection)
{
    if (computerselection === "rock")
    {
        if (playerselection === "scissors")
        {
            return `you lose! ${computerselection} beats ${playerselection}`;
        }
        else if (playerselection === "paper")
        {
            return `you win!yay, ${playerselection} beats ${computerselection}`;
        }
        else
        {
              return `you both chose ${computerselection}, its a draw`;
        }
    }
    else if (computerselection === "paper")
    {
        if (playerselection === "rock")
        {
            return `you lose! ${computerselection} beats ${playerselection}`;
        }
        else if (playerselection === "scissors")
        {
            return `you win ${playerselection} beats ${computerselection}`;
        }
        else
        {
              return `you both chose ${computerselection}, its a draw`;
        }
    }
    else
    {
        if (playerselection === "rock")
        {
            return `you win!, ${playerselection} beats ${computerselection}`;
        }
        else if (playerselection === "paper")
        {
            return `you lose!, ${computerselection} beats ${playerselection}`;
        }
        else
        {
            return `let's call it a draw, ${playerselection} equals ${computerselection}`;
        }
    }
}

const submit = document.querySelector('#confirmChoice')
const output = document.querySelector('#output')
submit.addEventListener('click', () => {
    const playerInput = document.getElementById('playerChoice').value.toLowerCase()
    if(choice_list.includes(playerInput))
    {
        output.innerHTML = (playround(get_computer_choice, playerInput))
    }
    else
    {
        output.innerHTML = (`Kindly choose Rock, paper or scissors, ${playerInput} is not part of the choices`)
    }
    // alert(playerInput)   - used for debugging
    // alert(playround(get_computer_choice,playerInput)) - used for debugging
})
// const playerChoice = prompt("enter your choice:")
console.log(playround(get_computer_choice, playerChoice))
// console.log(get_computer_choice) - used for debugging