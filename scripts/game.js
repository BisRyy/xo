function resetGameStatus(){
    if(activePlayer === 1)
        activePlayer = 0;
    else
        activePlayer = 1;  

    currentRound = 1;
    isGameOver = false
    gameOverElement.firstElementChild.innerHTML = 'YOU WON <span id="winner-name">PLAYER NAME</span>!';

    gameOverElement.style.display = 'none'
    
    let gameBoardIndex = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            gameBoardElement.children[gameBoardIndex].textContent = ''
            gameBoardElement.children[gameBoardIndex].classList.remove('disabled')
            gameBoardIndex++;
        }
    }
}

function startNewGame(){
    if(players[0].name === '' || players[1].name === ''){
        alert("Please Enter custom Name for Both Players")
        return
    }
    gameConfig.style.display = 'none'
    resetGameStatus();

    activePlayerName.textContent = players[activePlayer].name
    gameAreaElement.style.display = 'block'
}

function switchPlayer(){
    if(activePlayer === 0)
        activePlayer = 1
    else
        activePlayer = 0

    activePlayerName.textContent = players[activePlayer].name
}

function selectGameField(event){
    if(event.target.tagName != 'LI' ||  isGameOver)
        return
    
    const selectedField = event.target
    const selectedRow = selectedField.dataset.row - 1
    const selectedColumn = selectedField.dataset.col - 1
    
    if( gameData[selectedRow][selectedColumn] > 0)
        return

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled')
    
    gameData[selectedRow][selectedColumn] = activePlayer + 1

    const winnerId = checkGameOver()
    
    if(winnerId != 0){
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer()
}

function checkGameOver(){
    // ROW
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2] 
            ) {
            return gameData[i][0]
        }
    }

    // Column
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i] 
            ) {
            return gameData[0][i]
        }
    }
    
    // DIAGONALS
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[0][0] === gameData[2][2] 
        ) {
        return gameData[0][0]
    }

    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[2][0] === gameData[0][2]
        ) {
        return gameData[2][0]
    }

    if(currentRound === 9){
        return -1
    }

    return 0;
}

function endGame(winnerId){
    gameOverElement.style.display = 'block'
    isGameOver = true
    gameConfig.style.display = 'block'
    if(winnerId > 0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name
    }else{
        gameOverElement.firstElementChild.textContent = "It's a Draw"
    }
}