const gameStatus = document.querySelector('./game--status')
let gameActive = true;
let currentPlayer = 'X'
let gameState =  ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => {
    `player ${currentPlayer} has won!`
}
const drawMessage = () => {
    `game has ended in a draw!`
}
const currentPlayerTurn = () => {
    `it's ${currentPlayer}'s turn`
}
statusDisplay.innerHTML = currentPlayerTurn();
const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function handleCellPlayed (clickedCell, clickedCellIndex)
{
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}
function handlePlayerCange () {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    statusDisplay.innerHTML = currentPlayerTurn()
}

function handleResultValidation () {
    let roundWon = false
    for (let index = 0; index <= 7; index++)
    {
        const winCondition = winningCondition[index]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if (a === '' || b === '' || c === '')
        {
            continue
        }
        if (a === b && b === c)
        {
            roundWon = true
            break
        }

    }
    if (roundWon){
        statusDisplay.innerHTML = winningMessage()
        gameActive = false
        return
    }
    let roundDraw = !gameState.includes('')
    if (roundDraw){
        statusDisplay.innerHTML = drawMessage()
        gameActive = false
        return
    }
    handlePlayerCange()
}
function handleCellClicked (clickedCellEvent){
    const clickedCell = clickedCellEvent.target
    const clickedCellEvent = parseInt(clickedCell.getAttribute('data-cell-index'))
    if (gameState[clickedCellIndex] !== !gameActive) {
        return
    }
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
}
function handleRestartGame (){
    gameActive = true
    currentPlayer = 'X'
    gameState = ["","", "", "", "", "", "", "", ""]
    statusDisplay.innerHTML = currentPlayerTurn()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '')
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);