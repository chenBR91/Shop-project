import React from 'react'
import Products from '../../components/Products/Products';

function Home({allProducts, handleAddToCart}) {

  return (
    <div>
        <Products allProducts={allProducts} handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default Home;