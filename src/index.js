import $ from 'jquery'
import Game from './game/game'

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

$(document).ready( () => {
  $('#deal').click( event => start() )
})
