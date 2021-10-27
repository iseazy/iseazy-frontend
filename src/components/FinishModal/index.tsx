import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE_BUTTONS } from '../../models/constants';
import { RootState } from '../../redux/reducers';
import { startGame } from '../../redux/actions/gameActions';
import Button from '../Button';
import Modal from '../Modal';
import clockIcon from "../../images/clock-icon.svg";
import { setStart } from '../../services/cards.service';

interface FinishModalProps {}

const FinishModal: React.FC<FinishModalProps> = memo(() => {
    const dispatch = useDispatch();

    const totalGameDate = useSelector((state: RootState) => {
        return state.gameReducer.totalGameDate
    });

    const handleResetGame = useCallback(() => { 
        const startDate = new Date();
        const cards = setStart();
        
        dispatch(startGame(startDate, cards))
    }, [dispatch]);
    
    return (
        <Modal>
            <div className="finish-modal__container">
                <span className="finish-modal__text"> ¡Completado! </span>

                <div className="finish-modal__date-container">
                    <img className="finish-modal__icon" width="30" height="30" src={clockIcon} alt=""/>
                    <span className="finish-modal__total-time">{ totalGameDate }</span>
                </div>
            </div>
                <div className="finish-modal__btn">
                    <Button changeClick={handleResetGame} type={TYPE_BUTTONS.PRIMARY}>
                        <span> Jugar otra vez </span>
                    </Button>
                </div>
      
        </Modal>
    );
});

export default FinishModal;