import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
 
      <div className="footer-section contact-form row m-0 p-0 gap-3 py-3 bg-white shadow-lg">
        <div className="col-11 col-lg-4 footer-menu-font">
          <div className="d-flex align-items-center my-3">
            <img
             src="./AppLogo.png"
              width="70px"
              height="70px"
              className="p-0 rounded-circle m-0"
              alt="Logo"
            />
            <div className="ms-2">
            <h3 className="mt-4 fw-bold lh-0 m-0" style={{color:'#081735'}}><span style={{fontSize:"25px"}}>Mana</span><span style={{fontSize:"17px",fontWeight:"300"}}>Hostel</span></h3>
                <p className="slogon m-0 logoFont lh-0">
                  Stay Smart. Stay Connected
                </p>
            </div>
          </div>

          <p className='footer-text'>
            Mana Hostel is India's fastest growing “Hostels and PGs Booking and
            hostel management platform” that makes it easier for you to find the
            best suited Hostel for your budget and needs.
          </p>
        </div>
        <div className="col-11 text-start px-2 col-lg-3 p-0 p-lg-1 m-0 m-lg-1 mb-2">
          <ul className="footer-menu-font m-0 p-0 footer-text-color">
            <li>
              <Link  to="/"
                  className="nav-link fw-semibold"
                >
                    Home
                </Link>
                </li>
            <li>   <Link
                  to="/contact"
                  className="nav-link fw-semibold"
                >
                  Contact Us
                </Link></li>
                <li>
                <Link  to="/about"
                  className="nav-link fw-semibold"
                >
                    About Us
                </Link>
                </li>
               
            <li className='fw-semibold'>Refund Policy</li>
            <li className='fw-semibold'>Terms And Conditions</li>
          </ul>
        </div>
        <div className="col-10 text-center col-lg-3 footer-menu-font my-3 py-2">
         <p className="footer-text-color shadow-lg p-3 rounded-5 text-center">manahostel@info.gmail.com</p>
        </div>
      </div>
 
  )
}

export default Footer
