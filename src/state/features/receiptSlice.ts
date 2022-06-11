import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { possibleStatus } from "../../configuration/possibleStatus"
import { getAllReceipts } from "../../actions/Receipt/getAllReceipts"
import { productType } from "./productSlice";

type receiptType = {
    id: string,
    units: number,
    product: productType,
    date: string,
}

interface initialStateType {
    receipts: receiptType[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    receipts: [],
    status: possibleStatus.IDLE,
    error: null,
}

const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //GET BUILDERS
        builder.addCase(getAllReceipts.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getAllReceipts.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.receipts = action.payload;
        })
        builder.addCase(getAllReceipts.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the receipts"
            state.receipts = []
        })
    }
})

export type { receiptType }
export type { initialStateType }
export default receiptSlice.reducer

export const selectReceiptsState = () => (state: RootState) => state.receipts.receipts
export const selectReceiptsStatus = () => (state: RootState) => state.receipts.status
export const selectReceiptsFetchError = () => (state: RootState) => state.receipts.error

