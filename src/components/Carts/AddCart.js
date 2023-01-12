import React, {useContext, useState, useEffect} from 'react';
import './AddCart.css';
import ProductsContext from '../../ProductsContext';

function AddCart({children, style, situation, id}) {
  const {allProducts, setProducts} = useContext(ProductsContext)

  const handleIncOrDec = () => {
    if(situation === 'increment') {
      const getIndex = allProducts.findIndex((product) => product.id === id)
      allProducts[getIndex]['amount'] += 1;
      setProducts([...allProducts]);
    } else if(situation === 'decrement') {
      const getIndex = allProducts.findIndex((product) => product.id === id)
      if(allProducts[getIndex]['amount'] > 0) {
        allProducts[getIndex]['amount'] -= 1;
        setProducts([...allProducts]);
      }
    }
  }

  return (
    <>
      <button onClick={handleIncOrDec} className='btn-add-cart' style={{background:style.bgColor, color:style.color, width:style.width}}>{children}</button>
    </>
  )
}

export default AddCart