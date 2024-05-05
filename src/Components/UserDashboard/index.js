import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import Footer from "../Footer";

const UserDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
  return (
    <>
     <div className="row justify-content-center px-3 py-5 m-0">
      <div className="col-12 col-lg-6 m-auto user-dashboard border rounded-3 row shadow-lg profileCard">
        <h2 className="text-center col-12 my-5 highlight-lines fw-semibold"  style={{color: "#081735"}}>
          Lakshya Hostel
        </h2>
      
            <section className="row justify-content-center m-0 p-0">
              <div className="col-10 col-lg-4 m-auto m-0 p-3">
                <img src='https://th.bing.com/th/id/OIP.MBa2G4PCSUAo-pvdKfMetAHaIB?rs=1&pid=ImgDetMain' alt="profilePhoto" className="profilePhoto " />
              </div>
              <div className="col-12 col-lg-7 m-auto my-3 d-flex flex-column flex-wrap gap-2 px-4" style={{color: "#081735"}}>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Joining Date:</span> 02-09-2023
                </span>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Due Date:</span> 03-5-2023
                </span>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Amount:</span> 5500
                </span>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Room Number:</span> 202
                </span>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Remaining Days:</span> 1
                </span>
                <span className="text-nowrap fw-semibold">
                  <span className="fw-bold fs-6">Sharing:</span> 4
                </span>
              </div>
            </section>

            <div className="col-10 row m-auto p-0 m-0 mt-5 mb-3 gap-4">

              <button
                type="button"
                className="col-10 col-lg-3 m-auto btn payBtn fw-semibold p-2 px-3 rounded-3 text-white shadow-lg"
              >
                PayNow
              </button>
              <Link to="/details" className="col-10 p-0 col-lg-3 m-auto">
                <button
                  type="button"
                  className="col-12 hostelInfo fw-semibold p-2 btn"
                >
                  Hostel Info
                </button>
              </Link>
              <Link to="/" className="col-10 p-0 col-lg-4 m-auto">
                <button
                  type="button"
                  className="col-12 text-nowrap btn findMoreBtn fw-semibold p-2 shadow-lg"
                >
                  Find More Hostels
                </button>
              </Link>
            </div>
  
  
    
      </div>
    </div>
    
    </>
   
  );
};

export default UserDashboard;
