import '../../App.css'
import ProductListTableFiltered from '../../components/productListFiltered/ProductListTableFiltered'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    
    <div className='main_content'>
      <h1>Create a new order</h1>
      <form id="table" onSubmit={() => navigate("/Order")}>
      <ProductListTableFiltered/>
      <input className="goToOrder" id="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ProductList