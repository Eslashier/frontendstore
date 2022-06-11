import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { possibleStatus } from "../../configuration/possibleStatus"
import { getAllProviders } from "../../actions/Provider/getAllProviders"
import { createNewProvider } from "../../actions/Provider/createNewProvider"


type providerType = {
    id: string,
    providerName: string,
    phone: string,
    email: string,
    passport: string,
}

interface initialStateType {
    providers: providerType[],
    status: possibleStatus,
    error: string | null,
}

const initialState: initialStateType = {
    providers: [],
    status: possibleStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //GET BUILDERS
        builder.addCase(getAllProviders.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.providers = action.payload;
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong fetching the providers"
            state.providers = []
        })
        //POST BUILDERS
        builder.addCase(createNewProvider.pending, (state, action) => {
            state.status = possibleStatus.PENDING;
        })
        builder.addCase(createNewProvider.fulfilled, (state, action) => {
            state.status = possibleStatus.COMPLETED;
            state.providers.push(action.payload);
        })
        builder.addCase(createNewProvider.rejected, (state, action) => {
            state.status = possibleStatus.FAILED;
            state.error = "Something went wrong posting a new provider";
            state.providers = []
        })
    }
})

export type { providerType }
export type { initialStateType }
export default providerSlice.reducer

export const selectProvidersState = () => (state: RootState) => state.providers.providers
export const selectProvidersStatus = () => (state: RootState) => state.providers.status
export const selectProvidersFetchError = () => (state: RootState) => state.providers.error

