import React, {useContext, useState} from 'react'
import AddCart from '../Carts/AddCart'
import { Link } from 'react-router-dom'
import './product.css'
//import CartProductsContext from '../../CartProductsContext'
import ProductsContext from '../../ProductsContext'

function Product({imageUrl, title, price, id, amount}) {


  return (  
    <div className="product-card">
        <div className="product-image">
          <Link to={`products/${id}`}>
            <img
                src={imageUrl}
                alt={imageUrl}
            />
          </Link>
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
        <div className='product-btn'>
          <AddCart situation={"increment"} id={id} style={{bgColor: 'rgb(107, 180, 107)', width: '45%'}}>Add to cart</AddCart>
          <label>{amount}</label>
          <AddCart situation={"decrement"} id={id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}}>Delete</AddCart>
        </div>
    </div>
    
  )
}

export default Product