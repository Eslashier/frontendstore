import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../state/features/providerSlice";
import {urlApi} from "../configuration/urlConfig"

const getAllProvidersAPI = urlApi+"/createProvider";

export const createNewProvider = createAsyncThunk('createNewProvider',async (provider:providerType) => {
    const response = await fetch(getAllProvidersAPI, { 
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(provider),
    })
    return (await response.json()) as providerType;    
})