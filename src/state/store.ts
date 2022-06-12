import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import loggingReducer from "./features/logginSlice";
import providerReducer from "./features/providerSlice"
import billReducer from "./features/billSlice"
import receiptReducer from "./features/receiptSlice"
import productReducer from "./features/productSlice"
import orderReducer from "./features/orderSlice"

export const store = configureStore({
    reducer: {
        logging: loggingReducer,
        providers: providerReducer,
        bills: billReducer,
        receipts: receiptReducer,
        products: productReducer,
        order: orderReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()