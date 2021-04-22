import React, { useCallback } from 'react';
import { selectCard, useGameContext } from '../../api/gameContext';
import { KEY_CTXT_ACTIVE_CARDS } from '../../api/gameContext/gameContextKeys';
import './styles.scss';

const CardHead = ({ id, category, img }) => (
  <div className={`card__head card__head--cat-${category}`}></div>
);

const CardTail = ({ id, category, label }) => (
  <div className="card__tail">
    <span className="card__label">{label}</span>
  </div>
);

const Card = ({ id, category, img, active, solved, label }) => {
  const {
    dispatch,
    contextValue: { [KEY_CTXT_ACTIVE_CARDS]: allowed },
  } = useGameContext();

  const visible = active || solved;

  const select = useCallback(() => {
    !visible && allowed && selectCard(dispatch, id);
  }, [dispatch, id, visible, allowed]);

  return (
    <div onClick={select} className="card">
      {visible ? (
        <CardHead id={id} category={category} img={img} />
      ) : (
        <CardTail id={id} category={category} label={label} />
      )}
    </div>
  );
};

export default Card;
