let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;

if (sum <= 20) {
  console.log('Do you want to draw a new card? 🙂');
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackjack = true;
} else {
  console.log("You're out of the game! 😭");
}

// CASH OUT!
// state of the game
// make a variable to reflect if a player or not has blackjack
// true or false
console.log(hasBlackjack);
