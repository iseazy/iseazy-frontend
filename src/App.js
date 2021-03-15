import React, { useState } from 'react'
import logo from '../src/assets/images/logo.svg'
import './assets/sass/style.css'
import Cards from './components/Cards'

/* 
  Debido a que considero que es una "app sencilla", no haremos uso de Router muy complicado
  sino que más bien trataremos el cambio de Vistas mediante un estado general del Componente (componentState)
  state = 0 -> vista Inicio
  state = 1 -> vista cartas
  state = 2 -> vista Resultado 
*/

function App() {
  const INIT_VIEW = 0
  const CARDS_VIEW = 1
  const RESULT_VIEW = 2
  const [componentState, setComponentState] = useState(CARDS_VIEW)

  const handleClick = () => {
    return setComponentState(CARDS_VIEW)
  }

  return (
    <div className="container-background">
      {componentState === INIT_VIEW &&
        <>
          <img src={logo} alt="logo-app" title="logo-app" />
          <h1 className="app-title">MeMemory</h1>
          <button className="start-button" onClick={handleClick}>Comenzar</button>
        </>
      }
      {componentState === CARDS_VIEW &&
        <>
          <Cards />
        </>
      }
      {componentState === RESULT_VIEW &&
        <></>
      }
    </div>
  );
}

export default App;
