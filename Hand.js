class Hand {
  constructor(array){
    this.cards = array
  }

  value() {
    let sum = 0
    this.cards.forEach((card) => {
      sum = sum + card.value
    })
    return sum
  }
}

export default Hand
