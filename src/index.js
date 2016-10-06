import $ from 'jquery'
import Game from './game/game'
import Player from './game/player'

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
  console.log("player ---->", game.player)
}

function setHit(){
  document.getElementById("hit").setAttribute("onclick", "hit()");
}

$(document).ready( () => {
  $('#deal').click( event => {
    start()
    setHit()
  })
})
