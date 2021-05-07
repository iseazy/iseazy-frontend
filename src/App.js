import _ from "lodash";
import React, { useEffect, useReducer } from "react";
import "App.scss";
import * as AppActions from "store/app.actions";
import AppContext from "context/Appcontext";
import AppReducer, { initialState } from "store/app.reducer";
import Home from "pages/Home/Home";
import Grid from "pages/Grid/Grid";
import Modal from "components/Modal/Modal";

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { items } = state;

  useEffect(() => {
    const inactiveItems = _.filter(items, function (o) {
      return !o.flip;
    });
    if (inactiveItems.length === 0) {
      dispatch(AppActions.endApplication());
    }
  }, [items]);

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
        {state.end && <Modal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
