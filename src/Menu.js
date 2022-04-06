import { useRef } from "react";
import "./css/menu.css";

export default function Menu({ handleInitGame }) {
  const headerRef = useRef(null);

  const handleStartGame = () => {
    handleInitGame();
  };

  return (
    <div ref={headerRef} className="App-header">
      <div className="circle-logo">
        <img src={"/img/logo_memory.png"} alt="logo" className="img-logo" />
      </div>

      <h1 className="memory-title">MeMemory</h1>
      <button onClick={handleStartGame} className="button-start">
        Comenzar
      </button>
    </div>
  );
}
