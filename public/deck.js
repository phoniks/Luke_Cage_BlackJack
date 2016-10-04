const Card = require('./card')
const _ = require('lodash')

class Deck {

constructor(){
  this.cards = this.createDeck()
}


createDeck() {

const suits = [1,2,3,4]
const ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14]

  let tempDeck = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
          tempDeck.push(new Card(suit, rank))
          tempDeck = _.shuffle(tempDeck)
      })
    })
    return tempDeck

}

cardCount(){
  return this.cards.length
}

getNextCard() {
  return this.cards.pop()
}



}

module.exports = Deck
