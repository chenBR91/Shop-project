import React, { useState, useEffect } from "react";
import ProductsContext from "./ProductsContext";
import StoreContext from "./StoreContext";
import CartProductsContext from "./CartProductsContext";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loding from "./components/Loding/Loding";
import Main from "./pages/Main";

function App() {
  const [itemCollection, setItemCollection] = useState({});
  const [products, setProducts] = useState([]);
  const [counterCartItems, setCounterCartItems] = useState(0);
  const [category, setCategory] = useState("all Products");
  const [sort, setSort] = useState(null);
  const [listProductInCart, setListProductInCart] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  let countAttemptLoadProducts = 0;

  useEffect(() => {
    uploadProductsApi();
  }, []);

  const uploadProductsApi = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const res = await fetch(url);
      const answer = await res.json();
      const productsWithAmount = answer.map((ans) => ({ ...ans, amount: 0 }));
      setProducts(productsWithAmount);
      setIsLoding(false);
      countAttemptLoadProducts = 0;
    } catch (err) {
      if (countAttemptLoadProducts < 3) {
        countAttemptLoadProducts++;
        console.log(`****attempt ${countAttemptLoadProducts}****`);
        uploadProductsApi();
      }
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    console.log("listProductInCart", listProductInCart);
  }, [listProductInCart]);

  const storeValues = {
    category,
    setCategory,
    sort,
    setSort,
  };

  const productsValue = {
    allProducts: products,
    setProducts,
    listProductInCart,
    setListProductInCart
  };

  
  return (
    <Router>
      <StoreContext.Provider value={storeValues}>
        <ProductsContext.Provider value={productsValue}>
          <div>{isLoding ? <Loding /> : <Main />}</div>
        </ProductsContext.Provider>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
