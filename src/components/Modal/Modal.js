import AppContext from "context/Appcontext";
import React, { useContext } from "react";
import * as AppActions from "store/app.actions";
import "./modal.scss";
import clock from "assets/images/clock.svg";
import Button from "components/Button/Button";

const Modal = ({ children, ...restProps }) => {
  const { state, dispatch } = useContext(AppContext);
  const difference = () => {
    const res = Math.abs(state.end - state.start) / 1000;
    const minutes = Math.floor(res / 60) % 60;
    const seconds = parseInt(res % 60);
    return `${minutes}:${seconds}`;
  };
  return (
    <div className="modal">
      <div className="block">
        <div className="text">
          <span>¡Completado!</span>
          <div className="time">
            <img src={clock} alt="clock" />
            {difference()}
          </div>
        </div>
        <Button onClick={() => dispatch(AppActions.startApplication())}>
          Jugar otra vez
        </Button>
      </div>
    </div>
  );
};

export default Modal;
