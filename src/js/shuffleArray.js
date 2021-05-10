const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm implementation
    let currentIndex = array.length
    let tmpValue
    let randomIndex
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
  
      tmpValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = tmpValue
    }
  
    return array
  }

  export default shuffleArray