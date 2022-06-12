import '../../App.css'
import { useNavigate } from "react-router-dom";
import ProductListTable from '../../components/productList/ProductListTable'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const ProductListAll = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    <div className='main_content'>
      <h1>Inventory</h1>
      <ProductListTable />
      <div className='centering'>
        <button className='button4' onClick={() => navigate("/ProductAdd")}>Add product</button>
      </div>
    </div>
  )
}

export default ProductListAll