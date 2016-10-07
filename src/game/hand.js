class Hand {
  constructor(round){
    this.cards = []
    this.round = round
    this.stay = false
    console.log('Hand created');
  }


  addCard() {
    let playerString = ''
    // console.log('1',this.round.player.hand);
    // console.log('2',this);
    if (this.round.player.hand == this){
      playerString += 'player'
    } else {
      playerString += 'dealer'
    }
    // console.log('playerString: ', playerString);
    let card = this.round.deck.getNextCard()
    this.cards.push(card)
    let rank = 'rank'.concat(card.rank)
    // console.log('this.cards: ',this.cards);
    let index = this.cards.indexOf(card)
    // console.log('index ', index);
    let playerIndex = `${playerString}${index}`
    console.log('playerIndex: ', playerIndex);
    let suits = ['clubs', 'spades', 'diamonds', 'hearts']
    // console.log('card.suit ',card.suit);
    let suit_ = suits[card.suit - 1]
    // console.log(suit_);
    // console.log('rank ' ,rank, 'suit_: ', suit_);
    let keyString = `${playerIndex}`
    let classString = `card ${keyString} ${rank} ${suit_}`

    console.log('keystring: ',keyString);
    console.log('elements by class_: ', document.getElementsByClassName(keyString)[0]);
      console.log(document.getElementById('player-field'))
    classString = `card-face ${keyString} ${rank} ${suit_}`

    document.getElementsByClassName(keyString)[0].setAttribute("class",  classString)
    let ranksForDisplay = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
    let suitsForDisplay = ['&clubs;', '&spades;', '&diams;', '&hearts;']
    let rankForDisplay = ranksForDisplay[card.rank -1]
    // console.log(rankForDisplay);
    let suitForDisplay = suitsForDisplay[card.suit - 1]
    document.getElementsByClassName(keyString)[0].insertAdjacentHTML('afterbegin', `<h2>${rankForDisplay} ${suitForDisplay}</h2>`);

    }


  clearCards() {
    this.cards = []
  }

  value() {
    let total = 0
    this.cards.forEach(card =>{
      if(card.rank === 14){
        total += 11
      } else if (card.rank > 10){
        total += 10
      } else {
      total += card.rank
      }
    })
    // console.log('total', total);
    return total
  }

  isBust() {
    if (this.value > 21) {
      return true
    }
  }

  isBlackJack() {
    if (this.value === 21){
      return true
    }
  }
}

export default Hand
