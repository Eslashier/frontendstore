import '../../App.css'
import ProductListTableFiltered from '../../components/productListFiltered/ProductListTableFiltered'

const ProductList = () => {
  return (
    <div className='main_content'>
      <h1>Create a new order</h1>
      <ProductListTableFiltered />
      <div className='centering'>
        <button className='button4'>Create order</button>
      </div>
    </div>
  )
}

export default ProductList