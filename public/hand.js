const Deck = require('./deck')

class Hand {
  constructor(round){
    this.cards = []
    this.round = round
    this.stay = false
  }

  addCard() {
    let card = this.round.deck.getNextCard()
    this.cards.push(card)
    console.log(this.cards)
  }
  clearCards() {
    this.cards = []
    }
  }

module.exports = Hand
