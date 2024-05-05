import React, { useEffect } from "react";
import AvailableRooms from "../AvailableRooms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ExampleModal from "../Modal";
import Footer from "../Footer";

const HostelDetailedView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
  return (
    <div className="fw-medium col-12 m-auto pt-3 shadow-lg register-bg">
      <div className="row col-lg-10 m-auto">
 
        <div className="col-11 col-lg-5 m-auto mb-0 p-4 pb-5 p-lg-5 rounded-3 shadow-sm slider-container">
            <Slider {...settings}>
              <div>
              <img
            src="https://lh3.googleusercontent.com/p/AF1QipPsuoxINZ2bIzWnY3-A36cC_gDRbJ0L9fUWLgs6=w768-h768-n-o-v1"
            style={{ minHeight: "40vh", maxHeight: "70vh" }}
            className="w-100 object-fit-contain"
            alt=""
          />
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
       
   
        <div className="p-0 m-0 col-lg-6 m-auto p-3 details ">
          <div className="bg-white card text-dark p-3 rounded-3 shadow-lg">
            <h2 className="mb-3 logoFont fw-semibold highlight-lines text-center" style={{color: "#081735"}}>
              Lakshya Hostel
            </h2>
            <p className="mb-1"><span className="fw-semibold">Address:</span> 135 alhamra colony shaikpet Hyderabad telangana 500008 </p>
            <p className="mb-1 fw-semibold">Mobile: 9456788889 </p>
            <p className="mb-3"><span className="fw-semibold">Google Map:</span> <button className="border-0 rounded-2 fw-bold text-dark-emphasis deatileviewBg py-1 px-4 mx-3">Visit</button></p>
            <p className="mb-0 fw-semibold">Facilities:</p>
            <ul className="fw-normal d-flex flex-wrap gap-2">
              <li className="btn btn-outline-dark">Free Wifi</li>
              <li className="btn btn-outline-dark">Londry</li>
              <li className="btn btn-outline-dark"> ac rooms</li>
              <li className="btn btn-outline-dark">cc tv</li>
              <li className="btn btn-outline-dark">Free Hot water</li>
              <li className="btn btn-outline-dark">Free Food</li>
              <li className="btn btn-outline-dark"> tv</li>
              <li className="btn btn-outline-dark">Free Washing Mechine</li>
              <li className="btn btn-outline-dark">2 weeler parking</li>
              <li className="btn btn-outline-dark">4 weeler</li>
            </ul>
            <p><span className="fw-semibold">Offered Sharings:</span> 1,2,3,4,5,6,8 Sharings</p>

            <div className="col-3 border-0">
              <ExampleModal />
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 pt-3">
        <h3 className="fw-semibold text-center highlight-lines mt-lg-4 ms-3" style={{color: "#081735"}}>
        Rooms Available Now
        </h3>
        <AvailableRooms />
      </div>
      <Footer />
    </div>
  );
};

export default HostelDetailedView;
