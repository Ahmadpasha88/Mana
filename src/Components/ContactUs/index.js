import React, { useContext, useEffect } from "react";

import "./index.css";
import Footer from "../Footer";
import { NetworkStatusContext } from "../Context/NetWorkStatusContext";
import Offline from "../Offline";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isOnline = useContext(NetworkStatusContext);

  return (
    <div>
      {isOnline ? (
        <>
          <div
            className="col-12 col-lg-5 rounded-3 border m-auto my-lg-4 text-dark pb-3 p-0 m-0 register-bg pt-5"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-center highlight-lines fw-semibold">
              Contact Us
            </h2>
            <div className="row p-0 m-0 col-11 col-lg-8 m-auto gap-1 rounded-3 py-4 px-2 my-3">
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Name
              </label>
              <input
                type="text"
                className="rounded-3 fs-6 p-2  mb-3 mb-md-2 input-styling"
                placeholder="Jhon"
              />
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Mail
              </label>
              <input
                type="mail"
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling"
                placeholder="jhon12@gmail.com"
              />
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Mobile
              </label>
              <input
                type="number"
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling"
                placeholder="1234567890"
              />
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Message
              </label>
              <textarea
                rows="5"
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling"
                cols="5"
                placeholder="Enter Message"
              ></textarea>
              <button
                type="button"
                className="fw-semibold btn text-center text-white highlight-lines fs-6 col-6 col-lg-3 mt-3 m-auto border border-2 rounded-5"
                style={{ backgroundColor: "#081735" }}
              >
                Submit
              </button>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Offline />
      )}
    </div>
  );
};

export default ContactUs;
