import "./css/menu.css";

export default function Menu({ handleInitGame }) {
  return (
    <div className="App-header">
      <div className="circle-logo">
        <img src={"/img/logo_memory.png"} alt="logo" className="img-logo" />
      </div>

      <h1 className="memory-title">MeMemory</h1>
      <button onClick={handleInitGame} className="button-start">
        Comenzar
      </button>
    </div>
  );
}
