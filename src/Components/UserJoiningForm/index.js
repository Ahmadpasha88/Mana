import React from "react";
import "./index.css";
import Footer from "../Footer";

const JoiningForm = () => {
  return (
    <div className="mt-4">
      <div className="d-flex flex-column justify-conten-center shadow-lg mb-5 col-11 m-auto text-black bg-white col-lg-6 gap-2 border-0 rounded-3 p-4">
        <h3 className="text-center fw-semibold text-dark-emphasis highlight-lines">Registration Form</h3>

        <label htmlFor="" className="fw-Medium">
          Upload Your Picture
        </label>
        <input type="file" className="rounded-3 p-2 mb-3 mb-md-2" />

        <label htmlFor="" className="fw-Medium">
          Upload Your Aadhar Picture
        </label>
        <input type="file" className="rounded-3 p-2 mb-3 mb-md-2" />

        <label htmlFor="" className="fw-Medium">
          Permanent Address
        </label>
        <textarea
          className="rounded-3 p-2 mb-3"
          rows="3"
          cols="10"
          placeholder="Enter permanent address"
        />
        <label htmlFor="" className="">
          Pincode
        </label>
        <input
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 "
          type="number"
          placeholder="500008"
        />
        <small className="text-danger fw-semibold highlight-lines text-center">*** Please fill the details carefully one's submited it can't be change, your appliction will be rejected if there is any mistake ***
        </small>
        <button
          type="button"
          className="btn fw-semibold col-4 mt-4 ms-auto text-white"
          style={{ backgroundColor: "#081735" }}
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default JoiningForm;
