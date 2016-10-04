
const _ = require('lodash')


class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }
  print () {
    let rankReturn = ""
    if (isNaN(this.rank)) {
      rankReturn = this.rank[0]
      return rankReturn + ' of ' + this.suit
    } else {
      return this.rank + ' of ' + this.suit
    }
	}
}


const heart = '♥️ '
const spade = '♠️ '
const diamond = '♦️ '
const club = '♣️ '

const ace = ['A',11]
const king = ['K',10]
const queen = ['Q',10]
const jack = ['J',10]

const suits = [heart,spade,diamond,club]
const ranks = [ace,2,3,4,5,6,7,8,9,10,jack,queen,king]

const createDeck = () => {
  let deck = []
  for (let i = 0; i < 4; i++) {
    let tempDeck = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
          tempDeck.push(new Card(suit, rank))
          tempDeck = _.shuffle(tempDeck)
      })
    })
    deck = deck.concat(tempDeck)
  }


  return deck
}

module.exports = createDeck
