import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from "../../state/features/billSlice";
import { urlApi } from "../../configuration/urlConfig"

const createBillsAPI = urlApi + "/createBill";

export const createNewBill = createAsyncThunk('createNewBill', async (bill: billType) => {
    const response = await fetch(createBillsAPI, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(bill),
    })
    return (await response.json()) as billType;
})