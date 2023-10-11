import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

export const prestadoresSlice = createSlice({
    name: 'prestadorId',
    initialState,
    reducers: {
        verPrestador: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { verPrestador } = prestadoresSlice.actions;
export default prestadoresSlice.reducer; 