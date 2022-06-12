import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

type orderType= {
    productListSale: productType[]
}

const initialState: orderType = {
    productListSale: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct(state, action){
            state.productListSale.push(action.payload)
        },
        emptyProducts(state){
            state.productListSale = []
        }
    }
});

export type { orderType }
export default orderSlice.reducer
export const {addProduct, emptyProducts} = orderSlice.actions;