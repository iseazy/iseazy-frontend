import React, { useContext, useEffect, useState } from "react";
import Card from "components/Card/Card";
import "./grid.scss";
import AppContext from "context/Appcontext";
import * as AppActions from "store/app.actions";
const Grid = () => {
  const { state, dispatch } = useContext(AppContext);
  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();

  useEffect(() => {
    if (selected1 && selected2) {
      if (selected1 === selected2) {
        dispatch(AppActions.flipItem(selected1));
      }
      setSelected1();
      setSelected2();
    }
  }, [selected1, selected2, dispatch]);

  const handleSelect = (name) => {
    if (selected1) {
      setSelected2(name);
    } else {
      setSelected1(name);
    }
  };
  return (
    <div className="grid">
      {state.items.map((card, index) => (
        <Card
          key={`card-${index}`}
          flip={card.flip}
          name={card.name}
          image={card.image}
          onClick={handleSelect}
        >
          {index + 1}
        </Card>
      ))}
    </div>
  );
};

export default Grid;
