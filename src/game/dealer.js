import Player from './player'

class Dealer extends Player {
  constructor(options){
    super(options)
    this.name = 'Shades'
    this.credits = 250
    console.log('Dealer created');
  }
}

export default Dealer
