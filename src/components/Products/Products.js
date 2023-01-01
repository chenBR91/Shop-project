import React from 'react'
import Product from '../Product/Product'


function Products({allProducts, handleAddToCart}) {
  return (
    <>
        <section className="products">
        {allProducts.map((product, index)=>
            <Product 
             key={index}
             imageUrl={product.image} 
             title={product.title} 
             price={product.price}
             category={product.category}
             id={product.id}
             handleAddToCart={handleAddToCart}
            />
        )}

        </section>
    </>
  )
}

export default Products
