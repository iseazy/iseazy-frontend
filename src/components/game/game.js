import { Fragment, useState, useEffect, useContext } from 'react'

import Card from 'components/card'
import { CardsSufled } from 'components/game/const'

import { GameContext } from 'context/game'
import { TimerContext } from 'context/timer'


import styles from './game.module.scss'

const game = () => {
  const { setTimer } = useContext(TimerContext)
  const { setFinishGame, isGameFinish } = useContext(GameContext)
  const [allCards, setAllCards] = useState([...CardsSufled()])
  const [cardList, setCardList] = useState([...allCards])
  const [cardsFlipped, setCardsFlipped] = useState([])
  let flipTimer

  useEffect(() => {
    const [cardOne] = cardsFlipped
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

        const statusCard = [...scoredCards]
        const allFliped = scoredCards.every((card) => card.found)

        if (allFliped) {
          setFinishGame(true)
        }

        setAllCards(statusCard)
        setCardList(statusCard)
        setCardsFlipped([])
      } else {
        flipTimer = setTimeout(() => {
          setCardList([...allCards])
          setCardsFlipped([])
        }, 1000)
      }
    }
  }, [cardsFlipped])

  useEffect(() => {
    if (isGameFinish === false) {
      const newDeck = [...CardsSufled()]
      setAllCards(newDeck)
      setCardList(newDeck)
      setTimer(new Date())
    }
  }, [isGameFinish])

  const setFlipItemOnList = (index) => {
    if (cardsFlipped.some((card) => card.id === cardList[index].id)) {
      return false
    }

    clearTimeout(flipTimer)
    const setFlipped = {
      img: cardList[index].img,
      isFlipped: !cardList[index].isFlipped,
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
