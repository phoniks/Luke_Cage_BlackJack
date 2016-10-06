class Game {
  constructor(options){
    this.user = options
    this.bet = 50
    this.init()
  }

  init(){
      let player = new Player({name: "Carl Lucas"})
      let dealer = new Dealer({name: 'Dealer'})
      let round = new Round({dealer: dealer,  player: player })
      return round
    }
}

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
    this.bet = options.bet
    console.log('Player created');
  }

  hit(){
    this.hand.addCard()
  }

  stay(){
    this.hand.stay = true
  }

  betMore(){
    this.bet += 25
  }

}

class Dealer extends Player {
  constructor(options){
    super(options)
    this.name = 'Shades'
    this.credits = 250
    console.log('Dealer created');
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
  console.log("deck shuffled");
  return array;
}

class Deck {

constructor(){
  this.cards = this.createDeck()
}


createDeck() {

const suits = [1,2,3,4]
const ranks = [0,2,3,4,5,6,7,8,9,10,11,12,13]

  let tempDeck = []
    suits.forEach(suit => {
      ranks.forEach(rank => {
          tempDeck.push(new Card(suit, rank))
      })
    })
    console.log('Deck created');
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
    console.log('Hand created');
  }

  addCard() {
    let card = this.round.deck.getNextCard()
    this.cards.push(card)
    let rank = []
    this.cards.forEach(card => {
      let rawrank = card.rank
      let string = '0'
      if(rawrank > 10 || rawrank < 2){
        rank.push(rawrank)
        } else{
          rank.push(string.concat(rawrank.toString()))
        }
      })
    let index = this.cards.indexOf(card)
    let whatsit = `player${index}`

    let twoDigit = rank
    let classNumber = card.suit.toString().concat(twoDigit)
    console.log(whatsit);
    console.log(classNumber);
    console.log(document.getElementsByClassName(whatsit, classNumber));
    document.getElementsByClassName(whatsit, classNumber).style.visibility = "visible"
    }

  clearCards() {
    this.cards = []
    }

  value() {
    let total = 0
    this.cards.forEach(card =>{
      if(card.rank === 0){
        total += 11
      } else {
      total += card.rank
      }
    })
    console.log('total', total);
    return total
  }
}


class Round {
  constructor(options){
    this.number = (options.number +1) || 1
    this.dealer = options.dealer
    this.player = options.player
    this.start()
    console.log('Round started');
  }

  start(){
    this.deck = new Deck()

    this.deal()
    console.log('hands: ', this.player.hand, this.dealer.hand)
    this.getPlayerAction()
    this.getDealerAction()
    this.determineWinner()
    this.settleBets()

    const options = {}
    options.dealer = this.dealer
    options.number = this.number
    options.player = this.player
    }

getActions(player, dealer){
  while(this.player.hand.stay === false || this.dealer.hand.stay === false ){
    if(player.hand.stay === false) {
      getPlayerAction()
    }

    if(dealer.hand.stay === false){
      getDealerAction()
    }
  }
}

getPlayerAction(){
  if (this.player.hand.value() < 16){
    console.log('PLAYER action')
    return this.player.hit()
  } else {
    return this.player.stay()
  }
}

getDealerAction(){
  if (this.dealer.hand.value() < 16){
    console.log('Dealer action')
    return this.dealer.hit()
  } else {
    return this.dealer.stay()
}
}

determineWinner(){
  let playerHand = this.player.hand.value()
  let dealerHand = this.dealer.hand.value()
  if ( dealerHand  > 21|| playerHand > dealerHand){
    console.log('Player wins!')
  } else if (playerHand < dealerHand){
    console.log('Dealer wins')
  }
}

settleBets(){
  console.log('this is where bets are settled');
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
}

function displayPlayerCard () {

}



function increaseBet(player){
  player.betMore()
}

function start(){
  const game = new Game('Player')
  document.getElementById("deal").setAttribute("onclick", "startRound()");
  return game
}

function startRound(){
  new Round()
}
