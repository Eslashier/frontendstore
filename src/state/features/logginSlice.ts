import {createSlice} from "@reduxjs/toolkit";

type loggingType = {
    isLogged: boolean
}

const initialState: loggingType = {
    isLogged: false
}

export const loggingSlice = createSlice({
    name: 'logging',
    initialState,
    reducers: {
        toggleLogging: (state) => {
            state.isLogged = !state.isLogged
        }
    }
})

export const {toggleLogging} = loggingSlice.actions;

const loggingReducer = loggingSlice.reducer;

export default loggingReducer;