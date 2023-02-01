import { COVER_IMAGE } from '../../constants'
import { Item } from '../../entities/item.entity'
import styles from './Card.module.css'

interface CardProps {
  value: number
  isFlipped: boolean
  item: Item
  onClick: () => void
}

export function Card({ value, isFlipped, item, onClick }: CardProps) {
  const cardClassNames = `${styles.card} ${isFlipped ? styles.flipped : ''}`

  return (
    <article className={cardClassNames} onClick={onClick}>
      <section className={styles.front}>
        <span className={styles.number}>{value}</span>
        <img className={`${styles.image} ${styles.cover}`} src={COVER_IMAGE} alt={'Cover'} />
      </section>
      <section className={styles.back}>
        <img className={styles.image} src={item.image} alt={item.key} />
      </section>
    </article>
  )
}
