
let playerHand = []
let dealerHand = []
let playerBank = [1000]
let dealerBank = [5000]
let globalDeck = createDeck()
let contPlaying = true
let playerWin = ''
let bet = 0
let endGame = false
let isTie = false
let hitStay = ''

//Each round is executed in the roundCycle function:
const roundCycle = () => {
  playerHand = []
  dealerHand = []
  isTie = false
  contPlaying = true
  endGame = false
  bet = 0
  displayBank()
  placeBet()
  dealInit()
  console.log(hand.printHand(dealerHand))
  console.log(hand.printHand(playerHand, "p"))
  checkBJ( handTotal(playerHand) )
  hitOrStay()
  if(isTie) return endGame
  bettingOutcome()
  promptToContinue()
  return endGame
}

//RoundCycle functions in order of operation:
const displayBank = () => {
  let output = "You have $"
  const printBank = (item) => {
    if (typeof item == "number") {
      output += item + ", "
    }
  }
  output += "\n"
  return output
}

const placeBet = () => {

    bet = playerBank[1].shift()
  }
}

const dealInit = () => {
  checkDeckLength()
  addCard(playerHand)
  addCard(playerHand)
  addCard(dealerHand)
  addCard(dealerHand)
}

const checkBJ = (handTotal) => {
  if (handTotal == 21) {
    determineWinner()
    playerWin = true
  }
}

const hitOrStay = () => {
  while (contPlaying == true) {
    hitStay = diag.question("Hit or Stay? (h/s): ")
    spacer()
    if (hitStay !== 'h' && hitStay !== 's') {
      console.log("Invalid input, try again")
      continue
    } else if (hitStay == 'h') {
      addCard(playerHand)
      console.log(hand.printHand(dealerHand))
      console.log(hand.printHand(playerHand, "p"))
      if (handTotal(playerHand) > 21) {
        console.log('Bust! Sorry, you lose')
        determineWinner()
        playerWin = false
      }
    } else if (hitStay == 's') {
      console.log("Dealer's turn:\n")
      dealerLogic(playerHand, dealerHand)
      console.log(hand.printHand(dealerHand, "d"))
      determineWinner()
    }
  }
}

const bettingOutcome = () => {
  if (playerWin == true) {
    if (isNaN(bet)) {
      playerBank[1].unshift(bet)
      if (dealerBank.length > 0) {
        playerBank[1].unshift(dealerBank.shift())
      } else {
        playerBank[0] = _.add(playerBank[0], 10)
      }
    } else {
      playerBank[0] = _.add(playerBank[0], bet)
    }
  } else if (playerWin == false) {
    if (playerBank[1].length == 0) {
      console.log(col.bgYellow.black("\n     You ain't got no money take your broke ass home!\n\n                 Game over"))
      process.exit()
    }
    if (isNaN(bet)) {
      dealerBank.unshift(bet)
    } else {
      playerBank[0] = _.subtract(playerBank[0], bet)
    }
  }
}

const promptToContinue = () => {
}

const dealerLogic = (playerHand, dealerHand) => {
  while (handTotal(playerHand) > handTotal(dealerHand)) {
    addCard(dealerHand)
  }
}

const determineWinner = () => {
  if (handTotal(playerHand) < handTotal(dealerHand) && handTotal(dealerHand) <= 21) {
    playerWin = false
  }
  else if ((handTotal(playerHand) > handTotal(dealerHand) && (handTotal(dealerHand) < 21 && handTotal(playerHand) < 21)) ||  handTotal(playerHand) <= 21 && handTotal(dealerHand) > 21) {
    playerWin = true
  } else if (handTotal(playerHand) == handTotal(dealerHand)) {
    if (isNaN(bet)) {
      playerBank[1].unshift(bet)
    }
    isTie = true
  }
  contPlaying = false
}

const checkDeckLength = () => {
  if (globalDeck.length < 10) {
    globalDeck = createDeck()
  }
}

const addCard = (hand) => {
  hand.push(globalDeck.shift())
}

const handTotal = (hand) => {
    let total = 0
    for (let card of hand) {
      if (isNaN(card.rank)) {
        total += card.rank[1]
      } else {
        total += card.rank
      }
    }
    for (let aceSearch of hand) {
      if (total > 21) {
        if (aceSearch.rank[0] == "A") {
          total -= 10
        }
      }
    }
  return total
}

//Tests
const theDeckLength = () => {
  return globalDeck.length
}
