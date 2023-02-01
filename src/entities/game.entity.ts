import { Item } from './item.entity'

export interface Game {
  board: Item[]

  selectedItems: Array<number>
  matchedItems: Array<Item['key']>

  startTime?: number
  endTime?: number
}
