import React from 'react'
import './Popup.css'
import closeimage from './icon-close.svg';
import image1 from './image-product-1.jpg';
import image2 from './image-product-2.jpg';
import image3 from './image-product-3.jpg';
import image4 from './image-product-4.jpg';
import imagea from './image-product-1-thumbnail.jpg'
import imageb from './image-product-2-thumbnail.jpg'
import imagec from './image-product-3-thumbnail.jpg'
import imaged from './image-product-4-thumbnail.jpg'
import nexticon from './icon-next.svg'
import previousicon from './icon-previous.svg'


const Popup = ({image,close,setImage}) => {
  const images = [image1, image2, image3, image4]; // Full images array
  const thumbnails = [imagea, imageb, imagec, imaged]; // Thumbnails array

  const currentIndex = images.indexOf(image);

  // Function to handle the next image
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
    setImage(images[nextIndex]);
  };

  // Function to handle the previous image
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the last image
    setImage(images[prevIndex]);
  };

  
  return (
    <div className='pop'>
    <div className='popup'>
      <div className='popup-box'>
        {/* <img className='prev' src={previousicon} alt='' /> */}
        <button className='prev' onClick={handlePrevious}>
            <img src={previousicon} alt='Previous' />
          </button>
        <img className='popup-big-image' src={image} />
        {/* <img className='next' src={nexticon} alt=''/> */}
        <button className='next' onClick={handleNext}>
            <img src={nexticon} alt='Next' />
          </button>
        <img className='close-btn' onClick={close} src={closeimage} />
        </div>
        <div className='popup-box-lower'>
           {/* <img className={image === imagea? 'new-image' : 'image'} src={imagea}  alt=''/>
           <img className={image === imageb? 'new-image' : 'image'} src={imageb} alt=''/>
           <img className={image === imagec? 'new-image' : 'image'} src={imagec} alt=''/>
           <img className={image === imaged? 'new-image' : 'image'} src={imaged} alt=''/> */}
           {thumbnails.map((thumbnail, idx) => (
            <img
              key={idx}
              className={idx === currentIndex ? 'new-image' : 'image'}
              src={thumbnail}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setImage(images[idx])} // Clicking thumbnail changes the image
            />
          ))}
        </div>
    </div>
    </div>
  )
}

export default Popup
