import React from 'react'
import './product.css'

function Product({imageUrl, title, price}) {
  return (
    
    <div className="product-card">
        <div className="product-image">
        <img
            src={imageUrl}
        />
        </div>
        <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        </div>
    </div>
    
  )
}

export default Product