import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../state/features/receiptSlice";
import { urlApi } from "../../configuration/urlConfig"

const getAllReceiptsAPI = urlApi + "/getAllReceipts";

export const getAllReceipts = createAsyncThunk('getAllReceipts', async () => {
    const response = await fetch(getAllReceiptsAPI)
    return (await response.json() as receiptType[])
})

