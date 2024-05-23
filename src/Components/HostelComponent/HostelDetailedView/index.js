import React, { useContext, useEffect, useState } from "react";
import AvailableRooms from "../AvailableRooms";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Footer from "../../Footer";
import HostelRulesModal from "../HostelRulesModal";
import { GiWashingMachine } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { FaBowlRice } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { GiCctvCamera } from "react-icons/gi";
import Hostel from "../Hostel";
import { Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { NetworkStatusContext } from "../../Context/NetWorkStatusContext";
import Offline from "../../Offline";
import { PiShareFat } from "react-icons/pi";
import { handleShare } from "../../CommonUtils/ShareUtil";
import { useLike } from "../../CommonUtils/LikeUtil";
import { useParams } from 'react-router-dom';
import { hostelsData } from "../../CommonUtils/HostelsData";



const HostelDetailedView = () => {
  const { id } = useParams();
  
  const data=hostelsData[id-1];
  const isOnline = useContext(NetworkStatusContext);
  const { isLiked, handleLike } = useLike();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <>
      {isOnline ? (
        <div className="fw-medium col-12 m-auto pt-3 shadow-lg register-bg">
          <div className="row col-lg-10 m-auto">
            <div className="col-11 col-lg-5 m-auto mb-0 p-4 pb-5 p-lg-5 rounded-3 shadow-sm slider-container">
              <Slider {...settings}>
                <div>
                  <img
                    src={data.imageUrl}
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
              </Slider>
            </div>

            <div className="p-0 m-0 col-lg-6 m-auto p-3 details ">
              <div className="bg-white card text-dark p-3 rounded-3 shadow-lg">
                <h2
                  className="mb-3 fw-bold text-center"
                  style={{ color: "#081735" }}
                >
                  {data.name}
                </h2>
                <p className="mb-1">
                  <span className="fw-semibold">Address:</span> {data.address}
                </p>
                <p className="mb-3">
                  <span className="fw-semibold">Google Map:</span>{" "}
                  <button className="border-0 rounded-2 fw-bold text-dark-emphasis deatileviewBg py-1 px-4 mx-3">
                    Visit
                  </button>
                </p>
                <p className="mb-0 fw-semibold">Facilities:</p>
                <ul className="fw-normal d-flex flex-wrap gap-2">
                  <li className="btn btn-outline-dark fcl">
                    <IoWifi className="facility_logo" />
                    Wifi
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <TbAirConditioning className="facility_logo" /> Ac Rooms
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <GiCctvCamera className="facility_logo" /> CC Tv
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <IoWaterOutline className="facility_logo" /> Hot Water
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <FaBowlRice className="facility_logo" /> Food
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <FiMonitor className="facility_logo" /> Tv
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <GiWashingMachine className="facility_logo" /> Washing
                    Mechine
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <RiEBike2Line className="facility_logo" /> 2 Weeler Parking
                  </li>
                  <li className="btn btn-outline-dark fcl">
                    <FaCar className="facility_logo" /> 4 Weeler Parking
                  </li>
                </ul>
                <p>
                  <span className="fw-semibold">Offered Sharings:</span>{" "}
                  1,2,3,4,5,6,8 Sharings
                </p>

                <div className="col-12 d-flex justify-content-around flex-wrap gap-3 border-0">
                  <HostelRulesModal />
                  <button
                    onClick={handleLike}
                    className="btn  border border-1 border-dark"
                  >
                    Add to favorite &nbsp;
                    {isLiked ? (
                      <GoHeartFill
                        className="text-danger fs-3"
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <GoHeart className="fs-6" style={{ cursor: "pointer" }} />
                    )}
                  </button>
                
                  <button
                  onClick={handleShare}
                    className="btn border border-1 border-dark"
                  >
                    Share &nbsp;
                  
                      <PiShareFat className="fs-6"  style={{ cursor: "pointer" }} />
                  
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5 pt-3">
            <h3
              className="fw-semibold text-center mt-lg-4 ms-3"
              style={{ color: "#081735" }}
            >
              Rooms Available Now
            </h3>
            <AvailableRooms />
          </div>

          <div className="mt-5 pt-2 col-12 col-lg-10 m-auto">
            <h5 className="fw-medium mt-lg-4 ms-3" style={{ color: "#081735" }}>
              Similar Hostel's
            </h5>
            <hr className="mt-0 mb-4" />
            <div className="gap-3 mx-1 my-4 similar-one">
              {
                hostelsData.map(e=><Hostel key={e.id} data={e}/>)
              }
            </div>

            <div className="text-center my-3">
              <Link to="/hostels_list" style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  className="text-white btn fw-semibold border border-2"
                  style={{ backgroundColor: "#081735" }}
                >
                  Find More Similar Hostel's{" "}
                  <CiCircleChevRight className="fw-bold fs-3" />
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Offline />
      )}
    </>
  );
};

export default HostelDetailedView;
