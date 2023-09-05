import { FC } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Button } from '..';
import './modal.css';
import { getTimeFormatted } from '../../pages/MemoryBoard/helpers/getTimeFormatted';
import { Confetti } from '../Confetti/Confetti';

interface Props {
    timer: number;
    movements: number;
}
export const Modal: FC<Props> = ({timer, movements}: Props) => {
    
    return createPortal(
        <div className="modal">
            <div className="modal__wrap">
                <div className="modal__content content">
                    <div className="content__body">
                        <h1 className="content__h1">¡Completado!</h1>
                        <span className="content__time">
                            <img src="clock.svg" alt="clock" /> {getTimeFormatted(timer)}
                        </span>
                    </div>
                    <div className="content__tries">Movimientos: {movements}</div>
                    <div className="content__input">
                        <input type="text" placeholder="Ingresa tu nombre" />
                    </div>
                    <Link to="/">
                        <Button text="Jugar otra vez"></Button>
                    </Link>
                </div>
                <Confetti />
            </div>
        </div>
    , document.body);
}
