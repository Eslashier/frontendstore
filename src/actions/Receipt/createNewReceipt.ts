import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../state/features/receiptSlice";
import { urlApi } from "../../configuration/urlConfig"

const createReceiptsAPI = urlApi + "/createReceipt";

export const createNewReceipt = createAsyncThunk('createNewReceipt', async (receipt: receiptType) => {
    const response = await fetch(createReceiptsAPI, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(receipt),
    })
    return (await response.json()) as receiptType;
})