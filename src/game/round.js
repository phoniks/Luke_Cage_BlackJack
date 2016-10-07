import Deck from './deck'
import Hand from './hand'
import $ from 'jquery'
import Player from './player'

class Round {
  constructor(options){
    this.number = (options.number +1) || 1
    this.dealer = options.dealer
    this.player = options.player
    this.deck = options.deck
    this.start()
    console.log('Round started')

  }

  start(){

    this.deal()
    console.log('hands: ', this.player.hand, this.dealer.hand)
    // this.getPlayerAction()
    // this.getDealerAction()
    // this.determineWinner()
    // this.settleBets()
    // this.clearFields()

    const options = {}
    options.dealer = this.dealer
    options.number = this.number
    options.player = this.player
    }



  getDealerAction(){
    if (this.dealer.hand.value() < 16){
      return this.dealer.hit()
    } else {
      return this.dealer.stay()
    }
  }

  determineWinner(){
    let playerHand = this.player.hand.value()
    let dealerHand = this.dealer.hand.value()
    if ( dealerHand  > 21|| playerHand > dealerHand){
      alert('Player wins!')
    } else if (playerHand < dealerHand){
      alert('Dealer wins')
    } else if (dealerHand.isBlackJack()){
      alert('BlackJack Fool!')
    } else if (playerHand.isBlackJack()){
      alert('Luke Cage BlackJack! Sweet Christmas!')
    }
  }

  settleBets(){
    console.log('this is player0 div: ',document.getElementsByClassName('player0'));
    console.log('this is where bets are settled');
  }

  deal(){
    let playerHand =  this.player.hand = new Hand(this)
    let dealerHand =  this.dealer.hand = new Hand(this)
    this.deck.cards.pop()
    for (let i=0; i<2; i++){
      this.player.hand.addCard()
      this.dealer.hand.addCard()
    }
    if (playerHand.value() === 21 && dealerHand.value() === 21){
      alert("You pushed! Sweet Christmas!")
    } else if (playerHand.value() === 21){
      alert('BlackJack!')
    } else if (dealerHand.value() === 21){
      alert('Shades is shady!')
    }
  }

  clearFields() {
    $( '[id$=field]' ).empty()
  }
}



export default Round
