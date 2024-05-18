import React, { useContext, useState } from 'react'
import './index.css'
import { PiShareFat } from "react-icons/pi";
import { GoHeart,GoHeartFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/cartContext';




const Hostel = () => {
  const productTitle = 'Hostel';
  const productDescription = 'Check out this amazing hostel!';
  const productUrl = 'https://www.google.co.in/maps';
  const [isLiked,setIsLiked]= useState(false);

  const {cart,setCart}=useContext(MyContext);

  const handleShare = async ({ title=productTitle, text=productDescription, url=productUrl }) => {
    if (navigator.share) {
      const imageUrl='https://lh3.googleusercontent.com/p/AF1QipPsuoxINZ2bIzWnY3-A36cC_gDRbJ0L9fUWLgs6=w768-h768-n-o-v1';
      const textWithImage = `${text}\n${imageUrl}`;
      try {
        await navigator.share({
          title: title,
          text: textWithImage,
          url: url
        });
        console.log('Product shared successfully');
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      console.log('Web Share API not supported in this browser');
    }
  }

  const handleLike=()=>{
    let cartData = [...cart]
      setIsLiked(()=>!isLiked);
      if(!isLiked){
        cartData.push(1)
        setCart(()=>[...cartData]);
      }else{
        cartData.pop(1)
        setCart(()=>[...cartData]);
      }
     
  }

  return (
    
    <div className='shadow-lg rounded-2 p-2 col-11 m-auto col-md-4 col-lg-3 bg-white' role='button'>
      <div className='position-relative'>
        <div className='d-flex flex-column text-white fw-bold fs-2 gap-5 position-absolute end-0 pt-5 pe-3'>
          <PiShareFat onClick={handleShare} />
          {isLiked ? (
        <GoHeartFill onClick={handleLike} className='text-danger' style={{ cursor: 'pointer'}} />
      ) : (
        <GoHeart onClick={handleLike}  style={{ cursor: 'pointer' }} />
      )}
         
       
        </div>
      </div>
      <Link to="/hostel_details" style={{ textDecoration: "none" }}>
      <img src='https://lh3.googleusercontent.com/p/AF1QipPsuoxINZ2bIzWnY3-A36cC_gDRbJ0L9fUWLgs6=w768-h768-n-o-v1' className='w-100 h-100' alt='' />
      <p className='fw-medium m-0 text-center text-dark fs-5 '>Lakshya Excutive Boy's Pg Hostel</p>
      <p className='fw-medium text-center text-dark-emphasis '><span className='fw-semibold'>Starting</span> ₹5500/-</p>
      </Link>
      <div className='d-flex justify-content-between'>
      <Link to="/hostel_details" style={{ textDecoration: "none" }}>
        <button type='button' className='btn fw-bolder border border-1 border-dark'> View</button>
        </Link>
        <span className='p-0 m-0 border border-1 border-success rounded-1 text-success fw-bolder pt-2 p-1 px-2' >Verified</span>

        {/* <button className='btn btn-outline-warning fw-bold text-warning py-0 rounded-0'>Verified</button> */}
      </div>

    </div>
  )
}

export default Hostel
