import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BoardGame } from './components/BoardGame/BoardGame';
import { Button } from '../../components';

import './memory-board.css';

export const MemoryBoard: FC = () => {
    return (
        <main className="board">
            <BoardGame />
            <Link to="/">
                <Button text="Cancelar" className="button" />
            </Link>
        </main>
    )
}
