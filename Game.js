import Deck from './Deck.js'
import Card from './Card.js'
import Hand from './Hand.js'

// GAME START

// Your game logic here.
let newDeck = new Deck
newDeck.cards.forEach((card) => {
    card.addValue()
})

console.log("GAME START")
console.log("There are ", newDeck.cards.length, " in the deck")
const dealFour = () => {
let output = []
    for (let i = 0; i <4; i++) {
        output.push(newDeck.deal())
    }
    return output
}



let ethan = dealFour()
let ethanHand = new Hand(ethan)
let denny = dealFour()
console.log(denny)
let dennyHand = new Hand(denny)
console.log(dennyHand)

console.log("Ethan was dealt the following cards:", 
ethanHand.cards[0].suit + ethanHand.cards[0].rank + ", ",
ethanHand.cards[1].suit + ethanHand.cards[1].rank + ", ",
ethanHand.cards[2].suit + ethanHand.cards[2].rank + ", ",
ethanHand.cards[3].suit + ethanHand.cards[3].rank + ", ",)

console.log("Denny was dealt the following cards:",
dennyHand.cards[0].suit + dennyHand.cards[0].rank + ", ",
dennyHand.cards[1].suit + dennyHand.cards[1].rank + ", ",
dennyHand.cards[2].suit + dennyHand.cards[2].rank + ", ",
dennyHand.cards[3].suit + dennyHand.cards[3].rank + ", ",)

console.log("Ethan's hand value:", ethanHand.value())
console.log("Denny's hand value:", dennyHand.value())

if (ethanHand.value() > dennyHand.value()){
    console.log("Ethan wins!")
} else if (ethanHand.value() < dennyHand.value()){
    console.log("Denny wins!")
} else {
    console.log("Tie!")
}


debugger