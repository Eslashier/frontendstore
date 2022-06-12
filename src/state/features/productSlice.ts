import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { possibleStatus } from "../../configuration/possibleStatus"
import { getAllProducts } from "../../actions/Product/getAllProducts"
import { createNewProduct } from "../../actions/Product/createNewProduct"
import { updateProduct } from "../../actions/Product/updateProduct"
import { providerType } from "./providerSlice";
import { deleteProduct } from "../../actions/Product/deleteProduct"

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
            state.error = "Something went wrong posting a new product";
            state.products = []
        })
        //PUT BUILDERS
        builder.addCase(updateProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED
            let productUpdated = state.products.filter(product => product.id === action.payload.id)[0];
            let positionProductUpdated = state.products.indexOf(productUpdated)
            state.products[positionProductUpdated] = action.payload
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED
            state.error = "Something went wrong while creatin a product"
        })
        //DELETE BUILDERS
        builder.addCase(deleteProduct.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            if (action.payload.deleted) {
                state.products = state.products.filter((product) => 
                product.id !== action.payload.productId)
            }
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong deleting the product provider";
        })
    }
})

export type { productType }
export type { initialStateType }
export default productSlice.reducer

export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error

