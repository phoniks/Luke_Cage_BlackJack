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
    if(this.hand.value() > 21){
      alert("Harlem's Paradise does not belong to you hahaha!!")
    }
  }

  stay(){
    this.hand.stay = true
    this.hand.round.getDealerAction()
    console.log('stay');
  }

  betMore(){
    this.bet += 25
  }

  betLess(){
    this.bet -= 25
  }


  double(){
    this.bet += this.bet
    this.hand.addCard()
    this.hand.stay = true
    this.hand.round.getDealerAction()
    console.log(this.bet);
  }

}

export default Player
