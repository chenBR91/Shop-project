import React, {useState} from 'react'
import './FilterBy.css'

function FilterBy({handleChangeFilter}) {

  return (
    <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={handleChangeFilter}>  
            <option value="all Products">All Products</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
        </select>
    </div>
  )
}

export default FilterBy