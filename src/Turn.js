const Card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
   return this.guess
  }

  // returnCard() {
  //  return this.card
  // }

  // evaluateGuess() {
  //   if (this.card.correctAnswer === this.guess) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  // }

  // giveFeedBack() {
  //   if (this.evaluateGuess()) {
  //       return `correct!`
  //     } else {
  //       return `incorrect!`
  //     }
  //   }
  // }

}

module.exports = Turn;
