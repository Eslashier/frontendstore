import '../../App.css'
import ProductListTableFiltered from '../../components/productListFiltered/ProductListTableFiltered'
import { RootState } from '../../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductOrderTable from '../../components/productList/ProductOrderTable';

const ProductList = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => { if (user === null) { navigate("/") } }, [])

  const order = useSelector((state: RootState) => state.order)

  console.log(order)

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
      <form className="form" id="addProduct">
        <label >Customer Name</label>
        <input type="text" id="name" placeholder="Customer name..." />
        <label >Employee Name</label>
        <input type="text" id="description" placeholder="Employee name..." />
      </form>
    </div>
  )
}

export default ProductList