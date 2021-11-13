import { configureStore } from '@reduxjs/toolkit'
import cardGameSlice from "../pods/card-game/reducer-slice/card-game.slice";

export const store = configureStore({
	reducer: {
		cardGame: cardGameSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
