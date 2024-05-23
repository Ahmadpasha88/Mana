import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { PiUsersThreeLight } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import { TbBed } from "react-icons/tb";
import { PiHouseLineThin } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import { LuUserX } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import TenentsOfHostel from "../HostelComponent/TenentsOfHostel";
import { LuAlarmClock } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io";
import './index.css';


const HostelOwnerView = () => {

  const navigate = useNavigate();
  
  const handelWhatsup = () => {
    window.location.href = 'https://wa.me/8555893627';
  };

  const handelRooms=()=>{
   navigate('/rooms');
  }
  const handelPayments=()=>{
    navigate('/hostel_payment_info')
  }
  const handelTenentInfo=()=>{
    navigate('/tenents');
  }

  return (
    <div className="col-11 col-lg-6 m-auto">
      <h3 className="text-center my-5 fw-bolder">Lakshya Hostel</h3>
      <div className="border mb-3">
        <h3 className="fw-medium text-dark-emphasis ms-3 my-4">
          Quick Dashboard
        </h3>
        <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center mb-3">
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Total beds
            <br />
            <span className="fs-3 text-primary fw-bolder">200</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Filled beds
            <br />
            <span className="fs-3 text-success fw-bolder">100</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Empty beds
            <br />
            <span className="fs-3 text-danger-emphasis fw-bolder">100</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Pending Amount
            <br />
            <span className="fs-3 text-danger-emphasis fw-bolder">1,10,000</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Paid Amount <br />{" "}
            <span className="fs-3 text-success fw-bolder">4,40,000</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Paid Tenents <br />{" "}
            <span className="fs-3 text-success-emphasis fw-bolder">80</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Unpaid Tenents <br />{" "}
            <span className="fs-3 text-warning fw-bolder">20</span>
          </div>
          <div className="border rounded-2 p-2 p-lg-4 shadow-sm text-center">
            Current Due Excided Tenents <br />{" "}
            <span className="fs-3 text-danger fw-bolder">19</span>
          </div>
          <div className="border rounded-2 p-1 p-lg-4 shadow-sm text-center d-flex align-items-center gap-1 btn btn-danger">
            Remind <LuAlarmClock className="fs-4"/>
          </div>
        </div>
      </div>
      <div className="row px-2 gap-1 m-auto border mb-3 rounded-2 py-5">
        <button className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3" onClick={handelRooms}>
          <LiaHomeSolid className="fw-bold fs-3" />
          &nbsp;Rooms
        </button>

        <button className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3" onClick={handelPayments}>
          <RiMoneyRupeeCircleLine className="fw-bold fs-3" />
          &nbsp;Payment Info
        </button>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3" onClick={handelTenentInfo}>
          <PiUsersThreeLight className="fw-bold fs-3" />
          &nbsp;Tenents Info
        </div>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3">
          <TbBed className="fw-bold fs-2" />
          &nbsp;Beds Information
        </div>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3">
          <PiHouseLineThin className="fw-bold fs-3" />
          &nbsp;Hostel
        </div>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3">
          <FiUserPlus className="fw-bold fs-3" />
          &nbsp;Add Tenent
        </div>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3">
          <TfiUser className="fw-bold fs-3" />
          &nbsp;Pending Tenents
        </div>
        <div className="btn btn-outline-dark col-5 m-auto col-lg-4 border fs-6 fw-medium shadow-sm rounded-2 d-flex justify-content-center align-items-center p-3">
          <LuUserX className="fw-bold fs-3" />
          &nbsp;Add Complaint
        </div>
      </div>
      <div className="wht-btn">
         <IoLogoWhatsapp className="text-success" onClick={handelWhatsup} role="button"/>
      </div>
    </div>
  );
};

export default HostelOwnerView;
