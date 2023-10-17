import { configureStore } from '@reduxjs/toolkit'
import serviciosReducer from "./features/serviciosSlice";

export const store = configureStore({
    reducer: {
        servicios: serviciosReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch