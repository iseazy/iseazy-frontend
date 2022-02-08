const fisherYatesShuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1))
    const currentCard = array[i]
    const cardToSwap = array[swapIndex]
    array[i] = cardToSwap
    array[swapIndex] = currentCard
  }
  return array
}
export default fisherYatesShuffle
