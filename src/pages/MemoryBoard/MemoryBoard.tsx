import { Link } from 'react-router-dom';
import { BoardGame } from './components/BoardGame/BoardGame';
import { Button } from '../../components';
import { constants } from '../../constants/constants';

import './memory-board.css';

export const MemoryBoard = () => {
    return (
        <main className="board animate__animated animate__fadeIn">
            <BoardGame />
            <Link to="/">
                <Button text={constants.buttons.cancel} type="main" />
            </Link>
        </main>
    )
}

export default MemoryBoard;