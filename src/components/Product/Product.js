import React from 'react'
import AddCart from '../Carts/AddCart'
import ViewButton from '../ViewButton/ViewButton'
import './product.css'

function Product({imageUrl, title, price, id, handleAddToCart}) {
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
          <ViewButton bgcolor={'rgb(224, 133, 59)'}>View {id}</ViewButton>
          <AddCart handleAddToCart={handleAddToCart} bgcolor={'rgb(107, 180, 107)'}>Add to cart</AddCart>
        </div>
    </div>
    
  )
}

export default Product