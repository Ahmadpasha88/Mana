import React, { useEffect, useState } from "react";
import "./index.css";
import Footer from "../Footer";

const HostelRoom = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomCapacity, setRoomCapacity] = useState("");
  const [hostelRoomPics, setHostelRoomPics] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
},[]);

  const roomNumberFun = (event) => {
    setRoomNumber(event.target.value);
  };

  const hostelRoomPictureFun = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setHostelRoomPics([...hostelRoomPics, ...imagesArray]);

    let hostelImgValue = document.getElementById("hostelImages");
    hostelImgValue.value = "";
  };

  const removeImage = (index) => {
    const newImages = [...hostelRoomPics];
    newImages.splice(index, 1);
    setHostelRoomPics(newImages);
  };

  const roomCapacityFun = (event) => {
    setRoomCapacity(event.target.value);
  };

  const addRoomFun = () => {
    // Validation
    if (!roomNumber || !hostelRoomPics || !roomCapacity) {
      setErrorMsg(() => "All fields are required!");
      return;
    }

    // Room number validation (You can add more specific validations as needed)
    if (!/^\d+$/.test(roomNumber)) {
      setErrorMsg(() => "Invalid room number! Please enter a valid number.");
      return;
    }

    // Room capacity validation (You can add more specific validations as needed)
    if (!/^\d+$/.test(roomCapacity)) {
      setErrorMsg(() => "Invalid room capacity! Please enter a valid number.");
      return;
    }

    console.log("Room Number:", roomNumber);
    console.log("Room Image:", hostelRoomPics);
    console.log("Room Capacity:", roomCapacity);
  };

  return (
    <>
     <div className="dash-board-top-section">
      <div className="col-11 col-lg-6 m-auto my-5 d-flex justify-content-center align-items-center ">
        <div className="row gap-2 border border-1 rounded-3 shadow-lg register-bg p-3 my-3 add-room bg-white">
          <h3 className="text-center highlight-lines fw-semibold my-3 text-dark-emphasis">
            Add New Room
          </h3>
          <p className="text-danger text-center fw-semibold">{errorMsg}</p>
          <label htmlFor="">Room Number</label>
          <input
            className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
            onChange={roomNumberFun}
            type="text"
            placeholder="101"
          />

          <label htmlFor="" className="fw-Medium">
            Hostel Picture
          </label>
          <input
            type="file"
            className="rounded-3 p-2 mb-3 mb-md-2"
            id="hostelImages"
            onChange={hostelRoomPictureFun}
            multiple // Allow multiple file selection
          />

          {/* Display selected images */}

          <label htmlFor="" className="fw-Medium">
            Selected Images
          </label>

          <div className="border border-1 rounded-3 my-1 py-3 px-2 gap-1 row m-auto flex-wrap w-100">
            {hostelRoomPics.map((pic, index) => (
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

          <label>Room Capacity</label>
          <input
            type="number"
            className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
            placeholder="4"
            onChange={roomCapacityFun}
          />

          <button
            type="button"
            onClick={addRoomFun}
            className="text-white btn fw-semibold col-3 mt-3 m-auto"
            style={{ backgroundColor: "#081735" }}
          >
            Submit
          </button>
        </div>
      </div>
     
    </div>
     <Footer /></>
   
  );
};

export default HostelRoom;
