import { FC } from 'react';
import { BoardGame } from './components/BoardGame/BoardGame';

import './memory-board.css';

export const MemoryBoard: FC = () => {
    return (
        <main className="board">
            <BoardGame />
        </main>
    )
}
