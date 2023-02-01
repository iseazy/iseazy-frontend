import { Board } from './board.entity'
import { Item } from './item.entity'

export interface Game {
    board: Board;

    selectedItems: Array<number>;
    matchedItems: Array<Item['key']>;

    startTime?: number;
    endTime?: number;
}
