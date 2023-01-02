let player = {
    name: "Chips",
    chips: 145
}


let cards = []
let sum =  0;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");





playerEl.textContent = player.name + ": $" + player.chips; 


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) + 1;
    if(randomNumber === 1) {
        return 11;
    } else if(randomNumber >= 11){
        return 10;
    } else{
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard= getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {
    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }



    sumEl.textContent = "Sum: " + sum;
    
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "Whoohoo! You got the BlackJack!"
        hasBlackJack = true;
    } else {
        message = "You lost the game!"
        isAlive = false;
    }
    
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);

        renderGame();
    }


}