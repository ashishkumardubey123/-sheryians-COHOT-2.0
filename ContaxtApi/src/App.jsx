import React from 'react'
import Nav from './Components/Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Product from './Components/Product.jsx'

import ProductDetails from './Components/SelactedProduct.jsx'


function App() {
  return (
    <div>
      <Nav />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />

    </Routes>

    </div>
  )
}

export default App
