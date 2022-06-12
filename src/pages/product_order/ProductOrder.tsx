import '../../App.css'
import { RootState, useAppDispatch } from '../../state/store';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductOrderTable from '../../components/productList/ProductOrderTable';
import { billType } from '../../state/features/billSlice';
import moment from 'moment';
import { createNewBill } from '../../actions/Bill/createNewBill';
import { nanoid } from '@reduxjs/toolkit';
import { addProduct, emptyProducts, orderType } from '../../state/features/orderSlice';
import { productType } from '../../state/features/productSlice';
import { updateProduct } from '../../actions/Product/updateProduct';

const ProductOrder = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()
  useEffect(() => { if (user === null) { navigate("/") } }, [])

  const order = useSelector((state: RootState) => state.order)

  const auxState: orderType = {
    productListSale: []
}

  let test = [...order.productListSale]

  test.reduceRight((acc, obj, i) => {
    acc[obj.id]? test.splice(i, 1) : acc[obj.id] = true;
    return acc;
  }, Object.create(null));

  test.map(object =>
    auxState.productListSale.push(object))
  

  let total = auxState.productListSale.map(product => product.price * product.sold).reduce((a, b) => a + b, 0)

  const [clientName, setClientName] = useState('')
  const [salesmanName, setSalesmanName] = useState('')

  const dispatch = useAppDispatch();

  const onOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (clientName && salesmanName && total != 0) {
      const addBill: billType = {
        id: nanoid(),
        date: moment(new Date()).format("MM/DD/YYYY hh:mm:ss"),
        clientName: clientName,
        salesmanName: salesmanName,
        productListSale: auxState.productListSale,
        totalSale: total,
      }

      dispatch(createNewBill(addBill))
      dispatch(emptyProducts())
      navigate("/NewOrder")

      let productToUpdate = [...auxState.productListSale]
 
      productToUpdate.map(product => {
        const productUpdated: productType = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          sold: 0,
          stock: product.stock - product.sold,
          minimumStock: product.minimumStock,
          maximumStock: product.maximumStock,
          provider: product.provider,
        }

        if (productUpdated.minimumStock > productUpdated.stock) {
          console.log(productUpdated.minimumStock)
          console.log(productUpdated.stock)
          alert('The item has reached the minimumStock please contact the provider')
        }

        dispatch(updateProduct(productUpdated))

      })

    } else {
      alert('All the fields must be provided')
    }
  }

  return (
    <div className='main_content'>
      <table id="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {<ProductOrderTable props={auxState} />}
      </table>
      <form className="form" id="addProduct" onSubmit={(e) => onOrder(e)}>
        <label >Total</label>
        <input type="number" id="total" value={total} />
        <label >Customer Name</label>
        <input type="text" id="name" placeholder="Customer name..." onChange={(e) => setClientName(e.target.value)} />
        <label >Employee Name</label>
        <input type="text" id="description" placeholder="Employee name..." onChange={(e) => setSalesmanName(e.target.value)} />
        <input type="submit" value="Order" />
        <br />
        <br />
        <button className='button3' onClick={() => {navigate("/NewOrder");dispatch(emptyProducts())}}>Go Back</button><br />
      </form>
    </div>
  )
}

export default ProductOrder