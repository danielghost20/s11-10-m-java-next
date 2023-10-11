import { configureStore } from '@reduxjs/toolkit'
import prestadoresReducer from "./features/prestadoresSlice";

export const store = configureStore({
    reducer: {
        prestadores: prestadoresReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch