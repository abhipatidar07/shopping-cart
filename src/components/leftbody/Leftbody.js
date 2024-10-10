import React, { useState } from 'react'
import './Leftbody.css'
import plus from './icon-plus.svg'
import minus from './icon-minus.svg'
import cart from './icon-cart.svg'
import Cart from '../Cart/Cart'

const Leftbody = () => {

  const [count,setCount] = useState(0);
  const [open,setOpen] = useState(false);

  return (
    <div className='leftbody'>
      <p>SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className='main-text'>These low-profile sneakers are your perfect casual wear comparison.Featuring a durable rubber outer sole.they'll withstand everything the weather can offer.</p>
      <div className='price-section'>
      <h2>$125</h2>
      <div className='discount-box'>
        <p>50%</p>
      </div>
      </div>
      <p className='underline-text'>$250.00</p>
      <div className='leftbody-lower'>
      <div className='counter'>
       <img onClick={()=>setCount(count-1)} className='minus' src={minus} alt=''/>
       <p>{count}</p>
       <img onClick={()=>setCount(count+1)} className='plus' src={plus} alt=''/>
      </div>
      <div className='btn-box'>
      <button onClick={()=>setOpen(true)} ><img src={cart} /> Add to cart</button>
      </div>
      {open?<Cart count={count} setOpen={setOpen} setCount={setCount}/>:""}
      {/* {opencart?<Cart setOpencart={setOpencart} />:""} */}
      </div>
    </div>
  )
}

export default Leftbody
