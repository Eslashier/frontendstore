import React, { useEffect } from 'react';
import "../styles/tables.css";
import { useAppDispatch } from "../../state/store"
import { possibleStatus } from "../../configuration/possibleStatus"
import { selectProductsState, selectProductsStatus, selectProductsFetchError } from "../../state/features/productSlice"
import { getAllProducts } from "../../actions/Product/getAllProducts"
import { useSelector } from 'react-redux';
import ProductCreateTable from "./ProductCreateTableFiltered"

interface IProductListProps {
}

const ProductListTableFiltered: React.FunctionComponent<IProductListProps> = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === possibleStatus.IDLE) {
            dispatch(getAllProducts())
        }
    }, [dispatch])

    const getProducts = useSelector(selectProductsState())
    const status = useSelector(selectProductsStatus())
    const error = useSelector(selectProductsFetchError())

    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Min. Stock</th>
                        <th>Max. Stock</th>
                        <th>Provider</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                {!error && getProducts.map((product) => <ProductCreateTable key={product.id} props={product} />)}
            </table>

            <form className="form" id="addProduct">
                <label >Customer Name</label>
                <input type="text" id="name" placeholder="Customer name..." />
                <label >Employee Name</label>
                <input type="text" id="description" placeholder="Employee name..." />
            </form>

            <div className='centering'>
                <button className='button4'>Create order</button>
            </div>
        </div>

    )
}

export default ProductListTableFiltered;