import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer";
import CheckboxGroup from "../CheckBoxGroup";
import { FullNameValidations, RequiredValidation, validateAadharNumber } from "../../Validations/validations";

const HostelRegister = () => {
  const [hostelName, setHostelName] = useState("");
  const [hostelNameError, setHostelNameError] = useState("");
  const [hostelPics, setHostelPics] = useState([]);
  const [category, setCategory] = useState({
    id: '',
    name: ''

  });
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryError, setCategoryError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [area, setArea] = useState({
    id: "",
    name: "",
  });
  const [areaError,setAreaError] =useState('');
  const [city, setCity] = useState({
    id: "",
    name: "",
  });
  const [cityError,setCityError]=useState('');
  const [state, setState] = useState({
    id: "",
    name: "",
  });
  const[stateError,setStateError]=useState('');
  const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone1Error, setPhone1Error] = useState("");
  const [phone2, setPhone2] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [startingPriceError, setStartingPriceError] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [aadharImage, setAadharImage] = useState("");
  const [aadharImageError,setAadharImageError]=useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch states data when component mounts
    fetchStates();
    fetchCategories();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchStates = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/states");
      const data = await response.json();
      setStates(() => data); // Assuming data is an array of states
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCategories = async () => {

    try {
      const response = await fetch("http://127.0.0.1:8000/api/get_categories");
      const data = await response.json();
      setCategoriesData(() => data); // Assuming data is an array of states
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }



  const fetchCities = async (selectedState) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/states/${parseInt(selectedState) + 1}/cities`
      );
      const data = await response.json();
      setCities(data); // Assuming data is an array of cities for the selected state
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const fetchAreas = async (selectedCity) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/states/city/${parseInt(selectedCity)}/areas`
      );
      const data = await response.json();
      setAreas(data); // Assuming data is an array of areas for the selected city
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  const handelHostelName = (event, name) => {
    setHostelName(() => event);
    const error = FullNameValidations(event, name);
    setHostelNameError(() => error);
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

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handelCategory = (event) => {
   setCategory(()=>({
      id: event.dataset.id,
      name: event.dataset.name,
    }));
  };

  const addressFun = (event) => {
    setAddress(event.target.value);
  };

  const mobileFun1 = (event) => {
    setPhone1(event.target.value);
  };
  const mobileFun2 = (event) => {
    setPhone2(event.target.value);
  };



  const handelAadharNumber = (e) => {
   setAadharNumber(()=>e);
   const error= validateAadharNumber(e);
   setAadharNumberError(()=>error);

  };

  const aadharImgFun = (event) => {
    setAadharImage(event.target.files[0]);
  };

  const registerHostelFun = () => {
    // Validation
    if (
      !hostelName ||
      !address ||
      !area ||
      !city ||
      !phone1 ||
      !aadharNumber ||
      !aadharImage ||
      !category
    ) {
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
  };

  return (
    <div className="mt-lg-4">
      <div className="d-flex flex-column justify-conten-center shadow-lg mb-5 col-12 m-auto text-dark bg-white col-lg-6 gap-2 border-0 rounded-3 p-4">
        <h3 className="text-center my-5 fw-bolder">Hostel Registration Form</h3>

        <label htmlFor="" className="fw-normal">
          Hostel Name
        </label>
        <input
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling"
          onChange={(e) => handelHostelName(e.target.value, 'hostel name')}
          type="text"
          placeholder="Abc Hostel"
        />
        <label htmlFor="" className="fw-normal">
          Hostel Picture
        </label>
        <input
          type="file"
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          id="hostelImages"
          onChange={hostelPictureFun}
          multiple // Allow multiple file selection
        />

        {/* Display selected images */}

        <label htmlFor="" className="fw-normal">
          Selected Images
        </label>

        <div
          className="border border-3 border-dark rounded-3 my-1 py-3 px-2 gap-1 row m-auto flex-wrap w-100"
          style={{ backgroundColor: "whitesmoke" }}
        >
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

        <label className="fw-normal">Select Hostel Category</label>

        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(event) => handelCategory(event.target.selectedOptions[0])}
        >
          <option value="">select</option>
          {categoriesData.map((e) => (
            <option key={e.id} value={e.id} data-id={e.id} data-name={e.category} >
              {e.category}
            </option>
          ))}
        </select>
        <p className="text-dark">{category.name}</p>

        <label className="fw-normal">State</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(event) => {
            const selectedOption = event.target.selectedOptions[0];
            fetchCities(selectedOption.dataset.id);
            setState(() => ({
              id: selectedOption.dataset.id,
              name: selectedOption.dataset.name,
            }));
          }}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option
              key={state.id}
              value={state.id}
              data-id={state.id}
              data-name={state.name}
            >
              {state.name}
            </option>
          ))}
        </select>

        <p>{stateError}</p>

        {/* City Select */}
        <label className="fw-normal">City</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(event) => {
            const selectedOption = event.target.selectedOptions[0];
            fetchAreas(selectedOption.dataset.id);
            setCity(() => ({
              id: selectedOption.dataset.id,
              name: selectedOption.dataset.name,
            }));
          }}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option
              key={city.id}
              value={city.id}
              data-id={city.id}
              data-name={city.name}
            >
              {city.name}
            </option>
          ))}
        </select>

        {/* Area Select */}
        <label className="fw-normal">Area</label>
        <select
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2 input-styling"
          onChange={(event) => {
            const selectedOption = event.target.selectedOptions[0];
            setArea(() => ({
              id: selectedOption.dataset.id,
              name: selectedOption.dataset.name,
            }));
          }}
        >
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option
              key={area.id}
              value={area.id}
              data-id={area.id}
              data-name={area.name}
            >
              {area.name}
            </option>
          ))}
        </select>

        <label htmlFor="" className="fw-normal">
          Address
        </label>
        <textarea
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          rows="3"
          cols="10"
          placeholder="Enter hostel complete address"
          onChange={addressFun}
        />
        <label className="fw-normal">Pincode</label>
        <input
          className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling"
          type="number"
          placeholder="500008"
        />

        <label htmlFor="" className="fw-normal">
          Phone 1
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          type="number"
          placeholder="1234567890"
          onChange={mobileFun1}
        />

        <label htmlFor="" className="fw-normal">
          Phone 2 (optional)
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          type="number"
          placeholder="1234567890"
          onChange={mobileFun2}
        />

        <label htmlFor="" className="fw-normal">
          Offered Sharings
        </label>
        <CheckboxGroup />

        <label htmlFor="" className="fw-normal">
          Starting Price
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          type="number"
          placeholder="4000"
          
        />

        <label htmlFor="" className="fw-normal">
          Aadhar Number
        </label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 input-styling"
          type="number"
          placeholder="07438734882"
          onChange={(e)=>handelAadharNumber(e.target.value)}
        />
        <p className='text-danger fw-medium'>{aadharNumberError}</p>

        <label className="fw-normal">Aadhar Image</label>
        <input
          className="rounded-3 p-2 mb-3 mb-md-2 px-3 input-styling"
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

        {/* hostelConfirm modal */}

        <>
          <Button
            className="btn text-white text-nowrap d-flex justify-content-center align-items-center gap-1 border-0"
            onClick={handleShow}
            style={{ backgroundColor: "#081735" }}
          >
            Book Now
          </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header className="m-auto gap-3" closeButton>
              <Modal.Title
                className="mb-1 fw-bold m-auto p-0"
                style={{ color: "#081735" }}
              >
                Confirm Registration
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
              <div className="col-12 m-auto mb-0 p-4 pb-5 p-lg-5 rounded-3 shadow-sm slider-container">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://lh3.googleusercontent.com/p/AF1QipPsuoxINZ2bIzWnY3-A36cC_gDRbJ0L9fUWLgs6=w768-h768-n-o-v1"
                      style={{ minHeight: "30vh", maxHeight: "50vh" }}
                      className="w-100 object-fit-contain"
                      alt=""
                    />
                  </div>
                  <div>2</div>
                </Slider>
              </div>

              <p className="mt-4 mb-0">
                <span className="fw-medium">Hostel Name:</span> &nbsp;{" "}
                {hostelName}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Hostel Category:</span>&nbsp;
                {category.name}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">State:</span>&nbsp;{state.name}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">City:</span>&nbsp;{city.name}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Area:</span>&nbsp;{area.name}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Address:</span>&nbsp;{address}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Pincode:</span>&nbsp;{pincode}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Phone1:</span>&nbsp;{phone1}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Phone2:</span>&nbsp;{phone2}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Offered Sharings:</span>&nbsp;
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Starting Price:</span>&nbsp;
                {startingPrice}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Aadhar Number:</span>&nbsp;
                {aadharNumber}
              </p>
              <hr className="m-1 p-0" />
              <p className="mt-4 mb-0">
                <span className="fw-medium">Aadhar Image:</span>&nbsp;
                {aadharImage}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn p-2 px-4 fw-semibold text-white payBtn"
                onClick={registerHostelFun}
              >
                Confirm and submit
              </button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default HostelRegister;
