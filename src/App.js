import React, { useReducer } from "react";
import "App.scss";
import AppContext from "context/Appcontext";
import AppReducer, { initialState } from "store/app.reducer";
import Home from "pages/Home/Home";
import Grid from "pages/Grid/Grid";

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        {!state.start && <Home />}
        {state.start && <Grid />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
