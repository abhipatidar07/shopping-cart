import React, { useState } from 'react'
import './Body.css'
import image1 from './image-product-1.jpg'
import imagea from './image-product-1-thumbnail.jpg'
import image2 from './image-product-2.jpg'
import imageb from './image-product-2-thumbnail.jpg'
import image3 from './image-product-3.jpg'
import imagec from './image-product-3-thumbnail.jpg'
import image4 from './image-product-4.jpg'
import imaged from './image-product-4-thumbnail.jpg'
import Popup from '../Popup/Popup'
import Leftbody from '../leftbody/Leftbody'


const Body = () => {

    const [isPopupOpen,setIsPopUpOpen] = useState(false);
    const [popupImage,setPopupImage] = useState(null);
    // const [count,setCount] = useState(0);

    function handleimage(image){
       setIsPopUpOpen(true);
       setPopupImage(image);
    }
    function closehandler(){
        setIsPopUpOpen(false);
        setPopupImage(null);
    }
  return (
    <div className='body'>
      <div className='right-body'>
          <div className='right-upper'>
            <img src={image1} alt='' />
          </div>
          <div className='right-lower'>
            <img onClick={()=> handleimage(image1)} src={imagea} alt='' />
            <img onClick={()=> handleimage(image2)} src={imageb} alt='' />
            <img onClick={()=> handleimage(image3)} src={imagec} alt='' />
            <img onClick={()=> handleimage(image4)} src={imaged} alt='' />
          </div>
          {isPopupOpen?<Popup image={popupImage} close={closehandler} setImage={setPopupImage} />:""}
      </div>
      <div className='left-body'>
          <Leftbody />
      </div>
    </div>
  )
}

export default Body
