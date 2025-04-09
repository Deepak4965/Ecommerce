import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/navbar/Nav'
import Footer from './components/Footer/Footer'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
 <>
 <BrowserRouter>
 <Nav />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/shop' element={<Shop />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/contact' element={<Contact />} />
</Routes>
 <Footer />
 </BrowserRouter>
 </>
  )
}

export default App
