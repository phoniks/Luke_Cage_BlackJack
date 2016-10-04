const Deck = require('./deck')
const Hand = require('./hand')
const Player = require('./player')
const Dealer = require('./dealer')

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
    // this.getPlayerAction()
    // this.getDealerAction()
    // this.determineWinner()
    // this.settleBets()

    const options = {}
    options.dealer = this.dealer
    options.number = this.number
    options.player = this.player
    // this.getBet()
    }



// getBet(newbet){
//   this.player.bet = newbet
// }

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

module.exports = Round

const player = new Player({name: 'S. Weber'})
const dealer = new Dealer({name: 'Dealer'})

const round = new Round({dealer: dealer,  player: player })

console.log(round);
