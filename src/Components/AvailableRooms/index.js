import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import { Link } from 'react-router-dom'


const AvailableRooms = () => {

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
      <div className='shadow-sm card col-11 col-md-8 col-lg-6 m-auto'>
        
      <div className="slider-container rounded-2">
        <Slider {...settings}>
          <div className='fs-6 fw-semibold'>
             <img src='https://specials-images.forbesimg.com/imageserve/910999556/960x0.jpg?fit=scale' className='w-100' alt=''/>
        <div className='my-4'>
        <p className='m-0 p-0'>Room Number: 102</p>
        <p className='m-0 p-0'>Price: 6500/-</p>
        <p className='m-0 p-0'>Sharing: 2 persons</p>
        <p className='m-0 p-0'>Available Beds: 1</p>
        </div>
        <div className="text-center my-4">
          <Link to='/beds' style={{textDecoration:'none'}}>
          <button type="button" className="text-white btn fw-semibold border border-2"  style={{backgroundColor: "#081735"}}>
            Book Now
          </button>
          </Link>
        </div>
    
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
       
      </div>
 
  )
}

export default AvailableRooms
