import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'


const AllRoomsOfHostel = () => {

    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className='shadow-sm card p-0 bg-dark'>
                                <h4 className='fw-bolder text-center text-white'>Currently Added Rooms With ManaHostel</h4>
            <div className="slider-container rounded-2">
                <Slider {...settings}>
                    <div className='fs-6 fw-semibold'>

                        <img src='https://specials-images.forbesimg.com/imageserve/910999556/960x0.jpg?fit=scale' className='w-100' alt='' />
                        <div className='my-4 text-white'>
                            <p className='m-0 p-0'>Room Number: 102</p>
                            <p className='m-0 p-0'>Price: 6500/-</p>
                            <p className='m-0 p-0'>Sharing: 2 persons</p>
                            <p className='m-0 p-0'>Available Beds: 1</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 my-4 gap-2">
                            <Link to='/room_details' style={{ textDecoration: 'none' }}>
                                <button type="button" className="text-white btn fw-semibold border border-2" style={{ backgroundColor: "#081735" }}>
                                    Update
                                </button>
                            </Link>
                            <button className='btn btn-danger border border-2'>Delete</button>
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

export default AllRoomsOfHostel
