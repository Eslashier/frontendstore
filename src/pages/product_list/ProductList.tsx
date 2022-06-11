import '../../App.css'
import ProductListTableFiltered from '../../components/productListFiltered/ProductListTableFiltered'

const ProductList = () => {
  return (
    <div className='main_content'>
      <h1>Create a new order</h1>
      <ProductListTableFiltered />
    </div>
  )
}

export default ProductList