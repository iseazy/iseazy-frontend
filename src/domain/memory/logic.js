const isEqualType = (card1, card2) => card1.type === card2.type

const isGameFinished = (cards) => cards.every((card) => card.isFaceUp)

const calculateStatus = ({ selectedCardIds, cards }) => {
  if (isGameFinished(cards)) return 'finished'
  const selectedCards = cards.filter((card) =>
    selectedCardIds.includes(card.id),
  )
  if (selectedCards.length < 2) return 'selecting'
  if (isEqualType(selectedCards[0], selectedCards[1])) return 'match'
  return 'unmatch'
}

const isLastUnmatchedCard = (cards) => {
  const filteredCards = cards.filter((card) => !card.isFaceUp)
  if (filteredCards.length === 1) return true
  return false
}

const getCurrentTimestamp = () => Date.now()

const selectCard = (id, { time, selectedCardIds, cards }) => {
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

const deselectCards = ({ time, selectedCardIds, cards }) => {
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

const isClickableCard = (id, status, cards) => {
  if (status === 'unmatch') return false
  const selectedCard = cards.find((card) => card.id === id)
  if (selectedCard.isFaceUp) return false
  return true
}

export { calculateStatus, selectCard, deselectCards, isClickableCard }
