import Player from './player'
import Dealer from './dealer'
import Round from './round'
import Deck from './deck'

class Game {
  constructor(round, player){
    this.bet = 50
    this.player  = player
    this.round = round
  }
}

export default Game
