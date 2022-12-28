import React, {useState} from 'react'
import FilterBy from '../FilterBy/FilterBy';
import SortBy from '../SortBy/SortBy'
import './nav.css';

function Nav({handleChangeFilter}) {
    
  return (
    <>
        <nav className="product-filter">
            <h1>Jackets</h1>

            <div className="sort">
                <FilterBy handleChangeFilter={handleChangeFilter}/>
                <SortBy />
            </div>
        </nav>
    </>
  )
}

export default Nav