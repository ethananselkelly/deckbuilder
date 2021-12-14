class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.value = undefined
  }

  addValue() {
    if (this.rank === 'J') {
      this.value = 11
    } else if (this.rank === 'Q') {
      this.value = 12
    } else if (this.rank === 'K') {
      this.value = 13
    } else if (this.rank === 'A') {
      this.value = 14
    } else {
      this.value = this.rank
    }
  }
}

export default Card


