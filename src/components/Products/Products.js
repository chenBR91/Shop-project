import React, { useContext } from 'react'
import Product from '../Product/Product'
import ProductsContext from '../../ProductsContext'
import StoreContext from '../../StoreContext';
import CartProductsContext from '../../CartProductsContext';

function Products() {
  const { allProducts } = useContext(ProductsContext);
  const { category } = useContext(StoreContext);
  
  const filterArray = category === 'all Products' ? allProducts : allProducts.filter((filterProduct)=>filterProduct.category === category)
  
  return (
    <>
        <section className="products">
        {filterArray.map((product, index)=>
            <Product 
             index={index}
             key={index}
             imageUrl={product.image} 
             title={product.title} 
             price={product.price}
             category={product.category}
             id={product.id}
             amount={product.amount}
            />
        )}

        </section>
    </>
  )
}

export default Products
