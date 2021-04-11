import BgCard from 'assets/svg/bgCard.svg'

import styles from './card.module.scss'

const card = ({
  found = false,
  image = '',
  isFlipped = false,
  number = '',
  onClick
}) => {
  return (
    <div className={styles.container}>
      <div
        onClick={onClick}
        className={`
        ${styles.card} 
        ${isFlipped ? styles.flipped : ''} 
        ${found ? styles.found : ''}
        `}
      >
        {!isFlipped && (
          <div className={styles.front}>
            <BgCard />
            <p>{number}</p>
          </div>
        )}
        <div className={styles.back}>{image && <img src={image} />}</div>
      </div>
    </div>
  )
}

export default card
