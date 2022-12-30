import React, {useState} from 'react';
import '../FilterBy/FilterBy.css';
import { FiShoppingCart } from "react-icons/fi";

function CounterItemsCart({counterCartItems}) {

  return (
    <div className="collection-sort">
        <label>Cart:</label>
        <div>{counterCartItems}<FiShoppingCart/></div>
        
    </div>
  )
}

export default CounterItemsCart;