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

export default Player
