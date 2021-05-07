import _ from "lodash";
import * as AppActions from "store/app.actions";

import data from "assets/data/data";
const shuffleData = _.shuffle([...data, ...data]);

export const initialState = {
  start: null,
  end: null,
  items: shuffleData,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case AppActions.START_APP:
      return {
        ...state,
        start: new Date(),
        end: null,
        items: state.items.map((item) => {
          return { ...item, flip: false };
        }),
      };
    case AppActions.END_APP:
      return {
        ...state,
        end: new Date(),
      };
    case AppActions.FLIP:
      return {
        ...state,
        items: state.items.map((item) => {
          return { ...item, flip: item.name === action.payload || item.flip };
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
