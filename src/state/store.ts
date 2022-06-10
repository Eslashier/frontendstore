import {configureStore} from "@reduxjs/toolkit";
import loggingReducer from "./features/logginSlice";


export const store = configureStore({
    reducer: {
        logging: loggingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>