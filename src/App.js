import React, {useState, useEffect} from 'react';
import ProductsContext from './ProductsContext';
import StoreContext from './StoreContext';
import CartProductsContext from './CartProductsContext';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './pages/About/About.js';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QueryUrl from './pages/Further/QueryUrl';

function App() {
  const [itemCollection, setItemCollection] = useState({});
  const [products, setProducts] = useState([])
  const [counterCartItems, setCounterCartItems] = useState(0);
  const [category, setCategory] = useState('all Products');
  const [sort, setSort] = useState(null);
  const [listProductInCart, setListProductInCart] = useState([]) 
  
  let countAttemptLoadProducts = 0;

  useEffect(()=>{
    uploadProductsApi();
  },[])

  const uploadProductsApi = async() => {
    const url = 'https://fakestoreapi.com/products'
    try{
      const res = await fetch(url);
      const answer = await res.json();
      const productsWithAmount = answer.map((ans)=> ( {...ans, 'amount': 0} ))
      setProducts(productsWithAmount);
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

  // Add amount to products
  // const productsWithAmount = products.map((ans)=> ( {...ans, 'amount': 0} ))
  

  useEffect(()=>{
    console.log('listProductInCart', listProductInCart);
  },[listProductInCart])
  

  const storeValues = {
    category,
    setCategory,
    sort,
    setSort }

  const productsValue = {
    allProducts: products, 
    setProducts};

  const cartValue = {
    listProductInCart, 
    setListProductInCart };


  return (
    <Router>
      <StoreContext.Provider value={storeValues}>
        <ProductsContext.Provider value={productsValue}>
          <CartProductsContext.Provider value={cartValue}>
            
            <div>
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/query" element={<QueryUrl />} />
              </Routes>
            </div>

          </CartProductsContext.Provider>
        </ProductsContext.Provider>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;