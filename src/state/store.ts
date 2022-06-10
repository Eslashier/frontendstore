import {configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import loggingReducer from "./features/logginSlice";
import providerReducer from "./features/providerSlice"


export const store = configureStore({
    reducer: {
        logging: loggingReducer,
        providers: providerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()