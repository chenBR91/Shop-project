import React from 'react';
import './AddCart.css';

function AddCart({children, bgcolor, handleAddToCart}) {
    const i=5;
    const addToCart=()=>{
        console.log('add to cart');
    }
  return (
    <>
        <button onClick={()=>handleAddToCart(1)} className='btn-add-cart' style={{background:bgcolor}}>{children}</button>
    </>
  )
}

export default AddCart