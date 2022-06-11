import '../../App.css'
import { useNavigate } from "react-router-dom";
import ProductListTable from '../../components/productList/ProductListTable'

const ProductListAll = () => {
  let navigate =useNavigate();
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