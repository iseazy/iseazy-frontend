import { v4 as uuid } from 'uuid'
import shuffle from '../../lib/helpers/shuffle'
import card1 from '../../assets/cards/card1.png'
import card2 from '../../assets/cards/card2.png'
import card3 from '../../assets/cards/card3.png'
import card4 from '../../assets/cards/card4.png'
import card5 from '../../assets/cards/card5.png'
import card6 from '../../assets/cards/card6.png'
import card7 from '../../assets/cards/card7.png'
import card8 from '../../assets/cards/card8.png'
import card9 from '../../assets/cards/card9.png'

const Cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9]

class Card {
  id = uuid()
  isFaceUp = false
  src

  constructor(src: string) {
    this.src = src
  }
}

function CardsFactory(): Card[] {
  return shuffle(Cards.map((src) => [new Card(src), new Card(src)]).flat())
}

export default CardsFactory
