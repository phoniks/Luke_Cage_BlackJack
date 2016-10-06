import Card from './card'

const SUITS = [1,2,3,4]
const RANKS = [1,2,3,4,5,6,7,8,9,10,11,12,13]

class Deck {
  constructor(){
    this.cards = this.createDeck()
  }

  createDeck() {
    return this.shuffle(
      SUITS.reduce( (memo, suit) => {
        return memo.concat( RANKS.map( rank => new Card( suit, rank)) )
      }, [])
    )
    //
    // return this.shuffle( )
    //
    // let tempDeck = []
    //
    // SUITS.forEach(suit => {
    //   RANKS.forEach(rank => {
    //     tempDeck.push(new Card(suit, rank))
    //   })
    // })
    //
    // console.log('Deck created');
    // this.shuffle(tempDeck)
    // return tempDeck
  }

  cardCount(){
    return this.cards.length
  }

  getNextCard() {
    return this.cards.pop()
  }

  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;

    }
    console.log("deck shuffled");
    return array;
  }
}

export default Deck
