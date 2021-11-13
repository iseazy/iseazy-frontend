import { configureStore } from '@reduxjs/toolkit'
import cardGameSlice from "../pods/card-game/reducer-slice/card-game.slice";

export const store = configureStore({
	reducer: {
		cardGame: cardGameSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
