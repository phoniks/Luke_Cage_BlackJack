
const createDeck = () => {

const suits = [1,2,3,4]
const ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14]

  let deck = []
  let tempDeck = []
  let newCard = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
        newCard = new Card(suit, rank)
          tempDeck.push(newCard)
          tempDeck = _.shuffle(tempDeck)
      })
    })
    deck = deck.concat(tempDeck)

  return deck
}
