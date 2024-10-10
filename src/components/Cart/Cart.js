import React, { useState } from 'react'
import './Cart.css'
import image from './image-product-1-thumbnail.jpg'
import deleteicon from './icon-delete.svg'

const Cart = ({setOpen,count,setCount}) => {
    // const [remove,setRemove] = useState(false);

    const handleRemove = ()=>{
        setCount(0);
    } 
  return (
    <div className='cart'>
      <p className="close" onClick={()=>setOpen(false)}>X</p>
      <h2>Cart</h2>
      <hr/>
      {count>0?<div className='list'>
        <img className='thumbnail' src={image} />
        <div className='text-area'>
            <p className='para1'>Fall Limited Edition Sneakers</p>
            <p className='para2'>$125.00 x {count} <p className='bold-price'>${125.00*count}</p></p>
        </div>
        <div className='delete'>
         <img onClick={handleRemove} src={deleteicon} alt=''/>
        </div>
      </div>:""}
      <button className='btn'>Checkout</button>
    </div>
  )
}

export default Cart
