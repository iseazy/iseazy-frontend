import React from "react";
import "./card.scss";

const Card = ({ children, image, name, onClick, flip }) => {
  return (
    <div className="card" onClick={onClick}>
      {children}
      {flip && <img src={image} alt={name} />}
    </div>
  );
};

export default Card;
