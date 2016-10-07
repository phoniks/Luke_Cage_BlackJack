import $ from 'jquery'
import Game from './game/game'
import Player from './game/player'
import Round from './game/round'
import Deck from './game/deck'
import Dealer from './game/dealer'
import Hand from './game/hand'

let deck = new Deck()
let player = new Player({name: "Carl Lucas", bet: 50})
let dealer = new Dealer({name: 'Dealer'})



function displayDealerCard () {
}

function displayPlayerCard () {

}

function increaseBet(player){
  player.betMore()
}

function setHit(){
  document.getElementById("hit").setAttribute("onclick", "hit()");
}

function start(){
  let round = new Round({dealer: dealer,  player: player, deck: deck })
  new Game(round, player)
}

function playerHit(){
  document.getElementById('hit').addEventListener('click', player.hit())
}

function playerDouble(){
  document.getElementById('double').addEventListener('click', player.double())
}

function playerStay(){
  document.getElementById('double').addEventListener('click', player.stay())
}

$(document).ready( () => {

  $('#deal').click( event => {
    start()
  })

  $('#hit').click( event => {
    playerHit()
  })

  $('#double').click(event => {
    playerDouble()
  })

  $('#stay').click(event => {
    playerStay()
  })
})
