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

module.exports = Player
