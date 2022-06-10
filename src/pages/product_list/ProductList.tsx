import '../../App.css'
import ProductListTable from '../../components/productList/ProductListTable'

const ProductList = () => {
  return (
    <div className='main_content'>
      <h1>Product list filtered</h1>
      <ProductListTable />
    </div>
  )
}

export default ProductList