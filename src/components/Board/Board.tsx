import { Item } from '../../entities/item.entity'
import { Card } from '../Card'
import styles from './Board.module.css'

interface BoardProps {
  board: Item[]
  handleCardClick: (index: number) => void
  isGameStarted: boolean
  matchedItems: string[]
  selectedItems: number[]
}

export function Board({
  board,
  handleCardClick,
  isGameStarted,
  selectedItems,
  matchedItems,
}: BoardProps) {
  return (
    <div className={styles.board}>
      {board.map((item, index) => {
        const isFlipped =
          !isGameStarted || selectedItems.includes(index) || matchedItems.includes(item.key)
        return (
          <Card
            key={index}
            isFlipped={isFlipped}
            item={item}
            value={index + 1}
            onClick={() => handleCardClick(index)}
          />
        )
      })}
    </div>
  )
}
