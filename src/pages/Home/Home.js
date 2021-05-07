import React, { useContext } from "react";
import logo from "assets/images/mymemory_logo.svg";
import * as AppActions from "store/app.actions";

import "./home.scss";
import Button from "components/Button/Button";
import AppContext from "context/Appcontext";

const Front = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <div className="icon">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>MeMemory</h1>
      <Button onClick={() => dispatch(AppActions.startApplication())}>
        Comenzar
      </Button>
    </>
  );
};

export default Front;
