import React, { useState } from 'react'
import logo from '../src/assets/images/logo.svg'
import './assets/sass/style.css'
import Cards from './components/Cards'

/* 
  Debido a que considero que es una "app sencilla", no haremos uso de Router muy complicado
  sino que más bien trataremos el cambio de Vistas mediante un estado general del Componente (componentState)
  state = 0 -> "vista" Inicio
  state = 1 -> "vista" cartas
  state = 2 -> "vista" Resultado (En principio iba a meter una vista más pero lo dejaré como un subEstado del componente Card)

  Mejorar: 
    -contador tiempo
    -número de cartas dinámico
    -resultado acorde con el número de cartas (dinámico)
    -responsive
*/

function App() {
  const INIT_VIEW = 0
  const CARDS_VIEW = 1
  const [componentState, setComponentState] = useState(INIT_VIEW)

  const handleClick = () => {
    return setComponentState(CARDS_VIEW)
  }

  return (
    <div className="container-background">
      {componentState === INIT_VIEW &&
        <div className="init-background">
          <div className="logo-background">
            <img src={logo} alt="logo-app" title="logo-app" className="logo" />
          </div>
          <h1 className="app-title">MeMemory</h1>
          <button className="primary-button" onClick={handleClick}>Comenzar</button>
        </div>
      }
      {componentState === CARDS_VIEW &&
        <Cards setComponentState={setComponentState} />
      }
    </div>
  );
}

export default App;
