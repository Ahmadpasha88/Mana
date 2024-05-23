import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { PiShareFat } from "react-icons/pi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { handleShare } from '../../CommonUtils/ShareUtil';
import { useLike } from '../../CommonUtils/LikeUtil';


const Hostel = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {data} =props;
  const {id,name,imageUrl,price,category} = data
  
  const productTitle = 'Hostel';
  const productDescription = 'Check out this amazing hostel!';
  const productUrl = 'https://www.google.co.in/maps';

  const { isLiked, handleLike } = useLike();


  return (

    <div data-aos="zoom-in" className='shadow-lg rounded-2 p-2 col-11 m-auto col-md-4 col-lg-3 bg-white' role='button'>
      <div className='position-relative'>
        <div className='d-flex flex-column text-white fw-bold fs-2 gap-5 position-absolute end-0 pt-5 pe-3'>
          <PiShareFat onClick={() => handleShare({ title: productTitle, text: productDescription, url: productUrl })} />
          {isLiked ? (
            <GoHeartFill onClick={handleLike} className='text-danger' style={{ cursor: 'pointer' }} />
          ) : (
            <GoHeart onClick={handleLike} style={{ cursor: 'pointer' }} />
          )}


        </div>
      </div>
      <div className='hostel-hieght'>
      <Link to={`/hostel_details/${id}`} style={{ textDecoration: "none" }}>
        <img src={imageUrl} className='w-100 h-75' alt='' />
        <p className='fw-medium m-0 text-center text-dark fs-5 '>{name}</p>
        <p className='fw-medium text-center text-dark-emphasis '><span className='fw-semibold'>Starting</span> ₹{price}/-</p>
      </Link>
      </div>
     
      <p className='fw-normal'>Category: <span className='fw-bold'>{category}</span></p>
      <div className='d-flex justify-content-between'>
        <Link to={`/hostel_details/${id}`} style={{ textDecoration: "none" }}>
          <button type='button' className='btn fw-bolder border border-1 border-dark'> View</button>
        </Link>
        <span className='p-0 m-0 border border-1 border-success rounded-1 text-success fw-bolder pt-2 p-1 px-2' >Verified</span>
      </div>

    </div>
  )
}



export default Hostel




