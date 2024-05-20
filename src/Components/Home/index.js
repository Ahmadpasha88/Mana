// import React, { useState } from "react";
// import Hostel from "../Hostel";
// import { useEffect } from "react";
// import { FaArrowCircleRight } from "react-icons/fa";
// import { TbHomeSearch } from "react-icons/tb";
// import "./index.css";
// import Footer from "../Footer";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

// const Home = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
// },[]);

//   const points = [
//     "ManaHostel Helps Us To Find Best Hostel/Pg With Zero Efforts.",
//     "Travel smarter, stay better. Let us help you find the ideal hostel for your journey.",
//     "Explore the globe, one hostel at a time. Your next adventure starts with us.",
//   ];

//   const [currentPointIndex, setCurrentPointIndex] = useState(0);
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (index < points[currentPointIndex].length) {
//         setText(
//           (prevText) => prevText + points[currentPointIndex].charAt(index)
//         );
//         setIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(interval);
//         setTimeout(() => {
//           setText("");
//           setIndex(0);
//           setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
//         }, 800); // Change the delay between points as needed
//       }
//     }, 100); // Change the delay between characters as needed

//     return () => clearInterval(interval);
//   }, [currentPointIndex, index, points]);

//   return (
//     <div className="row m-0 p-0 homeScreen">
//       <section className="pt-1 pt-lg-5" data-aos="zoom-out-down">
//         <div className="text-center col-11 col-lg-7 m-auto text-wrap highlight-lines fs-5 my-5 py-5 points-container slide-up">
//           <h5 id="hey" className="animated-text slide-up text-wrap text-dark-emphasis">
//             {text}
//           </h5>
//         </div>

//         <div className="row m-1 col-11 col-md-8 col-lg-6 m-auto mt-5 mb-2 mb-lg-5 py-3 gap-2">
//           <input
//             type="search"
//             placeholder="Search by Hostel, Area, City, Pincode ..."
//             className="col-10 col-lg-7 m-auto rounded-3 p-3"
//           />
//           <select className="col-10 col-lg-3 m-auto rounded-3 p-3 bg-white">
//             <option value="">All</option>
//             <option value="">Men's Hostels</option>
//             <option value="">Womens Hostels</option>
//             <option value="">Others Hostels</option>
//           </select>
//         </div>
//         <div className="d-flex justify-content-center mb-5 p-0 py-2">
//           <button
//             type="button"
//             className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-3 col-5 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
//             style={{ backgroundColor: "#081735" }}
//           >
//             <TbHomeSearch className="fs-3" /> Search
//           </button>
//         </div>

//         <div className="text-center  fs-5 fw-medium mt-5" >
//           <p className="highlight-lines" style={{color: "#081735"}}>Discover, Compare, Stay Smart</p>
//         </div>
//       </section>
//       <section
//         className="d-flex flex-column justify-content-center align-items-center mt-0"
//         style={{ height: "80vh", width: "100vw" }}
//       >
//         <h3 className="text-center mb-5 fw-medium highlight-lines" style={{color: "#081735"}}>
//         Locations we are Present
//         </h3>

//         <div
//           className="col-10 col-md-5 col-lg-3 bg-white rounded-3 shadow-lg border p-3"
//           data-aos="zoom-in"
//         >
//           <Link to='/hostelList' style={{textDecoration:'none'}}>
//           <img
//             src="https://th.bing.com/th/id/OIP.LjwbfZrvkVpW0xzjTxrvygHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//             alt=""
//             className="w-100"
//           />
//           <p className="text-center text-dark-emphasis m-0 fs-3 p-0 highlight-lines">Hyderabad</p>
//           {/* <p className="p-0 ps-2 m-0">Hostels: 800</p> */}
//           <p className="text-end p-0 me-3 m-0 pb-1 fs-3">
//             {" "}
//             <FaArrowCircleRight style={{color: "#081735"}} />
//           </p>
//           </Link>
//         </div>

//       </section>
//       <section>
//         <h3 className="text-center highlight-lines mb-5 fw-medium" style={{color: "#081735"}}>
//           Recently Added Hostels
//         </h3>

//         <div className="row col-11 gap-2 gap-lg-1 col-md-8 col-lg-6 text-center m-auto mb-5 text-dark">
//           <p className="fw-bold text-center mb-0 mb-lg-1">
//             Search by category wise
//           </p>
//           <button className="col-9 col-lg-3 m-auto btn btn-outline-dark fw-semibold">
//             All
//           </button>
//           <button className="col-9 col-lg-3 m-auto btn  btn-outline-dark  fw-semibold">
//             Men's Hostel
//           </button>
//           <button className="col-9 col-lg-3 m-auto btn btn-outline-dark fw-semibold">
//             Women's Hostel
//           </button>
//         </div>
//         <Link to="/details" style={{ textDecoration: "none" }}>
//           <div data-aos="zoom-in">
//             <Hostel />
//           </div>
//         </Link>

//         <div className="text-center my-4">
//           <Link to='/hostelList'>
//           <button
//             type="button"
//             className="text-white btn fw-semibold"
//             style={{ backgroundColor: "#081735" }}
//           >
//             Explore more <FaArrowCircleRight />
//           </button>
//           </Link>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };
// export default Home;

// .....................................................................

// import React, { useState, useEffect, useMemo } from "react";
// import Hostel from "../HostelComponent/Hostel";
// import { FaArrowCircleRight } from "react-icons/fa";
// import { TbHomeSearch } from "react-icons/tb";
// import "./index.css";
// import Footer from "../Footer";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import { MdOutlineArrowCircleRight } from "react-icons/md";
// import Loader from "../Loader";

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const [currentPointIndex, setCurrentPointIndex] = useState(0);
//   const [text, setText] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(0)

//   useEffect(() => {
//     setLoading(false);
//     window.scrollTo(0, 0);
//   }, []);

//   const backgroundImages = useMemo(
//     () => [
//       "/Untitled design.png",
//       "/pexels-vlada-karpovich-7368204 (1).jpg",
//       "/pexels-ketut-subiyanto-4245927.jpg",
//     ],
//     []
//   );

//   const points = useMemo(
//     () => [
//       "ManaHostel Helps Us To Find Best Hostel/Pg With Zero Efforts.",
//       "Travel smarter, stay better. Let us help you find the ideal hostel for your journey.",
//       "Explore the globe, one hostel at a time. Your next adventure starts with us.",
//     ],
//     []
//   );

//   useEffect(() => {
//     const preloadImages = () => {
//       backgroundImages.forEach((image) => {
//         const img = new Image();
//         img.onload = () => {
//           setLoading(false);
//         };
//         img.onerror = (error) => {
//           console.error("Error loading image:", error);
//           setLoading(false);
//         };
//         img.src = process.env.PUBLIC_URL + image;
//       });
//     };

//     preloadImages();
//   }, [backgroundImages]);

//   const onChangeSelectedCategory = (e) => {
//     setSelectedCategory(parseInt(e.target.value)); // Assuming value is a string, so parse to integer
//   };

//   useEffect(() => {
//     backgroundImages.forEach((image) => {
//       const img = new Image();
//       img.src = image;
//     });
//   }, [backgroundImages]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (text.length < points[currentPointIndex].length) {
//         setText((prevText) => prevText + points[currentPointIndex][text.length]);
//       } else {
//         clearInterval(interval);
//         setTimeout(() => {
//           setText("");
//           setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
//         }, 4);
//       }
//     }, 150);

//     return () => clearInterval(interval);
//   }, [text, currentPointIndex, points]);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     if (index < points[currentPointIndex].length) {
//   //       setText((prevText) => prevText + points[currentPointIndex].charAt(index));
//   //       setIndex((prevIndex) => prevIndex + 1);
//   //     } else {
//   //       clearInterval(interval);
//   //       setTimeout(() => {
//   //         setText("");
//   //         setIndex(0);
//   //         setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
//   //         setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//   //       }, 3000); // Change the delay between points as needed
//   //     }
//   //   }, 100); // Change the delay between characters as needed

//   //   return () => clearInterval(interval);
//   // }, [currentPointIndex, index, points]);

//   return (
//     <div className="row m-0 p-0 homeScreen">

// {loading ? (
//         <Loader />
//       ) : (
//         <>

//       <section className="pt-1 pt-lg-5 mb-5 section-1"

//         style={{
//           backgroundImage: `linear-gradient(174deg, #1a1a1a 7.97%, #1a1a1a 9.3%, rgba(26, 26, 26, 0.0409746) 87.47%, #1a1a1a 100%),  url('${process.env.PUBLIC_URL + backgroundImages[currentPointIndex]}')`,

//           minHeight: "84vh"
//         }}
//         data-aos="zoom-out-down"

//       >

//         <div className="text-center col-11 col-lg-7 m-auto text-wrap highlight-lines fs-5 my-5 py-5 points-container slide-up text-white point-shadow">
//           <h5 id="hey" className="animated-text slide-up text-wrap fw-bolder fs-3">
//             {text}
//           </h5>
//         </div>
//        <br/>
//        <br/>
//        <br/>
//        <br/>
//        <br/>

//         <div className="row m-1 col-11 col-md-8 col-lg-6 m-auto mt-5 mb-2 mb-lg-5 py-3 gap-2">
//           <input
//             type="search"
//             placeholder="Search by Hostel, Area, City..."
//             className="col-11 col-lg-7 m-auto rounded-3 p-3 bg-white-50 border-0"
//             style={{ outline: 'none' }}
//           />

//           <select className="col-11 col-lg-3 m-auto rounded-3 border-0 p-3 bg-white-50"
//            style={{ outline: 'none' }}>
//             <option value="">All</option>
//             <option value="">Men's Hostels</option>
//             <option value="">Womens Hostels</option>
//             <option value="">Others Hostels</option>
//           </select>
//         </div>
//         <div className="d-flex justify-content-center mb-3 p-0 py-2">
//           <button
//             type="button"
//             className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-3 col-5 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
//             style={{ backgroundColor: "#081735" }}
//           >
//             <TbHomeSearch className="fs-3" /> Search
//           </button>
//         </div>

//         <div className="text-center  fs-5 fw-medium mt-3">
//           <p className="fw-bolder" style={{ color: "white" }}>Discover.Compare.Stay Smart</p>
//         </div>
//       </section>

//       <section
//         className="d-flex flex-column justify-content-center align-items-center mt-0 mb-5"
//       >
//         <h3 className="text-center mb-3 fw-medium" style={{ color: "#081735" }}>
//           Locations we are Present
//         </h3>

//         <div
//           className="col-10 col-md-5 col-lg-3 bg-white rounded-3 shadow-lg border p-2"
//           data-aos="zoom-in"
//         >
//           <Link to='/hostels_list' style={{ textDecoration: 'none' }}>
//             <img
//               src="https://th.bing.com/th/id/OIP.LjwbfZrvkVpW0xzjTxrvygHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//               alt=""
//               className="w-100"
//             />
//             <p className="text-center text-dark-emphasis m-0 fs-4 p-0">Hyderabad</p>
//             <p className="text-end p-0 me-3 m-0 pb-1 fs-3">
//               {" "}
//               <FaArrowCircleRight style={{ color: "#081735" }} />
//             </p>
//           </Link>
//         </div>
//       </section>

//       <section>
//         <h3 className="text-center  mb-5 fw-medium" style={{ color: "#081735" }}>
//           Recently Added Hostels
//         </h3>

//         <div className="row col-11 gap-2 gap-lg-1 col-md-8 col-lg-6 text-center m-auto mb-5 text-dark">
//           <p className="fw-bold text-center mb-0 mb-lg-1">
//             Search by category wise
//           </p>
//           <button className={`col-9 col-lg-3 m-auto btn ${selectedCategory === 0 ? 'btn-dark' : 'btn-outline-dark'} fw-semibold`} value={0} onClick={onChangeSelectedCategory}>
//             All
//           </button>
//           <button className={`col-9 col-lg-3 m-auto btn ${selectedCategory === 1 ? 'btn-dark' : 'btn-outline-dark'} fw-semibold`} value={1} onClick={onChangeSelectedCategory}>
//             Men's Hostel
//           </button>
//           <button className={`col-9 col-lg-3 m-auto btn ${selectedCategory === 2 ? 'btn-dark' : 'btn-outline-dark'} fw-semibold`} value={2} onClick={onChangeSelectedCategory}>
//             Women's Hostel
//           </button>
//         </div>
//         <Link to="/hostel_details" style={{ textDecoration: "none" }}>
//           <div data-aos="zoom-in">
//             <Hostel />
//           </div>
//         </Link>

//         <div className="text-center my-4">
//           <Link to='/hostels_list'>
//             <button
//               type="button"
//               className="text-white btn fw-semibold"
//               style={{ backgroundColor: "#081735" }}
//             >
//               Explore more <FaArrowCircleRight />
//             </button>
//           </Link>
//         </div>
//       </section>

//       <section >
//         <Link to='/hostel_register_contact ' style={{ textDecoration: 'none' }}>
//           <div className="join_with_us row col-12 col-lg-7 m-auto mb-5 rounded-3 shadow-lg " >
//             <h4 className="text-white text-center mt-5">Register your hostel to join with us</h4>
//             <div className="d-flex flex-column justify-content-center align-items-center">
//               <p className="fw-semibold text-white p-0 m-0 "><span className="fw-bold fs-3">Zero</span> registration fees</p>
//               <p className="fw-semibold text-white p-0 m-0 text-center">We provide tools to manage your entire booking and management system</p>
//               <p className="fw-semibold text-white text-center">We helps you to grow your business quickly</p>
//               <small className="fw-normal text-white text-center">We charge low and affordable price for maintenance, including promotions</small>

//               <p className="fw-semibold text-white fs-1 btn">
//                 <MdOutlineArrowCircleRight className="fs-1" /></p>

//             </div>

//           </div>
//         </Link>

//       </section>
//       </>
//       )
//     }

//       <Footer />
//     </div>
//   );
// };
// export default Home;

// ........................................

import React, {
  useState,
  useEffect,
  useMemo,
  lazy,
  Suspense,
  useContext,
} from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { TbHomeSearch } from "react-icons/tb";
import "./index.css";
import Footer from "../Footer";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Loader from "../Loader";
import LazyLoad from "react-lazyload";
import { NetworkStatusContext } from "../Context/NetWorkStatusContext";
import Offline from "../Offline";

const Hostel = lazy(() => import("../HostelComponent/Hostel"));

const Home = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const isOnline = useContext(NetworkStatusContext);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const backgroundImages = useMemo(
    () => [
      "/Untitled design.png",
      "/pexels-vlada-karpovich-7368204 (1).jpg",
      "/pexels-ketut-subiyanto-4245927.jpg",
    ],
    []
  );

  const points = useMemo(
    () => [
      "ManaHostel Helps Us To Find Best Hostel/Pg With Zero Efforts.",
      "Travel smarter, stay better. Let us help you find the ideal hostel for your journey.",
      "Explore the globe, one hostel at a time. Your next adventure starts with us.",
    ],
    []
  );

  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach((image) => {
        const img = new Image();
        img.onload = () => {
          setLoading(false);
        };
        img.onerror = (error) => {
          console.error("Error loading image:", error);
          setLoading(false);
        };
        img.src = process.env.PUBLIC_URL + image;
      });
    };

    preloadImages();
  }, [backgroundImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < points[currentPointIndex].length) {
        setText(
          (prevText) => prevText + points[currentPointIndex][text.length]
        );
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setCurrentPointIndex((prevIndex) => (prevIndex + 1) % points.length);
        }, 4);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, currentPointIndex, points]);

  const onChangeSelectedCategory = (e) => {
    setSelectedCategory(parseInt(e.target.value));
  };

  return (
    <div className="row m-0 p-0 homeScreen">
      {isOnline ? (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <section
                className="pt-1 pt-lg-5 bg-dark mb-5 section-1"
                style={{
                  backgroundImage: `linear-gradient(174deg, #1a1a1a 7.97%, #1a1a1a 9.3%, rgba(26, 26, 26, 0.0409746) 87.47%, #1a1a1a 100%), url('${
                    process.env.PUBLIC_URL + backgroundImages[currentPointIndex]
                  }')`,
                  minHeight: "84vh",
                }}
                data-aos="zoom-out-down"
              >
                <div className="text-center col-11 col-lg-7 m-auto text-wrap highlight-lines fs-5 my-5 py-5 points-container slide-up text-white point-shadow">
                  <h5
                    id="hey"
                    className="animated-text slide-up text-wrap fw-bolder fs-3"
                  >
                    {text}
                  </h5>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="row m-1 col-11 col-md-8 col-lg-6 m-auto mt-5 mb-2 mb-lg-5 py-3 gap-2">
                  <input
                    type="search"
                    placeholder="Search by Hostel, Area, City..."
                    className="col-11 col-lg-7 m-auto rounded-3 p-3 bg-white-50 border-0"
                    style={{ outline: "none" }}
                  />

                  <select
                    className="col-11 col-lg-3 m-auto rounded-3 border-0 p-3 bg-white-50"
                    style={{ outline: "none" }}
                  >
                    <option value="">All</option>
                    <option value="">Men's Hostels</option>
                    <option value="">Womens Hostels</option>
                    <option value="">Others Hostels</option>
                  </select>
                </div>
                <div className="d-flex justify-content-center mb-3 p-0 py-2">
                  <button
                    type="button"
                    className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-3 col-5 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
                    style={{ backgroundColor: "#081735" }}
                  >
                    <TbHomeSearch className="fs-3" /> Search
                  </button>
                </div>

                <div className="text-center  fs-5 fw-medium mt-3">
                  <p className="fw-bolder" style={{ color: "white" }}>
                    Discover.Compare.Stay Smart
                  </p>
                </div>
              </section>

              <section className="d-flex flex-column justify-content-center align-items-center mt-0 mb-5">
                <h3
                  className="text-center mb-3 fw-medium"
                  style={{ color: "#081735" }}
                >
                  Locations we are Present
                </h3>

                <div
                  className="col-10 col-md-5 col-lg-3 bg-white rounded-3 shadow-sm border p-2"
                  data-aos="zoom-in"
                >
                  <Link to="/hostels_list" style={{ textDecoration: "none" }}>
                    <img
                      src="https://th.bing.com/th/id/OIP.LjwbfZrvkVpW0xzjTxrvygHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="w-100"
                    />
                    <p className="text-center text-dark-emphasis m-0 fs-4 p-0">
                      Hyderabad
                    </p>
                    <p className="text-end p-0 me-3 m-0 pb-1 fs-3">
                      {" "}
                      <FaArrowCircleRight style={{ color: "#081735" }} />
                    </p>
                  </Link>
                </div>
              </section>

              <section>
                <h3
                  className="text-center  mb-5 fw-medium"
                  style={{ color: "#081735" }}
                >
                  Recently Added Hostels
                </h3>

                <div className="row col-11 gap-2 gap-lg-1 col-md-8 col-lg-6 text-center m-auto mb-5 text-dark">
                  <p className="fw-bold text-center mb-0 mb-lg-1">
                    Search by category wise
                  </p>
                  <button
                    className={`col-9 col-lg-3 m-auto btn ${
                      selectedCategory === 0 ? "btn-dark" : "btn-outline-dark"
                    } fw-semibold`}
                    value={0}
                    onClick={onChangeSelectedCategory}
                  >
                    All
                  </button>
                  <button
                    className={`col-9 col-lg-3 m-auto btn ${
                      selectedCategory === 1 ? "btn-dark" : "btn-outline-dark"
                    } fw-semibold`}
                    value={1}
                    onClick={onChangeSelectedCategory}
                  >
                    Men's Hostel
                  </button>
                  <button
                    className={`col-9 col-lg-3 m-auto btn ${
                      selectedCategory === 2 ? "btn-dark" : "btn-outline-dark"
                    } fw-semibold`}
                    value={2}
                    onClick={onChangeSelectedCategory}
                  >
                    Women's Hostel
                  </button>
                </div>
                <Suspense fallback={<Loader />}>
                  <div data-aos="zoom-in">
                    <LazyLoad height={200}>
                      <Hostel />
                    </LazyLoad>
                  </div>
                </Suspense>

                <div className="text-center my-4">
                  <Link to="/hostels_list">
                    <button
                      type="button"
                      className="text-white btn fw-semibold"
                      style={{ backgroundColor: "#081735" }}
                    >
                      Explore more <FaArrowCircleRight />
                    </button>
                  </Link>
                </div>
              </section>

              <section>
                <Link
                  to="/hostel_pricing_information"
                  style={{ textDecoration: "none" }}
                >
                  <div className="join_with_us row col-12 col-lg-7 m-auto mb-5 rounded-3 shadow-sm">
                    <h4 className="text-white text-center mt-5">
                      Register your hostel to join with us
                    </h4>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <p className="fw-semibold text-white p-0 m-0 ">
                        <span className="fw-bold fs-3">Zero</span> registration
                        fees
                      </p>
                      <p className="fw-semibold text-white p-0 m-0 text-center">
                        We provide tools to manage your entire booking and
                        management system
                      </p>
                      <p className="fw-semibold text-white text-center">
                        We helps you to grow your business quickly
                      </p>
                      <small className="fw-normal text-white text-center">
                        We charge low and affordable price for maintenance,
                        including promotions
                      </small>

                      <p className="fw-semibold text-white fs-1 btn">
                        <MdOutlineArrowCircleRight className="fs-1" />
                      </p>
                    </div>
                  </div>
                </Link>
              </section>
            </>
          )}
        </>
      ) : (
        <Offline />
      )}

      <Footer />
    </div>
  );
};

export default Home;
