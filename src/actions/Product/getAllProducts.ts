import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../state/features/productSlice";
import { urlApi } from "../../configuration/urlConfig"

const getAllProductsAPI = urlApi + "/getAllProducts";

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(getAllProductsAPI)
    console.log("fetch done")
    return (await response.json() as productType[])
})

