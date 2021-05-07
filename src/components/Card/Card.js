import React, { useState } from "react";
import "./card.scss";
import bgCard from "assets/images/bg_card.svg";

const Card = ({ children, image, name, flip, onClick }) => {
  const [localFlip, setLocalFlip] = useState(flip);
  const handleClick = () => {
    if (!localFlip) {
      setLocalFlip(true);
      onClick(name);
      setTimeout(() => setLocalFlip(false), 1000);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      {children}
      {(!localFlip || !flip) && (
        <div className="bgcard">
          <img src={bgCard} alt="bgcard" />
        </div>
      )}
      {(localFlip || flip) && (
        <div className="imagecard">
          <img src={image} alt={name} />
        </div>
      )}
    </div>
  );
};

export default Card;
