let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
] 

const playerConfigOverlay = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop')
const formElement = document.querySelector('form')
const errorsOutputElement = document.getElementById('config-error')
const gameAreaElement = document.getElementById('active-game')
const gameConfig = document.getElementById('game-configuration')

// Buttons
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn')
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn')
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')
const startNewGameBtnElement = document.getElementById('start-game-btn')
// const gameFieldELements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById('game-board')
const activePlayerName = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig)
editPlayer2BtnElement.addEventListener('click', openPlayerConfig)

cancelConfigBtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)

startNewGameBtnElement.addEventListener('click', startNewGame)

// for(const gameFieldELement of gameFieldELements){
//     gameFieldELement.addEventListener('click', selectGameField)
// }

gameBoardElement.addEventListener('click', selectGameField)