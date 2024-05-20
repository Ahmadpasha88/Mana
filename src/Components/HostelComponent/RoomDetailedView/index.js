import React, { useContext, useEffect } from "react";
import { FaBed } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import HostelBookingConfirmationModal from "../HostelBooking";
import Footer from "../../Footer";
import { NetworkStatusContext } from "../../Context/NetWorkStatusContext";
import Offline from "../../Offline";

const HostelRoomDetailedView = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isOnline = useContext(NetworkStatusContext);

  return (
    <div className="m-0 p-0">
      {
        isOnline?(<div className="col-11 col-lg-10 p-0 py-lg-4 row m-0 m-auto gap-5 rounded-3 border border-1 mt-3 mb-4 register-bg room-details">
        <div className="m-auto  row col-lg-5 p-0 text-center">
          <div className="slider-container rounded-3 ">
            <Slider {...settings}>
              <div>
                <img
                  src="https://specials-images.forbesimg.com/imageserve/910999556/960x0.jpg?fit=scale"
                  alt=""
                  className="col-12"
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
        </div>

        <div className="row col-11 col-lg-5 px-0 m-0 m-auto mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="my-4 ms-2 ">
              <p className="m-0 p-0">
                <span className="fw-semibold">Room Number:</span> 102
              </p>
              <p className="m-0 p-0">
                <span className="fw-semibold">Price:</span> 6500/-
              </p>
              <p className="m-0 p-0">
                <span className="fw-semibold">Sharing:</span> 3 persons
              </p>
              <p className="m-0 p-0">
                <span className="fw-semibold">Available Beds:</span> 1
              </p>
              <p className="m-0 p-0">
                <span className="fw-semibold">Bath Room Type:</span> Attached
              </p>
            </div>
            <div>
              <p className="mb-0 ms-1 fw-semibold">Note:</p>
              <ul className="mb-0 pb-0">
                <li className="bullet-list-item">Reserved beds are marked in red.</li>
                <hr />
                <li className="bullet-list-item">Beds available are highlighted in green.</li>
                <hr />
                <li className="bullet-list-item">Bed in violet indicates a temporary hold; status will change soon.</li>
              </ul>

            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-5 my-3 shadow-lg rounded-3 text-center">
            <p className="fs-4 fw-bolder text-dark-emphasis text-center mt-3">
              Room Beds
            </p>
            <div className="row gap-2 pb-3 p-1 pb-lg-0">
              <button className="btn btn-outline-success p-0 m-auto col-4">
                <FaBed className="bedIcon px-2" />
              </button>
              <button className="btn btn-outline-danger p-0 m-auto col-4" disabled={true}>
                <FaBed className="bedIcon px-2" />
              </button>
              <button className="p-0 m-auto col-4 rounded-2" style={{ borderColor: 'rgba(104, 64, 190, 0.808)', borderWidth: '1px', borderStyle: 'solid' }} disabled={true}>
                <FaBed className="bedIcon px-2" style={{ color: 'rgba(104, 64, 190, 0.808)' }} />
              </button>


            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              {false ? (
                <p className="diagonal-button text-danger fw-medium border border-1 p-2 rounded-2 border-danger">
                  All Beds Filled
                </p>
              ) : (
                <HostelBookingConfirmationModal />
              )}

            </div>
          </div>
        </div>
      </div>):(<Offline/>)
      }
      
      <Footer />
    </div>
  );
};

export default HostelRoomDetailedView;
