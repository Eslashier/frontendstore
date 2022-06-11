import "../styles/forms.css";
import React, { useState } from 'react';
import { useAppDispatch } from "../../state/store"
import { providerType } from "../../state/features/providerSlice"
import {createNewProvider} from "../../actions/Provider/createNewProvider"
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";

// interface IProviderFormProps {
// }

// const ProviderForm: React.FunctionComponent<IProviderFormProps> = (props) => {
//     const [providerName, setProviderName] = useState('')
//     const [phone, setPhone] = useState('')
//     const [email, setEmail] = useState('')
//     const [passport, setPassport] = useState('')

//     const dispatch = useAppDispatch()

//     const onAdd = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()

//         if (providerName && phone && email && passport) {
//             const newProvider: providerType = { id: nanoid(), providerName, phone, email, passport }
//             dispatch(createNewProvider(newProvider))
//             setProviderName('')
//             setPhone('')
//             setEmail('')
//             setPassport('')
//         }
//     }

//     let navigate =useNavigate();

//     return (
//         <div>
//             <form className="form" id="addProvider" onSubmit={(e) => {onAdd(e); navigate("/ProviderList")}}>
//                 <label >Provider Name</label>
//                 <input type="text" id="providerName" value={providerName} placeholder="Provider name..." onChange={(e) => setProviderName(e.target.value)}/>
//                 <label >Phone number</label>
//                 <input type="text" id="phone" value={phone} placeholder="Provider phone number..." onChange={(e) => setPhone(e.target.value)}/>
//                 <label >E-mail</label>
//                 <input type="text" id="email" value={email} placeholder="Provider e-mail..." onChange={(e) => setEmail(e.target.value)}/>
//                 <label >Provider ID </label>
//                 <input type="text" id="passport" value={passport} placeholder="Provider id..." onChange={(e) => setPassport(e.target.value)}/>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     )
// }

// export default ProviderForm

export default function AddProduct() {
    return (
        <div>
            <form className="form" id="addProduct">
                <label >Product name</label>
                <input type="text" id="name" placeholder="Product name..."/>
                <label >Description</label>
                <input type="text" id="description" placeholder="Product description..."/>
                <label >Price</label>
                <input type="number" min="0" id="phone" placeholder="Product price..."/>
                <label >Alert of low stock</label>
                <input type="number" min="0" id="phone" placeholder="Minimum stock..."/>
                <label >Maximum Stock</label>
                <input type="number" min="0" id="phone" placeholder="Maximum stock..."/>
                <label >Select a provider</label>
                <select id="providers" name="providers">
                    <option />
                    <option value="provider1">Provider 1</option>
                    <option value="provider2">Provider 2</option>
                    <option value="provider3">Provider 3</option>
                    <option value="provider4">Provider 4</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
  }