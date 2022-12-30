import React, {useState} from 'react'
import CounterItemsCart from '../Carts/CounterItemsCart';
import FilterBy from '../FilterBy/FilterBy';
import SortBy from '../SortBy/SortBy'
import './nav.css';

function Nav({handleChangeFilter, counterCartItems}) {
    
  return (
    <>
        <nav className="product-filter">
            <h1>Jackets</h1>

            <div className="sort">
                <CounterItemsCart counterCartItems={counterCartItems}/>
                <FilterBy handleChangeFilter={handleChangeFilter}/>
                <SortBy />
            </div>
        </nav>
    </>
  )
}

export default Nav