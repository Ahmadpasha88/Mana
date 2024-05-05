import React from 'react'
import './index.css'

const Hostel = () => {
  return (
    <div className='shadow-lg rounded-2 p-2 col-11 m-auto col-md-4 col-lg-3 bg-white' role='button'>  
      <img src='https://lh3.googleusercontent.com/p/AF1QipPsuoxINZ2bIzWnY3-A36cC_gDRbJ0L9fUWLgs6=w768-h768-n-o-v1' className='w-100 h-100' alt=''/>
      <p className='fw-medium m-0 text-center text-dark fs-5 '>Lakshya Excutive Boy's Pg Hostel</p>
      <p className='fw-medium text-center text-dark-emphasis '><span className='fw-semibold'>Starting</span> ₹5500/-</p>
      <div className='d-flex justify-content-between'>
      <button type='button' className='btn fw-bolder border border-1 border-dark'> View</button>
      <button className='btn btn-outline-warning fw-bold text-warning py-0 rounded-0'>Verified</button>
      </div>
      
    </div>
  )
}

export default Hostel
