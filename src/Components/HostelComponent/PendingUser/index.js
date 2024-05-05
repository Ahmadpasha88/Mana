import React from "react";
import { FaEye } from "react-icons/fa";

const PendingUser = () => {
  return (
    <>
   
    <div className="row gap-1 mb-3 border border-info-subtle border-2 rounded-2 py-2">
      <div className="col-12 col-lg-9 flex-wrap row d-lg-flex justify-content-center align-items-center">
        <div className="col-4 rounded-circle">
        <img src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/ms-dhoni-39.jpg" className="w-50 h-75 rounded-circle" alt=""/>
        </div>
        <div className="col-6 row py-4">
        <span>User Name:</span>
        <span>User Phone:</span>
        <span>Room Number</span>
        <span>Address</span>
        </div>
       
      </div>

      <div className="col-10 col-lg-6 m-auto">
        <button className="btn  text-white text-nowrap">View <FaEye/> </button>
      </div>
    </div>
    </>
    
  );
};

export default PendingUser;
