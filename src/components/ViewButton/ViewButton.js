import React from 'react'
import '../Carts/AddCart.css';

function ProductDetail({children, bgcolor}) {
  return (
    <>
        <button className='btn-add-cart' style={{background:bgcolor}}>{children}</button>
    </>
  )
}

export default ProductDetail;