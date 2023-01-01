import React from 'react'
import { Link } from 'react-router-dom';
import CounterItemsCart from '../Carts/CounterItemsCart';
import FilterBy from '../FilterBy/FilterBy';
import SortBy from '../SortBy/SortBy'
import './nav.css';

function Nav({handleChangeFilter, counterCartItems}) {
    
  return (
    <>
      <nav className="product-filter">
        <div className="product-menu">
          <h1><Link to='/' className='menu-link'>Jackets</Link></h1>
          <h1><Link to='/about' className='menu-link'>About</Link></h1>
          <h1><Link to='/about' className='menu-link'>Login</Link></h1>
          <h1><Link to='/about' className='menu-link'>Register</Link></h1>
        </div>
          

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