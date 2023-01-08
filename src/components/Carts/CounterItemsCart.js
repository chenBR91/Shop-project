import React, {useContext} from 'react';
import '../FilterBy/FilterBy.css';
import { FiShoppingCart } from "react-icons/fi";
import StoreContext from '../../StoreContext';

function CounterItemsCart() {
  const { counterCartItems } = useContext(StoreContext)

  return (
    <div className="collection-sort">
        <label>Cart:</label>
        <div>{ counterCartItems }<FiShoppingCart/></div>
        
    </div>
  )
}

export default CounterItemsCart;