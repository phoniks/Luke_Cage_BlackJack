import Deck from './deck'
import Hand from './hand'

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

export default Round
