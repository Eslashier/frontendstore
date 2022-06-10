import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../state/features/providerSlice";


const getAllProvidersAPI = "http://localhost:8080/v1/storeApi/getAllProviders";

export const getAllProviders = createAsyncThunk('getAllProvidersAPI', async () => {
    const response = await fetch(getAllProvidersAPI)
    console.log("fetch done")
    return (await response.json() as providerType[])
})

