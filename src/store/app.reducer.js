import _ from "lodash";
import * as AppActions from "store/app.actions";

import data from "assets/data/data";
const shuffleData = _.shuffle([...data, ...data]);

export const initialState = {
  start: false,
  end: null,
  items: shuffleData,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case AppActions.START_APP:
      return {
        ...state,
        start: true,
      };
    case AppActions.FLIP:
      return {
        ...state,
        items: state.items.map((item) => {
          return { ...item, flip: item.name === action.payload };
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
