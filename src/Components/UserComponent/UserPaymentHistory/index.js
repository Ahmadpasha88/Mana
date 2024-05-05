import React from 'react'
import PaymentHistory from '../PaymentHistory'

import { FcCalendar } from "react-icons/fc";
import PaginationContainer from '../../Pagination';

const UserPaymentHistory = () => {
  return (
    <div className='col-11  col-lg-10 m-auto'>
    
      <h3
        className="text-center highlight-lines my-5 fw-semibold"
        style={{ color: "#081735" }}
      >
       Payment History
      </h3>
      <div className='row m-auto col-12 gap-4 p-0 mb-5 align-items-center'>
        
          
          
      <div className='row m-0 p-0 col-10 col-lg-2 m-auto m-lg-0'>
                <label htmlFor="availability" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <FcCalendar className='icon fs-4' /> From Date
                </label>
                <input type='date' role='button' className='fw-medium input-styling p-2 rounded-2' />
            </div>

            <div className='row m-0 p-0 col-10 col-lg-2 m-auto m-lg-0 '>
                <label htmlFor="availability" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <FcCalendar className='icon fs-4' /> To Date
                </label>
                <input type='date' role='button' className='fw-medium input-styling p-2 rounded-2' />
            </div>

            <div className='row m-0 p-0 col-10 col-lg-1 m-auto m-lg-0'>
                <button type='button' className='btn btn-outline-dark fw-medium mt-3'>Search</button>
            </div>


        
        </div>

      <div className='row justify-content-center gap-3 border border-1 rounded-2 p-2 m-1'>
  <PaymentHistory />
  <PaymentHistory />
  <PaymentHistory />
  <PaymentHistory />
  {/* <div>
  <PaginationContainer/>
  </div> */}

</div>
  


    </div>
  )
}

export default UserPaymentHistory
