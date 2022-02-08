import { v4 as uuid } from 'uuid'
import shuffle from '../../lib/helpers/shuffle'

const CardTypes = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
]

class Card {
  id = uuid()
  isFaceUp = false
  type

  constructor(type) {
    this.type = type
  }
}

function CardsFactory() {
  return shuffle(
    CardTypes.map((type) => [new Card(type), new Card(type)]).flat(),
  )
}

export default CardsFactory
