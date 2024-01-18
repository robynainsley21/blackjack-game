//deciding the logic for the numbers
let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

//DOM elements
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

const startGame = () => {
  renderGame();
}

const renderGame = () => {
  //renders the first and the second cards drawn
  cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`

  //renders all the cards drawn
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) message = "Do you want to draw a new card?";
  else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
};

const newCard = () => {
  console.log('new card')
  let newCard = 6;
  sum += newCard
  renderGame()
}