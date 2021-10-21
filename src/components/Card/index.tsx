import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import closeCard from "../../images/close-card.svg"
import { flippedCard } from '../../redux/actions/gameActions';

interface CardProps {
  type: string,
  close: boolean,
  cardId: number,
  complete: boolean,
}

const Card: React.FC<CardProps> = memo(({type, close, complete, cardId}) => {
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(flippedCard(cardId));
  }, [dispatch, cardId]);

  return (
    <div className={"card" + (!close ? ' card--opened' : '') + (complete ? ' card--matched' : '')} onClick={handleClick}>
        <div className="card__front">
          <div className="card__overlay-number">
            { cardId.toString() }
          </div>
          <img src={closeCard} width="100" height="100" className="card__overlay card__image" alt=""></img>
        </div>
        <div className="card__back">
          <img className="card__image" src={`/assets/${type}.png`} width="100" height="100" alt=""/>
        </div>
    </div>
  );
});

export default Card;