import "../styles/forms.css";
import "../styles/tables.css";
import "../../App.css"
import React, { useState} from 'react';
import { useAppDispatch } from "../../state/store";
import { useLocation } from 'react-router-dom'
import { productType} from "../..//state/features/productSlice";
import { useNavigate } from "react-router-dom";
import { updateProduct} from "../../actions/Product/updateProduct"
import { nanoid } from '@reduxjs/toolkit';
import { receiptType } from "../../state/features/receiptSlice";
import { createNewReceipt } from "../../actions/Receipt/createNewReceipt";
import moment from "moment";

interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {

    interface stateToEdit {
        productEdit: productType
    } 

    const location = useLocation()
    const localState = location.state as stateToEdit;
    const { productEdit } = localState

    const [description, setDescription]= useState(productEdit.description)  
    const [price, setPrice]= useState(productEdit.price) 
    const [stock, setStock]= useState(productEdit.stock)
    const [addStock, setAddStock]= useState(0)

    const dispatch = useAppDispatch()

    let navigate =useNavigate();

    var oldPrice = productEdit.price;

    const onEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (description && price && addStock && (stock+addStock < productEdit.maximumStock)) {
            
            const productUpdated: productType = {
                id: productEdit.id,
                name: productEdit.name,
                description: description,
                price: price,
                sold: 0,
                stock: stock+addStock,
                minimumStock: productEdit.minimumStock,
                maximumStock: productEdit.maximumStock,
                provider: productEdit.provider,
            }
            dispatch(updateProduct(productUpdated))
            
            let dateNow = moment(new Date()).format("MM/DD/YYYY hh:mm:ss")

            if(addStock != 0){
                
                    const receiptCreated: receiptType= {
                        id: nanoid(),
                        units: addStock,
                        product: productUpdated,
                        date: dateNow,
                    }
                    dispatch(createNewReceipt(receiptCreated))
            }

            navigate("/Inventory")

        }else if (stock+addStock > productEdit.maximumStock){
            alert('You cannot add more stock to this product')
        }
        else {
            alert('Review the fields, no negative numbers or empty fields are supported')
        }
    }

    return (
        <div>
            <form className="form" id="addProduct" onSubmit={(e) => onEdit(e)}>
                <h1 >Editing: {productEdit.name}</h1>
                <label >Update description</label>
                <input type="text" id="description" placeholder={productEdit.description} onChange={(e) => setDescription(e.target.value)}/>
                <label >Price</label>
                <input type="text" min="0" id="price" placeholder={String(productEdit.price)} onChange={(e) => setPrice(Number(e.target.value))}/>
                <label >Stock Available</label>
                <br />
                <br />
                <th>{productEdit.stock}</th> 
                <br />
                <label >Add Stock</label>
                <input type="number" min="0" max={productEdit.maximumStock - productEdit.stock} id="stock" placeholder="Add stock..." 
                onChange={(e) => setAddStock(Number(e.target.value))}/>
                <input type="submit" value="Update" />
                <br />
                <br />
                <button className='button3' onClick={() => navigate("/Inventory")}>Go Back</button><br />
            </form>
        </div>
    )
}


export default ProductForm;

