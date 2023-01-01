import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './ProductDetail.css';
import AddCart from '../../components/Carts/AddCart';


function ProductDetail({handleAddToCart}) {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  const {from, imageUrl, title, category} = location.state
  console.log('location', from, title, imageUrl);
 
  return (
    <div className='frame'>
        <h1>{category}</h1>
        <div className='box'>
          <div className='main-img'>
            <img src={imageUrl} alt={imageUrl} />
          </div>
          <div className='explain'>
            {title}
            <p>Price: 88</p>
            <div className='btn-add-cart'>
              <AddCart handleAddToCart={handleAddToCart} style={{bgColor:'rgb(107, 180, 00)', color:'white', width: '100%'}}>Add to cart</AddCart>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail