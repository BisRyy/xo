function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid; // +'1' == 1
    playerConfigOverlay.style.display = 'block'
    backdropElement.style.display = 'block'
}

function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none'
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error')
    errorsOutputElement.textContent = ''
    formElement.firstElementChild.lastElementChild.value = ''
}

function savePlayerConfig(event){
    event.preventDefault()
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim()

    // player1Name.textContent = enteredPlayerName

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error')
        errorsOutputElement.textContent = 'Please enter a valid input.'
    }
    
    const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
    updatePlayerDataElement.children[1].textContent = enteredPlayerName
    players[editedPlayer - 1].name = enteredPlayerName
    closePlayerConfig()
}

