class Card {
 constructor (suit, rank) {
   this.suit = suit
   this.rank = rank
 }

}

class Player {
  constructor(options){
    this.name = options.name || 'Carl Lucas'
    this.hand = {}
    this.credits = 500
    this.bet = 50
  }

  hit(){
    this.hand.addCard()
  }

  stay(){
    this.hand.stay = true
  }

}

class Dealer extends Player {
  constructor(options){
    super(options)
    this.name = 'Shades'
    this.credits = 250
  }
}

function shuffle(array) {
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

  return array;
}

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
      })
    })
    shuffle(tempDeck)
    return tempDeck

}

cardCount(){
  return this.cards.length
}

getNextCard() {
  return this.cards.pop()
}

}

class Hand {
  constructor(round){
    this.cards = []
    this.round = round
    this.stay = false
  }

  addCard() {
    let card = this.round.deck.getNextCard()
    this.cards.push(card)
  }
  clearCards() {
    this.cards = []
    }
}


class Round {
  constructor(options){
    this.number = (options.number +1) || 1
    this.dealer = options.dealer
    this.player = options.player
    this.start()
  }

  start(){
    this.deck = new Deck()

    this.deal()
    console.log(this.player.hand, this.dealer.hand)
    // this.getPlayerAction()
    // this.getDealerAction()
    // this.determineWinner()
    // this.settleBets()

    const options = {}
    options.dealer = this.dealer
    options.number = this.number
    options.player = this.player
    }


deal(){
  this.player.hand = new Hand(this)
  this.dealer.hand = new Hand(this)
  this.deck.cards.pop()
  for (let i=0; i<2; i++){
    this.player.hand.addCard()
    this.dealer.hand.addCard()
  }
 }
}

function displayDealerCard () {
  document.
}

function displayPlayerCard () {

}

function newRound() {
  let player = new Player({name: 'S. Weber'})
  let dealer = new Dealer({name: 'Dealer'})
  let round = new Round({dealer: dealer,  player: player })
  return round
}
