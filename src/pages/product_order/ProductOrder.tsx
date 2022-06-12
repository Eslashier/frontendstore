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

const ProductList = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => { if (user === null) { navigate("/") } }, [])

  const order = useSelector((state: RootState) => state.order)
  let total = order.productListSale.map(product => product.price * product.sold).reduce((a, b) => a + b, 0)

  const [clientName, setClientName] = useState('')
  const [salesmanName, setSalesmanName] = useState('')

  const dispatch = useAppDispatch();

  const onOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (clientName && salesmanName && total != 0) {
      const addBill: billType= {
        id: nanoid(),
        date: moment(new Date()).format("MM/DD/YYYY hh:mm:ss"),
        clientName: clientName,
        salesmanName: salesmanName,
        productListSale: order.productListSale,
        totalSale: total,
      }

      dispatch(createNewBill(addBill))
      navigate("/NewOrder")
    } else {
      alert('All the fields must be provided, maximum stock must be greater than minimum stock and values must be greater than zero')
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
        {<ProductOrderTable props={order} />}
      </table>
      <form className="form" id="addProduct" onSubmit={(e) => onOrder(e)}>
        <label >Total</label>
        <input type="number" id="total" value={total} />
        <label >Customer Name</label>
        <input type="text" id="name" placeholder="Customer name..." onChange={(e) => setClientName(e.target.value)}/>
        <label >Employee Name</label>
        <input type="text" id="description" placeholder="Employee name..." onChange={(e) => setSalesmanName(e.target.value)}/>
        <input type="submit" value="Order" />
      </form>
    </div>
  )
}

export default ProductList