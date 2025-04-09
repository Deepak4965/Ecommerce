import React from 'react'
import './product.css'
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice'

const product = ({ name, image, price, id }) => {
  let dispatch = useDispatch()

  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className='price'>Rs {price}/-</span>
        <button onClick={() => {
          dispatch(AddItem({name:name,image:image,price:price,id:id}))
        }}>Add +</button>
      </div>
    </div>
  )
}

export default product
