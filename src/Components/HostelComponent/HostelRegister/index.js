import React, { useEffect, useState } from "react";

import { Area } from "recharts";
import Footer from "../../Footer";

const HostelRegister = () => {
  const [hostelName, setHostelName] = useState("");
  const [hostelPics, setHostelPics] = useState([]);
  const [category, setCategory] = useState('')
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [aadharImage, setAadharImage] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [associationList, setAssociationList] = useState([]);
  const [categoryList, setCategoriesList] = useState([]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Fetch states data when component mounts
    fetchStates();
    fetchHostelCategories();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/states");
      const data = await response.json();
      setStates(() => (data)); // Assuming data is an array of states

    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchHostelCategories = async () => {

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/hostelCategory`,);
      const data = await response.json();
      setCategoriesList(data); // Assuming data is an array of areas for the selected city
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };


  const fetchCities = async (selectedState) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/states/${parseInt(selectedState) + 1}/cities`);
      const data = await response.json();
      setCities(data); // Assuming data is an array of cities for the selected state
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const fetchAreas = async (selectedCity) => {

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/states/city/${parseInt(selectedCity)}/areas`);
      const data = await response.json();
      setAreas(data); // Assuming data is an array of areas for the selected city
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };






  const hostelNameFun = (event) => {
    setHostelName(event.target.value);
  };
  const hostelPictureFun = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setHostelPics([...hostelPics, ...imagesArray]);

    let hostelImgValue = document.getElementById("hostelImages");
    hostelImgValue.value = "";
  };

  const removeImage = (index) => {
    const newImages = [...hostelPics];
    newImages.splice(index, 1);
    setHostelPics(newImages);
  };

  const uploadFiles = () => {
    console.log(hostelPics); // Array of selected files
  };



  const categoryFun = (event) => {
    setCategory(() => event.target.value)
  }

  const addressFun = (event) => {
    setAddress(event.target.value);
  };

  const areaFun = (event) => {
    setArea(event.target.value);
  };
  const cityFun = (event) => {
    setCity(event.target.value);
  };


  const mobileFun1 = (event) => {
    setPhone1(event.target.value);
  };
  const mobileFun2 = (event) => {
    setPhone2(event.target.value);
  };

  const aadharNumberFun = (event) => {
    setAadharNumber(event.target.value);
  };

  const aadharImgFun = (event) => {
    setAadharImage(event.target.files[0]);
  };


  const registerHostelFun = () => {
    // Validation
    if (!hostelName || !address || !area || !city || !phone1 || !aadharNumber || !aadharImage || !category) {
      alert("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(hostelName)) {
      alert("Invalid hostel name!");
      return;
    }

    if (hostelPics.length === 0) {
      alert("Please upload at least one hostel picture!");
      return;
    }

    if (!/^\d{10}$/.test(phone1)) {
      alert("Invalid mobile number!");
      return;
    }

    // if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(mail)) {
    //   alert("Invalid email address!");
    //   return;
    // }

    if (!/^\d{12}$/.test(aadharNumber)) {
      alert("Invalid Aadhar number!");
      return;
    }

    if (!aadharImage) {
      alert("Please upload Aadhar image!");
      return;
    }

    // All validations passed, proceed with registration
    console.log(
      hostelName,
      hostelPics,
      category,
      address,
      area,
      city,
      state,
      phone1,
      phone2,
      aadharNumber,
      aadharImage
    );
  }

  return (
    <div className="mt-lg-4">
      <div className="d-flex flex-column justify-conten-center shadow-lg mb-5 col-12 m-auto contact-form text-black bg-white col-lg-6 gap-2 border-0 rounded-3 p-4">
        <h3 className="text-center my-5 fw-bolder" style={{
            textShadow: '1px 2px 38px black',color:'#081735'
          }}>
        Hostel
          Registration Form</h3>

        <label htmlFor="" className="fw-Medium">
          Hostel Name
        </label>
        <input
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 border border-1 border-dark"
          onChange={hostelNameFun}
          type="text"
          placeholder="Abc Hostel"
        />
        <label htmlFor="" className="fw-Medium">
          Hostel Picture
        </label>
        <input
          type="file"
          className="rounded-3 p-2 mb-3 mb-md-2 border border-1 border-dark"
          id="hostelImages"
          onChange={hostelPictureFun}
          multiple // Allow multiple file selection
        />

        {/* Display selected images */}

        <label htmlFor="" className="fw-Medium">
          Selected Images
        </label>

        <div className="border border-3 border-dark rounded-3 my-1 py-3 px-2 gap-1 row m-auto flex-wrap w-100" style={{backgroundColor:'whitesmoke'}}>
          {hostelPics.map((pic, index) => (
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

        <label className="fw-Medium">Select Hostel Category</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={categoryFun}
        >
          <option value="">select</option>
          {
            categoryList.map((e) => (
              <option key={e.id} value={e.id}>{e.category}</option>
            ))
          }

        </select>

        <label className="fw-Medium">State</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(e) => {

            fetchCities(e.target.value)
            setState(() => e.target.value);
          }
          }
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>

        {/* City Select */}
        <label className="fw-Medium">City</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(e) => {
            fetchAreas(e.target.value)
            setCity(() => e.target.value)
          }}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        {/* Area Select */}
        <label className="fw-Medium">Area</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(e) => {
            setArea(e.target.value)
          }}
        >
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.name}
            </option>
          ))}
        </select>


        <label htmlFor="" className="fw-Medium">
          Address
        </label>
        <textarea
          className="rounded-3 p-2 mb-3 mb-md-2"
          rows="3"
          cols="10"
          placeholder="Enter hostel complete address"
          onChange={addressFun}
        />
        <label className="fw-Medium">Pincode</label>
        <input
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2  border border-1 border-dark "
          type="number"
          placeholder="500008"
        />

        <label htmlFor="" className="fw-Medium">
          Phone 1
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 border border-1 border-dark"
          type="number"
          placeholder="1234567890"
          onChange={mobileFun1}
        />

        <label htmlFor="" className="fw-Medium">
          Phone 2 (optional)
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 border border-1 border-dark"
          type="number"
          placeholder="1234567890"
          onChange={mobileFun2}
        />

        <label htmlFor="">Offered Sharings</label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2  border border-1 border-dark"
          type="text"
          placeholder="1,2,3,4,5,6 Sharings Availabel"
          onChange={aadharNumberFun}
        />

        <label htmlFor="">Starting Price</label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 border border-1 border-dark"
          type="number"
          placeholder="4000"
          onChange={aadharNumberFun}
        />

        <label htmlFor="">Aadhar Number</label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 border border-1 border-dark"
          type="number"
          placeholder="07438734882"
          onChange={aadharNumberFun}
        />

        <label>Aadhar Image</label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 px-3 border border-1 border-dark"
          type="file"
          onChange={aadharImgFun}
        />

        <button
          type="button"
          onClick={registerHostelFun}
          className="text-white btn fw-semibold col-4 mt-5 ms-auto"
          style={{ backgroundColor: "#081735" }}
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HostelRegister;
