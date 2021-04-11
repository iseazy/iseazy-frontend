export const getInitalCards = images => {
  const cards = images.reduce((cards, image, index) => {
    const id = index + 1
    const commonProps = {
      group: `group-${id}`,
      url: image,
      isFlipped: false,
      isCompleted: false,
    }
    const newPairCards = [
      { ...commonProps, id: `image-${id}.1` },
      { ...commonProps, id: `image-${id}.2` },
    ]
    return [...cards, ...newPairCards]
  }, [])
  const shuffledCards = cards.sort(() => 0.5 - Math.random())

  return shuffledCards
}

export const isAllCardsCompleted = cards =>
  cards.every(({ isCompleted }) => isCompleted)
