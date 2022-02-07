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

const selectCard = (id, { selectedCardIds, cards }) => {
  return {
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

const deselectCards = ({ selectedCardIds, cards }) => {
  return {
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

export { calculateStatus, selectCard, deselectCards }
