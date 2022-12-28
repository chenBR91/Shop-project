import React from 'react'
import Product from '../Product/Product'


function Products({allProducts}) {
  return (
    <>
        <section className="products">
        
        {allProducts.map((product, index)=>
            <Product 
             key={index}
             imageUrl={product.image} 
             title={product.title} 
             price={product.price}
            />
        )}

        </section>
    </>
  )
}

export default Products
