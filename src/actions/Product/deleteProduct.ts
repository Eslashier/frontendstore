import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../state/features/productSlice";
import { urlApi } from "../../configuration/urlConfig"

const deleteProductsAPI = urlApi + "/deleteProduct";

export const deleteNewProduct = createAsyncThunk('deleteNewProduct', async (product: productType) => {
    const response = await fetch(`${deleteProductsAPI}/${product.id}`, {
        method: 'DELETE'
    })
    return {deleted: response.ok, productId: product.id}
})

