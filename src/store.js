import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import { DateTime } from "luxon"

import { createCardDeck, checkGameState } from "./cards"

// Amount a time a wrong pair is shown before flipping back.
const GRACE_TIME = 1000 // ms

const memorySlice = createSlice({
    name: "memory",

    initialState: {
        startTime: undefined,
        endTime: undefined,
        cards: [],
        flippedIds: [],
    },

    reducers: {
        start: state => {
            state.startTime  = DateTime.utc().toISO()
            state.endTime    = undefined
            state.cards      = createCardDeck(18)
            state.flippedIds = []
        },

        end: state => {
            state.endTime = DateTime.utc().toISO()
        },

        setFlippedIds: (state, { payload }) => {
            state.flippedIds = payload
        }
    }
})

export const {
    start,
    end,
    setFlippedIds,
} = memorySlice.actions

export const selectCard = createAsyncThunk("selectCard", async (cardId, { getState, dispatch }) => {
    const { cards, flippedIds } = getState()
    if (flippedIds.includes(cardId)) return

    const ids = flippedIds.concat([cardId])
    dispatch(setFlippedIds(ids))

    checkGameState(cards, ids, {
        onVictory: () => {
            dispatch(end())
        },
        onMistake: (currId, prevId) => {
            setTimeout(() => {
                const { flippedIds } = getState()
                const ids = flippedIds.filter(id => ![currId, prevId].includes(id))
                dispatch(setFlippedIds(ids))
            }, GRACE_TIME)
        }
    })
})

const store = configureStore({
    reducer: memorySlice.reducer
})

export default store
