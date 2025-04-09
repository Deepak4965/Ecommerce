import React, { useState } from 'react'
import Nav from '../../components/navbar/Nav'
import bg from '../../assets/bg0.gif'
import "./Home.css"
import { category } from '../../category'

import { dummydata } from '../../dummydata'
import Product from '../../components/product/product'
import Footer from '../../components/Footer/Footer'



const Home = () => {
 
  const [cate, setCate] = useState(dummydata)

  const filterProduct = (category) => {
    const updateData = dummydata.filter((items) => (items.category == category))
    setCate(updateData)
  }
  return (
    <div className='home'>
      {/* Discount image */}
      <div className="hero-bg">
        <img src={bg} />

      </div>
      {/* category card map */}
      <div className="category-section">
        {category.slice(0, 5).map((item) => (
          <div
          onClick={()=>{
            filterProduct(item.name)
          }}
          className="category-card">
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      {/* product-section */}
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 7).map((items) => (
          <Product name={items.name} price={items.price} image={items.image} id={items.id} />
        ))}
      </div>


    </div>
  )
}

export default Home
