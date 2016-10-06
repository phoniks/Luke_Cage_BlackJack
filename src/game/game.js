import Player from './player'
import Dealer from './dealer'
import Round from './round'

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

export default Game
