import React from 'react';
import './AddCart.css';

function AddCart({children, bgcolor}) {
    const addToCart=()=>{
        console.log('add to cart');
    }
  return (
    <>
        <button onClick={addToCart} className='btn-add-cart' style={{background:bgcolor}}>{children}</button>
    </>
  )
}

export default AddCart