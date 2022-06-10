import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../state/features/providerSlice";
import {urlApi} from "../configuration/urlConfig"

const getAllProvidersAPI = urlApi+"/getAllProviders";

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(getAllProvidersAPI)
    console.log("fetch done")
    return (await response.json() as providerType[])
})

