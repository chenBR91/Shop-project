import React from 'react'
import AddCart from '../Carts/AddCart'
import ViewButton from '../ViewButton/ViewButton'
import './product.css'

function Product({imageUrl, title, price, category, id}) {
  return (
    
    <div className="product-card">
        <div className="product-image">
          <img
              src={imageUrl}
              alt={imageUrl}
          />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
        <div className='product-btn'>
          {/* <ViewButton imageUrl={imageUrl} title={title} category={category} id={id} style={{bgColor:'rgb(224, 133, 59)', width: '45%'}}>View {id}</ViewButton>
          <AddCart handleAddToCart={handleAddToCart} style={{bgColor: 'rgb(107, 180, 107)', width: '45%'}}>Add to cart</AddCart> */}
        </div>
    </div>
    
  )
}

export default Product