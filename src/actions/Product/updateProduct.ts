import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../state/features/productSlice";
import { urlApi } from "../../configuration/urlConfig"

const updateProductsAPI = urlApi + "/updateProduct";

export const updateProduct = createAsyncThunk('updateProduct', async (product: productType) => {
    const response = await fetch(updateProductsAPI, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})