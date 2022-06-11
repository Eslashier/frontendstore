import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from "../../state/features/billSlice";
import { urlApi } from "../../configuration/urlConfig"

const getAllBillsAPI = urlApi + "/getAllBills";

export const getAllBills = createAsyncThunk('getAllBills', async () => {
    const response = await fetch(getAllBillsAPI)
    console.log("fetch done")
    return (await response.json() as billType[])
})

