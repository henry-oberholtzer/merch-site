import { configureStore } from "@reduxjs/toolkit"
import itemListReducer from './reducers/item-list-reducer'

export const store = configureStore({
    reducer: itemListReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch