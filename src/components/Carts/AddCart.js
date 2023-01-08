import React, {useContext, useState} from 'react';
import './AddCart.css';
import CartProductsContext from '../../CartProductsContext';
import ProductsContext from '../../ProductsContext';

function AddCart({children, style, situation, id}) {

  const {listProductInCart, setListProductInCart} = useContext(CartProductsContext);
  const {allProducts, setProducts} = useContext(ProductsContext)
  const { amount, setAmount } = useContext(CartProductsContext);
  const [newProductArray, setNewProductArray] = useState(allProducts);

  const handleIncOrDec = () => {
    if(situation === 'increment') {
      const getProduct = allProducts.filter((product) => product.id === id)
      setListProductInCart(listProductInCart => [...listProductInCart, getProduct[0]]);
      setAmount(amount+1);

      newProductArray[0]['amount'] +=1;
      setNewProductArray(newProductArray);
      setProducts(newProductArray=> newProductArray);
      console.log('increment to amount with state', newProductArray);
      //console.log('allProducts to amount with state', allProducts);


    } else if(situation === 'decrement') {
      if(amount > 0) {
        const getIndex = listProductInCart.findIndex((arr)=> arr.id === id);
        listProductInCart.splice(getIndex, getIndex !== -1 ? 1 : 0)
        setListProductInCart([...listProductInCart]);
        setAmount(amount-1);
      }
    }
  }

  return (
    <>
      <button onClick={handleIncOrDec} className='btn-add-cart' style={{background:style.bgColor, color:style.color, width:style.width}}>{children}</button>
    </>
  )
}

export default AddCart