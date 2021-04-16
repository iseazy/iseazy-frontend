import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from './pages/Game';
import PreGame from './pages/Pregame'
import { AppProvider } from "./hooks/AppContext";
import { createGlobalStyle } from "styled-components/macro";



const GlobalStyle = createGlobalStyle`
  body {
        font-family: 'Roboto', sans-serif;
  }
`

const App = ()  =>{
  return (
    <AppProvider>
      <GlobalStyle/>
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <PreGame />
          </Route>
        </Switch>
      </Router>
    </AppProvider>

  );
}


export default App;