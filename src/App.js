import React, {useState, useEffect} from 'react';
import ProductsContext from './ProductsContext';
import StoreContext from './StoreContext';
import './App.css';
import Nav from './components/Nav/Nav';
import allProducts from './data/data.js'
import About from './pages/About/About.js';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products/Products';

function App() {
  const [itemCollection, setItemCollection] = useState({});
  const [products, setProducts] = useState([])
  const [counterCartItems, setCounterCartItems] = useState(0);
  const [category, setCategory] = useState('all Products');
  const [sort, setSort] = useState(null);

  let countAttemptLoadProducts = 0;

  useEffect(()=>{
    uploadProductsApi();
  },[])

  const uploadProductsApi = async() => {
    const url = 'https://fakestoreapi.com/products'
    try{
      const res = await fetch(url);
      const answer = await res.json();
      setProducts(answer);
      countAttemptLoadProducts = 0;
    }catch(err){
      if(countAttemptLoadProducts < 3) {
        countAttemptLoadProducts++;
        console.log(`****attempt ${countAttemptLoadProducts}****`);
        uploadProductsApi();
      }
      console.log('err', err.message);
    }
  }

  
  const storeValues = {
    category,
    setCategory,
    sort,
    setSort,
    counterCartItems,
  }

  const productsValue = {allProducts: products, setProducts}

  return (
    <StoreContext.Provider value={storeValues}>
      <ProductsContext.Provider value={productsValue}>
        <Router>
          <div>
            <Nav />
            <Products />

            <Routes>
              {/* <Route path="/" element={<Home allProducts={products} handleAddToCart={handleAddToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/view/:productId" element={<ProductDetail handleAddToCart={handleAddToCart}/>} /> */}
            </Routes>

          </div>
        </Router>
      </ProductsContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;