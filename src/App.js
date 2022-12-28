import React, {useState, useEffect} from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import allProducts from './data/data.js'


function App() {
  const [itemCollection, setItemCollection] = useState({});
  const [products, setProducts] = useState(allProducts)


  const handleChangeFilter=(e)=>{
    setItemCollection({value:e.target.value});
    updateFilterByCollection();
  }


  const updateFilterByCollection=()=>{
    console.log('itemCollection', itemCollection);
    if(itemCollection.value ==='all Products'){
      setProducts(allProducts);
      console.log('all products!!!');
    }else {
      const arrFilterByCollection = allProducts.filter((product)=>product.category===itemCollection.value)
      setProducts(arrFilterByCollection);
      console.log('arrFilterByCollection', arrFilterByCollection);
    }
  
  }

  
  return (
    <div>
      <Nav handleChangeFilter={handleChangeFilter}/>
      <Products allProducts={products}/>
    </div>
  );
}

export default App;