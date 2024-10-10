import React, { useState } from 'react'
import './Navbar.css'
import iconcart from './icon-cart.svg'
import logo from './logo.svg'
import avatar from './image-avatar.png'
import Cart from '../Cart/Cart'

const Navbar = () => {
  // const [opencart,setOpencart] = useState(false);
  

  return (
    <div className='main'>
    <div className='navbar'>
        <div className='right-navbar'>
           <img src={logo} alt='' />
           <ul>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </div>
        <div className='left-navbar'>
            <img className='icon' src={iconcart} alt='' />
            {/* {opencart?<Cart setOpencart={setOpencart} count={count} setCount={setCount} />:""} */}
            <img className='avtar' src={avatar} alt='' />
        </div>
    </div>
    <hr />
    </div>
  )
}

export default Navbar
