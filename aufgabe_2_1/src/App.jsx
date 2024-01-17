
import './App.css'
import ProductList from './assets/components/productList/ProductList'
import products from "./assets/data/products"

function App() {
  console.log(products);
  return (
    <>
      <ProductList products = {products}/>
    </>
  )
}

export default App
