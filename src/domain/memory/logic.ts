import type { State } from '../hooks/useMemory'

type Card = State['cards'][number]
type Status = 'finished' | 'selecting' | 'match' | 'unmatch'

const isEqualType = (card1: Card, card2: Card) => card1.src === card2.src

const isGameFinished = (cards: Card[]) => cards.every((card) => card.isFaceUp)

const calculateStatus = ({
  selectedCardIds,
  cards,
}: Omit<State, 'time'>): Status => {
  if (isGameFinished(cards)) return 'finished'
  const selectedCards = cards.filter((card: Card) =>
    selectedCardIds.includes(card.id),
  )
  if (selectedCards.length < 2) return 'selecting'
  if (isEqualType(selectedCards[0], selectedCards[1])) return 'match'
  return 'unmatch'
}

const isLastUnmatchedCard = (cards: Card[]) => {
  const filteredCards = cards.filter((card) => !card.isFaceUp)
  if (filteredCards.length === 1) return true
  return false
}

const getCurrentTimestamp = () => Date.now()

const selectCard = (
  id: string,
  { time, selectedCardIds, cards }: State,
): State => {
  return {
    time: {
      start: time.start || getCurrentTimestamp(),
      end: isLastUnmatchedCard(cards) ? getCurrentTimestamp() : null,
    },
    selectedCardIds:
      selectedCardIds.length < 2 ? [...selectedCardIds, id] : [id],
    cards: cards.map((card) => {
      if (card.id === id)
        return {
          ...card,
          isFaceUp: true,
        }
      return card
    }),
  }
}

const deselectCards = ({ time, selectedCardIds, cards }: State): State => {
  return {
    time,
    selectedCardIds: [],
    cards: cards.map((card) => {
      if (selectedCardIds.includes(card.id)) {
        return {
          ...card,
          isFaceUp: false,
        }
      }
      return card
    }),
  }
}

interface IClickableCard {
  id: string
  status: Status
  cards: Card[]
}

const isClickableCard = ({ id, status, cards }: IClickableCard) => {
  if (status === 'unmatch') return false
  const selectedCard = cards.find((card) => card.id === id)
  if (!selectedCard) throw new Error('Card not found')
  if (selectedCard.isFaceUp) return false
  return true
}

export { calculateStatus, selectCard, deselectCards, isClickableCard }
