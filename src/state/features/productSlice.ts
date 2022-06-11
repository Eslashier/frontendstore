import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { possibleStatus } from "../../configuration/possibleStatus"
import { getAllProducts } from "../../actions/Product/getAllProducts"
import { createNewProduct } from "../../actions/Product/createNewProduct"
import { providerType } from "./providerSlice";

type productType= {
    id: string,
    name: string,
    description: string,
    price: number,
    sold: number,
    stock: number,
    minimumStock: number,
    maximumStock: number,
    provider: providerType;
}

interface initialStateType {
    products: productType[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    products: [],
    status: possibleStatus.IDLE,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //GET BUILDERS
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the products"
            state.products = []
        })
        //POST BUILDERS
        builder.addCase(createNewProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(createNewProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.products.push(action.payload);
        })
        builder.addCase(createNewProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong posting a new provider";
            state.products = []
        })
    }
})

export type { productType }
export type { initialStateType }
export default productSlice.reducer

export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error

