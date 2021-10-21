import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

export const rootReducer = combineReducers({
  gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>