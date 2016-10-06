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
const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]

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
    let playerString = ''
    console.log('1',this.round.player.hand);
    console.log('2',this);
    if (this.round.player.hand == this){
      playerString += 'player'
    } else {
      playerString += 'dealer'
    }
    console.log('playerString: ', playerString);
    let card = this.round.deck.getNextCard()
    this.cards.push(card)
    let rank = 'rank'.concat(card.rank)
    console.log('this.cards: ',this.cards);
    let index = this.cards.indexOf(card)
    console.log('index ', index);
    let playerIndex = `${playerString}${index}`
    console.log('playerIndex: ', playerIndex);
    let suits = ['clubs', 'spades', 'diamonds', 'hearts']
    console.log('card.suit ',card.suit);
    let suit_ = suits[card.suit - 1]
    console.log(suit_);
    console.log('rank ' ,rank, 'suit_: ', suit_);
    let keyString = `${playerIndex}`
    let classString = `card ${keyString} ${rank} ${suit_}`
    if (card.suit > 1){
      classString += ' redcard'
      console.log(classString);
    }
    console.log('keystring: ',keyString);
    console.log('elements by class_: ', document.getElementsByClassName(keyString)[0]);
    document.getElementsByClassName(keyString)[0].setAttribute("class",  classString)

    classString = `card-face ${keyString} ${rank} ${suit_}`
    document.getElementsByClassName(keyString)[0].setAttribute("class", classString)
    let ranksForDisplay = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    let suitsForDisplay = ['&clubs;', '&spades;', '&diams;', '&hearts;']
    let rankForDisplay = ranksForDisplay[card.rank -1]
    console.log(rankForDisplay);
    let suitForDisplay = suitsForDisplay[card.suit - 1]
    document.getElementsByClassName(keyString)[0].insertAdjacentHTML('afterbegin', `<h2>${rankForDisplay} ${suitForDisplay}</h2>`);

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
  console.log('this is player0 div: ',document.getElementsByClassName('player0'));
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
