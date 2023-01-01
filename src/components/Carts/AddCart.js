import React from 'react';
import './AddCart.css';

function AddCart({children, handleAddToCart, style}) {
    
  return (
    <>
        <button onClick={()=>handleAddToCart(1)} className='btn-add-cart' style={{background:style.bgColor, color:style.color, width:style.width}}>{children}</button>
    </>
  )
}

export default AddCart