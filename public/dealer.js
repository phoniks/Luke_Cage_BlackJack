const Player = require('./player')

class Dealer extends Player {
  constructor(options){
    super(options)
    this.name = 'Shades'
    this.credits = 250
  }
}

module.exports = Dealer
