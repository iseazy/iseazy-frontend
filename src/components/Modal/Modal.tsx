import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Button } from '..';
import './modal.css';
import { getTimeFormatted } from '../../pages/MemoryBoard/helpers/getTimeFormatted';
import { Confetti } from '../Confetti/Confetti';
import { useSetRanking } from '../../hooks/useRanking';

interface Props {
    timer: number;
    movements: number;
}
export const Modal: FC<Props> = ({timer, movements}: Props) => {
    
    const [rankingName, setRankingName] = useState<string>('');
    const { addRanking } = useSetRanking({
        time: timer,
        movements,
        name: rankingName
    });
    const handleClick = () => {
        if ( rankingName === '' ) return;
        addRanking();
    }
    return createPortal(
        <div className="modal">
            <div className="modal__wrap">
                <div className="modal__content content animate__animated animate__zoomIn">
                    <div className="content__body">
                        <h1 className="content__h1">¡Completado!</h1>
                        <span className="content__time">
                            <img src="clock.svg" alt="clock" /> {getTimeFormatted(timer)}
                        </span>
                    </div>
                    <div className="content__tries">Movimientos: {movements}</div>
                    <div className="content__input">
                        <input 
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={rankingName}
                            onChange={(e) => setRankingName(e.target.value)}
                        />
                    </div>
                    <Link to="/">
                        <Button text="Aceptar" className="button" handleClick={handleClick} />
                    </Link>
                </div>
                <Confetti />
            </div>
        </div>
    , document.body);
}
