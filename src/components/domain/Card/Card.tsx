import React from 'react'
import styles from './card.module.css'
import faceDownCardSrc from '../../../assets/cards/facedown-card.svg'

interface IProps {
  id: string
  src: string
  isFaceUp: boolean
  position: number
  handleClick: (id: string) => void
}

function Card({ id, src, isFaceUp, position, handleClick }: IProps) {
  return (
    <li className={styles.card}>
      <div className={isFaceUp ? styles.flipped : ''}>
        <img className={styles.faceUp} src={src} alt="face-up-card" />
        <div className={styles.faceDown} onClick={() => handleClick(id)}>
          <img src={faceDownCardSrc} alt="face-down-card" />
          <figcaption className={styles.position}>{position}</figcaption>
        </div>
      </div>
    </li>
  )
}

export default React.memo(Card)
