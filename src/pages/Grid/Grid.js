import React, { useContext, useEffect, useReducer, useState } from "react";
import Card from "components/Card/Card";
import "./grid.scss";
import AppContext from "context/Appcontext";

const Grid = () => {
  const { state, dispatch } = useContext(AppContext);
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();
  useEffect(() => {});
  return (
    <div className="grid">
      {state.items.map((card, index) => (
        <Card
          key={`card-${index}`}
          flip={card.flip}
          image={card.image}
          onClick={() => dispatch({ type: "flip", payload: card.name })}
        >
          {index + 1}
        </Card>
      ))}
    </div>
  );
};

export default Grid;
