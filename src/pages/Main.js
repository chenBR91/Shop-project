import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import About from './About/About'
import QueryUrl from './Further/QueryUrl'
import Home from './Home/Home'
import ProductDetail from './ProductDetail/ProductDetail'

function Main() {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/query" element={<QueryUrl />} />
        </Routes>
    </div>
  )
}

export default Main