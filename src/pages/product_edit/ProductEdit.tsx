import '../../App.css'
import EditProduct from '../../components/productList/ProductEdit'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    <div className='main_content'>
      <EditProduct/>
    </div>
  )
}

export default ProductEdit