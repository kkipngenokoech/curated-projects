function computer_choice(list_of_choices)
{
    const random_index = Math.random()*list_of_choices.length
    const random_item = list[random_index]
    return random_item
}
const choice_list = ["ROck","paper","scissors"]
const get_computer_choice = computer_choice(choice_list)
function playround (computerselection, playerselection)
{
    if (get_computer_choice === "rock")
    {
        if (playerselection === "scissors")
        {
            return `you lose! ${get_computer_choice} beats ${playerselection}`;
        }
        else if (playerselection === "paper")
        {
            return `you win!yay, ${playerselection} beats ${get_computer_choice}`;
        }
        else
        {
              return `you both chose ${get_computer_choice}, its a draw`;
        }
    }
    else if (get_computer_choice === "paper")
    {
        if (playerselection === "rock")
        {
            return `you lose! ${get_computer_choice} beats ${playerselection}`;
        }
        else if (playerselection === "scissors")
        {
            return `you win ${playerselection} beats ${get_computer_choice}`;
        }
        else
        {
              return `you both chose ${get_computer_choice}, its a draw`;
        }
    }
    else
    {
        if (playerselection === "rock")
        {
            return `you win!, ${playerselection} beats ${get_computer_choice}`;
        }
        else if (playerselection === "paper")
        {
            return `you lose!, ${get_computer_choice} beats ${playerselection}`;
        }
        else
        {
            return `let's call it a draw, ${playerselection} equals ${get_computer_choice}`;
        }
    }
}

function test_game()
{
    const player_selection = document.getElementById('playerchoice').value
    alert(`you chose ${player_selection}`)
}