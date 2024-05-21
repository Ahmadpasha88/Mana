import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { PiCurrencyInrLight } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import { TbBed } from "react-icons/tb";
import { LuBan } from "react-icons/lu";
import { PiHouseLineThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const HostelOwnerView = () => {
  return (
    <div className='col-11 col-lg-10 m-auto'>
      <h3 className='text-center my-5 fw-bolder'>Lakshya Hostel</h3>
      <div className='row col-10 px-2 col-lg-6 gap-1 m-auto border rounded-2 py-5'>
        <button className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <LiaHomeSolid className='fw-bold fs-3'/>&nbsp;Rooms
        </button>

       
        <button className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <PiCurrencyInrLight className='fw-bold fs-3'/>&nbsp;Payment Info
        </button>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <PiUsersThreeLight className='fw-bold fs-3'/>&nbsp;Tenents Info
        </div>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <TbBed className='fw-bold fs-3'/>&nbsp;Unfilled beds
        </div>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <PiHouseLineThin className='fw-bold fs-3'/>&nbsp;Hostel
        </div>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <TfiUser className='fw-bold fs-3'/>&nbsp;Add Tenent
        </div>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <TfiUser className='fw-bold fs-3'/>&nbsp;Pending Tenents
        </div>
        <div className='btn btn-outline-dark col-11 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3'>
           <LuBan className='fw-bold fs-3'/>&nbsp;Add Complaint
        </div>

      </div>
    </div>
  )
}

export default HostelOwnerView
