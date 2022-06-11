import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../state/features/productSlice";
import { urlApi } from "../../configuration/urlConfig"

const createProductsAPI = urlApi + "/createProduct";

export const createNewProduct = createAsyncThunk('createNewProduct', async (product: productType) => {
    const response = await fetch(createProductsAPI, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})