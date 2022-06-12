import '../../App.css'
import AddProduct from '../../components/productList/ProductForm'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    <div className='main_content'>
      <h1>Add a product</h1>
      <AddProduct/>
    </div>
  )
}

export default ProductAdd