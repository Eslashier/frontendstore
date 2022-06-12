import "../styles/forms.css";
import "../../App.css"
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from "../../state/store";
import { providerType, selectProvidersState } from "../../state/features/providerSlice";
import { productType } from "../../state/features/productSlice";
import { useSelector } from 'react-redux';
import { getAllProviders } from "../../actions/Provider/getAllProviders";
import { createNewProduct } from "../../actions/Product/createNewProduct";
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";

interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [minimumStock, setMinimumStock] = useState(0)
    const [maximumStock, setMaximumStock] = useState(0)
    const [provider, setProvider] = useState({} as providerType)  

    const dispatch = useAppDispatch()

    let navigate =useNavigate();

    useEffect(() => {dispatch(getAllProviders())}, [dispatch])

    const onAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (name && description && price && minimumStock && maximumStock && provider && (price > 0 && minimumStock >= 0) && (minimumStock < maximumStock)) {
            const addProduct: productType = {
                id: nanoid(),
                name: name,
                description: description,
                price: price,
                sold: 0,
                stock: 0,
                minimumStock: minimumStock,
                maximumStock: maximumStock,
                provider: provider
            }
            dispatch(createNewProduct(addProduct))
            navigate("/Inventory")
        } else {
            alert('All the fields must be provided, maximum stock must be greater than minimum stock and values must be greater than zero')
        }
    }

    const getProviders = useSelector(selectProvidersState())

    const selectProviderOnList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProvider(getProviders.filter((providers) => providers.id === e.target.value)[0])
    }

    return (
        <div>
            <form className="form" id="addProduct" onSubmit={(e) => onAdd(e)}>
                <label >Product name</label>
                <input type="text" id="name" placeholder="Product name..." onChange={(e) => setName(e.target.value)}/>
                <label >Description</label>
                <input type="text" id="description" placeholder="Product description..." onChange={(e) => setDescription(e.target.value)}/>
                <label >Price</label>
                <input type="number" min="0" id="phone" placeholder="Product price..." onChange={(e) => setPrice(Number(e.target.value))}/>
                <label >Alert of low stock</label>
                <input type="number" min="0" id="phone" placeholder="Minimum stock..." onChange={(e) => setMinimumStock(Number(e.target.value))}/>
                <label >Maximum Stock</label>
                <input type="number" min="0" id="phone" placeholder="Maximum stock..." onChange={(e) => setMaximumStock(Number(e.target.value))}/>
                <label >Select a provider</label>
                <select id="providers" name="providers" onChange={(e) => selectProviderOnList(e)}>
                    <option disabled selected> Select a provider </option>
                    {getProviders.map((provider) => <option key={provider.id} value={provider.id}>
                        {provider.providerName}
                    </option>)}
                </select>
                <input type="submit" value="Submit" />
                <br />
                <br />
                <button className='button3' onClick={() => navigate("/Inventory")}>Go Back</button><br />
            </form>
        </div>
    )
}


export default ProductForm;

