import React from 'react'
import AddCart from '../Carts/AddCart'
import ProductDetail from '../ProductDetail/ProductDetail'
import './product.css'

function Product({imageUrl, title, price, handleAddToCart}) {
  return (
    
    <div className="product-card">
        <div className="product-image">
          <img
              src={imageUrl}
          />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
        <div className='product-btn'>
          <ProductDetail bgcolor={'rgb(224, 133, 59)'}>View</ProductDetail>
          <AddCart handleAddToCart={handleAddToCart} bgcolor={'rgb(107, 180, 107)'}>Add to cart</AddCart>
        </div>
    </div>
    
  )
}

export default Product