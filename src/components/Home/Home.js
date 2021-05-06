import React from "react";
import logo from "assets/images/mymemory_logo.svg";

import "./home.scss";
import Button from "../Button/Button";

const Front = () => {
  return (
    <>
      <div className="icon">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>MeMemory</h1>
      <Button>Comenzar</Button>
    </>
  );
};

export default Front;
