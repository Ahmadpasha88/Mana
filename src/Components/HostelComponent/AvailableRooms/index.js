import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import { Link, useParams } from 'react-router-dom'
import { hostelsData } from '../../CommonUtils/HostelsData'


const AvailableRooms = () => {

  const { id } = useParams();
  const data = hostelsData[id - 1];
  const { availableRooms } = data;


  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='shadow-sm card col-11 col-md-8 col-lg-6 m-auto'>

      <div className="slider-container rounded-2">
        <Slider {...settings}>
          {
            availableRooms.map((e) => (
              <div className='fs-6 fw-semibold'>
                <img src={e.roomImage} className='w-100' alt='' />
                <div className='my-4'>
                  <p className='m-0 p-0'>Room Number: {e.roomNumber}</p>
                  <p className='m-0 p-0'>Price: {e.roomPrice}/-</p>
                  <p className='m-0 p-0'>Sharing: {e.sharings} persons</p>
                  <p className='m-0 p-0'>Available Beds: {e.availableBeds}</p>
                </div>
                <div className="text-center my-4">
                  <Link to='/room_details' style={{ textDecoration: 'none' }}>
                    <button type="button" className="text-white btn fw-semibold border border-2" style={{ backgroundColor: "#081735" }}>
                      Book Now
                    </button>
                  </Link>
                </div>

              </div>
            ))
          }


        </Slider>
      </div>

    </div>

  )
}

export default AvailableRooms
