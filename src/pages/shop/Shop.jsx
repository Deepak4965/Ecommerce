import React, { useState } from 'react'
import { FaShopify } from 'react-icons/fa6'
import './shop.css'
import { category } from '../../category'
import Product from '../../components/product/product'
import { dummydata } from '../../dummydata'

const Shop = () => {
     const [cate, setCate] = useState(dummydata)
    
      const filterProduct = (category) => {
        if (category==="All") {
          setCate(dummydata)
        } else{
           const updateData = dummydata.filter((items) => (items.category == category))
        setCate(updateData)
        }
       
      }
  return (
    <div className='shop'>
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
              {category.map((item) => (
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
          
            <div className="product-section">
        {cate.map((items) => (
          <Product name={items.name} price={items.price} image={items.image} id={items.id}  />
        ))}
        
      </div>
    </div>
  )
}

export default Shop
