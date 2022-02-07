import React from 'react'
import styles from './card.module.css'

function Card({ id, type, isFaceUp, position, handleClick }) {
  return (
    <li
      className={`${isFaceUp ? styles[type] : styles.faceDown} ${styles.card}`}
      onClick={() => handleClick(id)}
    >
      {!isFaceUp ? position : null}
    </li>
  )
}

export default Card
