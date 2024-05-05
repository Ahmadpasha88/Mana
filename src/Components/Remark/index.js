import React, { useState } from "react";

const Remark = () => {
  const [evidence, setEvidence] = useState([]);
  const [isChecked,setIsChecked] = useState(false);
  const [isValid,setIsValid] = useState(false);

  const evidenceImageFun = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setEvidence([...evidence, ...imagesArray]);

    let hostelImgValue = document.getElementById("hostelImages");
    hostelImgValue.value = "";
  };

  const removeImage = (index) => {
    const newImages = [...evidence];
    newImages.splice(index, 1);
    setEvidence(newImages);
  };

  return (
    <div className="col-11 col-md-9 col-lg-6 m-auto shadow-lg my-5 rounded-2 row p-5">
      <h3 className="text-center highlight-lines mb-5 fw-semibold text-dark-emphasis">
        Add Complaint
      </h3>
      <div className="mt-1 mb-5 row align-items-center m-auto col-10">
        <input
          type="search"
          placeholder="Search with name or phone"
          className="mx-2 fs-5 rounded-2 p-2 align-items-center text-center col-11 col-md-8 col-lg-7"
        />
        <button className="text-white btn col-2 m-auto" style={{ backgroundColor: "#081735" }}>Search</button>
      </div>
      {
        isValid?<div className="p-3 shadow-sm d-flex gap-2 align-items-center rounded-2">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <div
            class="form-check-label p-3 text-dark-emphasis"
            for="flexSwitchCheckDefault"
          >
            <p className="p-0 m-0">
              <span className="fw-medium">Name : </span>
            </p>
            <p className="p-0 m-0">
              <span className="fw-medium">Phone : </span>
            </p>
            <p className="p-0 m-0">
              <span className="fw-medium">Email : </span>
            </p>
            <p className="p-0 m-0">
              {" "}
              <span className="fw-medium">Aadhar Number : </span>
            </p>
          </div>
        </div>
      </div>:""
      }
      
      {
        isChecked?  <div>
       
  
        <div className="row my-2 p-0 m-0">
          <label className="p-0 text-dark-emphasis fw-semibold">Type Of Incident</label>
          <select className="p-2 rounded-2 mb-2">
              <option>Select</option>
          </select>
          <label className="p-0 text-dark-emphasis fw-semibold">Reason </label>
          <textarea rows="4" cols="11" className="rounded-2 col-12"></textarea>
        </div>
        <div className="d-flex flex-column m-0 p-0">
          <label htmlFor="" className="p-0 text-dark-emphasis fw-semibold">
            Evidence
          </label>
          <input
            type="file"
            className="rounded-3 p-2 mb-3 mb-md-2"
            id="hostelImages"
            onChange={evidenceImageFun}
            multiple // Allow multiple file selection
          />
  
          {/* Display selected images */}
  
          <label htmlFor="" className="p-0 text-dark-emphasis fw-semibold">
            Selected files
          </label>
  
          <div className="border border-2 rounded-3 my-1 py-3 px-2 gap-1 row m-auto flex-wrap w-100">
            {evidence.map((pic, index) => (
              <div
                key={index}
                className="col-12 m-auto col-md-5 col-lg-4 row align-items-center rounded-2  bg-dark px-0"
              >
                <div
                  className="col-12 m-auto mb-2 align-items-center p-0"
                  style={{ height: "160px" }}
                >
                  <img
                    src={URL.createObjectURL(pic)}
                    alt={`Hostel Image ${index + 1}`}
                    className="w-100 h-100 bg-danger m-0 p-0 img-cover align-items-center"
                  />
                </div>
  
                <div className="text-center mb-2">
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="btn btn-danger btn-sm col-6 "
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
            type="button"
            onClick={""}
            className="text-white btn fw-semibold col-4 mt-3 m-auto"
            style={{ backgroundColor: "#081735" }}
          >
            Submit
          </button>
  
          </div>:""
      }

    </div>
  );
};

export default Remark;
