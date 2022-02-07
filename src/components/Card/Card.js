import React from 'react'
import styles from './card.module.css'

function Card({ id, type, isFaceUp, position, handleClick }) {
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
