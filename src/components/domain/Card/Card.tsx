import React from 'react'
import styles from './card.module.css'

interface IProps {
  id: string
  type: string
  isFaceUp: boolean
  position: number
  handleClick: (id: string) => void
}

function Card({ id, type, isFaceUp, position, handleClick }: IProps) {
  return (
    <li className={styles.cardWrapper}>
      <div
        className={`${isFaceUp ? styles[type] : styles.faceDown} ${
          styles.card
        }`}
        onClick={() => handleClick(id)}
      >
        {!isFaceUp ? <p className={styles.position}>{position}</p> : null}
      </div>
    </li>
  )
}

export default Card
