import { Fragment, useState, useEffect } from 'react'

import Card from 'components/card'
import { Cards } from 'components/game/const'

import styles from './game.module.scss'

const game = () => {
  const [allCards, setAllCards] = useState([...Cards])
  const [cardList, setCardList] = useState([...allCards])
  const [cardsFlipped, setCardsFlipped] = useState([])
  let flipTimer

  useEffect(() => {
    const [cardOne, CardTwo] = cardsFlipped
    if (cardsFlipped.length === 2) {
      const gotScore = cardsFlipped.every((card) => card.img === cardOne.img)

      if (gotScore) {
        const scoredCards = allCards.map((card) => {
          if (card.img === cardOne.img) {
            return {
              ...card,
              isFlipped: true,
              found: true
            }
          }
          return card
        })
        setAllCards([...scoredCards])
        setCardList([...scoredCards])
        setCardsFlipped([])
      } else {
        flipTimer = setTimeout(() => {
          setCardList([...allCards])
          setCardsFlipped([])
        }, 1000)
      }
    }
  }, [cardsFlipped])

  const setFlipItemOnList = (index) => {
    if (cardsFlipped.some((card) => card.id === cardList[index].id)) {
      return false
    }

    clearTimeout(flipTimer)
    const setFlipped = {
      img: cardList[index].img,
      isFlipped: true,
      id: cardList[index].id
    }

    let newCardList = [...cardList]
    newCardList[index] = setFlipped
    let newCardFlipped = [...cardsFlipped, setFlipped]

    if (newCardFlipped.length === 3) {
      newCardList = [...allCards]
      newCardList[index] = setFlipped
      newCardFlipped = [setFlipped]
    }

    setCardList(newCardList)
    setCardsFlipped(newCardFlipped)
  }

  const handleClick = (index) => {
    setFlipItemOnList(index)
  }

  return (
    <div className={styles.cardList}>
      {cardList.map(({ img, isFlipped, found }, index) => (
        <Fragment key={index}>
          <Card
            image={img}
            isFlipped={isFlipped}
            number={index + 1}
            onClick={() => handleClick(index)}
            found={found}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default game
