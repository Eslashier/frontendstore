import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { possibleStatus } from "../../configuration/possibleStatus"
import { getAllBills } from "../../actions/Bill/getAllBills"
import { productType } from "./productSlice";
import { createNewBill } from "../../actions/Bill/createNewBill"

type billType = {
    id: string,
    date: string,
    clientName: string,
    salesmanName: string,
    productListSale: [productType],
    totalSale: number,
}

interface initialStateType {
    bills: billType[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    bills: [],
    status: possibleStatus.IDLE,
    error: null,
}

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        //GET BUILDERS
        builder.addCase(getAllBills.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getAllBills.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.bills = action.payload;
        })
        builder.addCase(getAllBills.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the bills"
            state.bills = []
        })
        //POST BUILDERS
        builder.addCase(createNewBill.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(createNewBill.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.bills.push(action.payload);
        })
        builder.addCase(createNewBill.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong posting a new provider";
            state.bills = []
        })
    }
})

export type { billType }
export type { initialStateType }
export default billSlice.reducer

export const selectBillsState = () => (state: RootState) => state.bills.bills
export const selectBillsStatus = () => (state: RootState) => state.bills.status
export const selectBillsFetchError = () => (state: RootState) => state.bills.error

