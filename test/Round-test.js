const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let round;
  let card1, card2, card3;

  beforeEach( () => {
    round = new Round();
    card1 = new Card(1, 'Question 1', ['a', 'b', 'c'], 'a');
    card2 = new Card(2, 'Question 2', ['d', 'e', 'f'], 'e');
    card3 = new Card(3, 'Question 3', ['g', 'h', 'i'], 'i');
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return current card being played', () => {
    new Deck([card1, card2, card3]);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(this.currentCard);
  })

  it('should create a new Turn instance when a guess is made', () => {
    round.takeTurn();
    expect(round.takeTurn()).to.be.an.instanceof(Turn);
  });

  it('should update the turn count regardless if guess is correct or incorrect', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should return the next card as the current card', () => {
    round.takeTurn();
    expect(round.currentCard).to.equal(round.deck[1])
  });

  it('should add incorrect guesses to an array', () => {
    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal(['spleen']);
  });

  it.skip('should return feedback on the guess', () => {
    round.takeTurn();
  })

})
