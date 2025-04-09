import React from 'react'
import './CartCard.css'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { RemoveItem } from '../../redux/cartSlice'
const CartCard = ({name,price,image,id}) => {
    let dispatch=useDispatch()
    return (
        <div className='CartCard'>
            <div className="left-card">
                <img src={image} alt="" />
                <div className="name-price">
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
            </div>
            <div className="right-card">
                <button onClick={()=>{
                    dispatch(RemoveItem(id))
                }}>Remove <RiDeleteBin6Line /></button>
            </div>
        </div>
    )
}

export default CartCard
