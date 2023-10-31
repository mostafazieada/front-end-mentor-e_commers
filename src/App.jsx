import Header from './components/header/header'
import Product from './components/product-page/product'
import Context from './context/context'



function App() {



  return (
    <Context>
      <Header />
      <Product />
    </Context>
  )
}

export default App
