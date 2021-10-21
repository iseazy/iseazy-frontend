import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import {rootReducer} from "./redux/reducers";
import Home from './pages/home'
import './App.scss';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
