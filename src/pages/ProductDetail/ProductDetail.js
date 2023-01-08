import React, {useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './ProductDetail.css';
import AddCart from '../../components/Carts/AddCart';

// const location = useLocation();

function ProductDetail() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const paramsId = params.productId

  useEffect(() => {
    getProductId()
  }, [])

  const getProductId = async() => {
    const url = `https://fakestoreapi.com/products/${paramsId}`;
    try {
      const res = await fetch(url);
      const product = await res.json();
      setSingleProduct(product);
    } catch(err) {
      console.log('err', err);
    }
  }

  const {image, price, title, category} = singleProduct;
useEffect(()=>{console.log(singleProduct)},[singleProduct])

 return (
    <div className='frame'>
        <h1>{category}</h1>
        <div className='box'>
          <div className='main-img'>
            <img src={image} alt={image} />
          </div>
          <div className='explain'>
            {title}
            <p>Price: 88</p>
            <div className='btn-add-cart'>
              {/* <AddCart handleAddToCart={handleAddToCart} style={{bgColor:'rgb(107, 180, 00)', color:'white', width: '100%'}}>Add to cart</AddCart> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail