import { useState } from 'react'

import {
  useCards,
  getInitalCards,
  markFlippedCard,
  markUnflippedCards,
  markCompletedCards,
  resetCards,
} from './cards-store'
import { getPlayedTime } from './business'

import BoardContainer from '../../ui/layout/Board'
import Card from '../../ui/components/Card'
import CardImage from '../../ui/components/CardImage'
import EndGameModal from '../../ui/components/EndGameModal'

import image1 from '../../assets/images/cards/image-1.png'
import image2 from '../../assets/images/cards/image-2.png'
import image3 from '../../assets/images/cards/image-3.png'
import image4 from '../../assets/images/cards/image-4.png'
import image5 from '../../assets/images/cards/image-5.png'
import image6 from '../../assets/images/cards/image-6.png'
import image7 from '../../assets/images/cards/image-7.png'
import image8 from '../../assets/images/cards/image-8.png'
import image9 from '../../assets/images/cards/image-9.png'

export const CARDS_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
]
const MAX_NUM_ATTEMPS = 2
const FLIP_MILLISECONDS = 1000

const Board = () => {
  const { cards, isAllCompleted, dispatch } = useCards(
    getInitalCards(CARDS_IMAGES),
  )
  const [numAttemp, setNumAttemp] = useState(0)
  const [prevCard, setPrevCard] = useState({})
  const [isFlipping, setIsFlipping] = useState(false)
  const [startTime, setStartTime] = useState(new Date().getTime())

  const handleClick = (group, id) => {
    if (isFlipping) return

    const currentAttemp = numAttemp + 1

    if (currentAttemp === MAX_NUM_ATTEMPS) {
      setNumAttemp(0)
      setPrevCard({})

      if (prevCard.group === group) {
        dispatch(markCompletedCards([prevCard.id, id]))
      } else {
        dispatch(markFlippedCard(id))
        setIsFlipping(true)

        setTimeout(() => {
          dispatch(markUnflippedCards([prevCard.id, id]))
          setIsFlipping(false)
        }, FLIP_MILLISECONDS)
      }
    } else {
      dispatch(markFlippedCard(id))
      setNumAttemp(currentAttemp)
      setPrevCard({ id, group })
    }
  }

  const handleClickPlayAgain = () => {
    dispatch(resetCards(getInitalCards(CARDS_IMAGES)))
    setStartTime(new Date().getTime())
  }

  return (
    <BoardContainer>
      {cards.map(({ group, id, isFlipped, isCompleted, url }, index) =>
        isFlipped || isCompleted ? (
          <CardImage key={id} url={url} />
        ) : (
          <Card
            key={id}
            data-testid="card"
            number={index + 1}
            onClick={() => handleClick(group, id)}
          />
        ),
      )}
      {isAllCompleted && (
        <EndGameModal
          onPlayAgainClick={handleClickPlayAgain}
          playedTime={getPlayedTime(startTime)}
        />
      )}
    </BoardContainer>
  )
}

export default Board
