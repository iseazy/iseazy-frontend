import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Button } from '..';
import { getTimeFormatted } from '../../pages/MemoryBoard/helpers/getTimeFormatted';
import { Confetti } from '../Confetti/Confetti';
import { useSetRanking } from '../../hooks/useRanking';
import { constants } from '../../constants/constants';
import './modal.css';

interface Props {
    timer: number;
    attempts: number;
}
export const Modal: FC<Props> = ({timer, attempts}: Props) => {
    
    const [rankingName, setRankingName] = useState<string>('');
    const { addRanking } = useSetRanking({
        time: timer,
        attempts,
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
                        <h1 className="content__h1">{constants.modal.title}</h1>
                        <span className="content__time">
                            <img src="clock.svg" alt="clock" loading="lazy"/> {getTimeFormatted(timer)}
                        </span>
                    </div>
                    <div className="content__tries">{constants.modal.attempts}: {attempts}</div>
                    <div className="content__input">
                        <input 
                            type="text"
                            placeholder={constants.modal.insertYourName}
                            value={rankingName}
                            onChange={(e) => setRankingName(e.target.value)}
                        />
                    </div>
                    <Link to="/">
                        <Button text={constants.buttons.accept} className="button" handleClick={handleClick} />
                    </Link>
                </div>
                <Confetti />
            </div>
        </div>
    , document.body);
}
