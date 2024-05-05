import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./index.css";
import { validateAadharNumber,FullNameValidations,PhoneNumberValidations,NameValidations,EmailValidation,validateAge,RequiredValidation,validateImage,validateTextArea} from "../../Validations/validations";



const UserProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profileError,setProfileError]=useState('');
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError,setFirstNameError] =useState('');
  const [lastName,setLastName]=useState('');
  const [lastNameError,setLastNameError] =useState('');
  const [fatherName, setFatherName] = useState("");
  const [fatherNameError,setFatherNameError] =useState('');
  const [motherName, setMotherName] = useState("");
  const [motherNameError,setMotherNameError] =useState('');
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodGroupError, setBloodGroupError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [residentialAddressError,setResidentialAddressError]=useState('');
  const [aadharImage, setAadharImage] = useState("");
  const [aadharImageError, setAadharImageError] = useState("");

  const [aadharNumber, setAadharNumber] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [mealPreference, setMealPreference] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [occupationName, setOccupationName] = useState("");
  const[occupationNameError,setOccupationNameError]=useState('');
  const [occupationAddress, setOccupationAddress] = useState("");
  const [occupationAddressError, setOccupationAddressError] = useState("");

  const [periodOfCourse, setPeriodOfCourse] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyNameError, setEmergencyNameError] = useState("");
  const [emergencyAddress, setEmergencyAddress] = useState("");
  const [emergencyAddressError, setEmergencyAddressError] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [emergencyContactNumberError, setEmergencyContactNumberError] = useState("");
  const [editMode,setEditMode] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };


  const handelFirstName=(e,name)=>{
    setFirstName(()=>e);
   const error= FullNameValidations(e,name);
   setFirstNameError(()=>error);
  }

  const handelLastName=(e,name)=>{
    setLastName(()=>e);
    const error= NameValidations(e,name);
    setLastNameError(()=>error);
  }

  const handelFatherName=(e,name)=>{
     setFatherName(()=>e);
     const error= FullNameValidations(e,name);
     setFatherNameError(()=>error);
  }
  const handelMotherName=(e,name)=>{
    setMotherName(()=>e);
    const error= FullNameValidations(e,name);
    setMotherNameError(()=>error);
  }

  const handelState=(e,name)=>{
    setState(()=>e);
    const error= FullNameValidations(e,name);
    setStateError(()=>error);
  }

  const handelCity=(e,name)=>{
    setCity(()=>e);
    const error= FullNameValidations(e,name);
    setCityError(error);
  }

  const handelAddress=(e,name)=>{
    setResidentialAddress(()=>e);
    const error= validateTextArea(e,name);
    setResidentialAddressError(error);
  }

  const handelAge=(e)=>{
    setAge(()=>e);
    const error = validateAge(e);
    setAgeError(()=>error);
  }

  const handelDateOfBirth=(e)=>{
    setDateOfBirth(()=>e);
    const error= RequiredValidation(e);
    setDateOfBirthError(()=>error);
  }

  const handelOccupation=(e,name)=>{
    setOccupation(()=>e);
    const error= RequiredValidation(e,name);
    setOccupationError(()=>error);
  }

  const handelOccupationName=(e,name)=>{

    setOccupationName(()=>e);
    const error= FullNameValidations(e,name);
    setOccupationNameError(()=>error);

  }

  const handelOccupationAddress=(e,name)=>{
    setOccupationAddress(()=>e);
    const error= validateTextArea(e,name);
    setOccupationAddressError(error);
  }

  const handelEmergencyContactName=(e,name)=>{
    setEmergencyName(()=>e);
    const error= FullNameValidations(e,name);
    setEmergencyNameError(()=>error);
  }

  const handelEmergencyContactNumber=(e)=>{
    setEmergencyContactNumber(()=>e);
    const error= PhoneNumberValidations(e);
    setEmergencyContactNumberError(()=>error);

  }

  const handelEmergencyContactAddress=(e,name)=>{
    setEmergencyAddress(()=>e);
    const error= validateTextArea(e,name);
    setEmergencyAddressError(()=>error);
  }


const handelAadharImage = async (file) => {
  try {
      const resolvedFile = await file;
      setAadharImage(()=>resolvedFile);
      const error = await validateImage(resolvedFile);
      setAadharImageError(()=>error);
  } catch (error) {
      console.error("Error handling Aadhar image:", error);
  }
};



  const handleEditMode =()=>{
     setEditMode((e)=>!e);
  }

  const fileToUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="container-fluid rounded-3 p-0">
      <div className="row my-0 my-lg-3 border border-1 shadow-lg p-0 rounded-3 col-12 col-md-8 col-lg-6 m-auto">
      
      <div className="text-center">
      <button type="button" className="ms-auto py-2 px-3 d-flex justify-content-center align-items-center mt-3 border-0 fs-3 bg-transparent"><RxCross2/> </button>
      </div>
     
        <h3 className="text-center highlight-lines my-2 fw-semibold">
          User Profile 
        </h3>
    
       
        <button type="button" className="ms-auto me-2 fw-semibold col-4 col-md-3 col-lg-2 py-2 fw-semibold border-0 rounded-2 editBtn mt-4" onClick={handleEditMode}>{editMode?'Save':'Edit'}</button>
        <form onSubmit={handleSubmit} className="row m-auto my-4 p-3 flex-wrap">
          <div className="row m-auto mb-5">
            <div className="col-12 col-md-5 col-lg-3 m-auto text-center mb-4">
            <img src='https://th.bing.com/th/id/OIP.MBa2G4PCSUAo-pvdKfMetAHaIB?rs=1&pid=ImgDetMain' alt="profilePhoto" className="profilePhoto rounded-circle" />
            </div>

            <div className="col-12 col-md-5 col-lg-5 m-auto">
              <label
                htmlFor="profilePicInput"
                className="fw-semibold text-start text-dark-emphasis col-10 "
              >
                Profile Picture
              </label>

              <input
                type="file"
                id="profilePicInput"
                className="col-12 m-auto rounded-3 p-2 mb-3 border border-1" 
                onChange={async (e) => {
                  const file = e.target.files[0];
                  setProfilePic(file);
                  const imageUrl = await fileToUrl(file);
                  setProfilePicUrl(imageUrl);

                }}
                disabled={!editMode}
              />
              <p>{profileError}</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="firstNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10"
            >
              First Name
            </label>
            <input
              type="text"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              placeholder="Jhon"
              id="firstNameInput"
              value={firstName}
              onChange={(e) => handelFirstName(e.target.value,'First Name')}
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{firstNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="lastNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastNameInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => handelLastName(e.target.value,'last name')}
              required
              maxLength={50}
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{lastNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="fatherNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Father's Name
            </label>
            <input
              type="text"
              id="fatherNameInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              placeholder="David Doe"
              value={fatherName}
              onChange={(e) => handelFatherName(e.target.value,'father name')}
              maxLength={50}
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{fatherNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="motherNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7 "
            >
              Mother's Name
            </label>
            <input
              type="text"
              id="motherNameInput"
              value={motherName}
              placeholder="Lina Doe"
              onChange={(e) => handelMotherName(e.target.value,'mother name')}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{motherNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="ageInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Age
            </label>
            <input
              type="number"
              id="ageInput"
              value={age}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelAge(e.target.value)}
              placeholder="23"
              min={0}
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{ageError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="dateOfBirthInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirthInput"
              value={dateOfBirth}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelDateOfBirth(e.target.value)}
              disabled={!editMode}
            />
            <p className="text-danger fw-bold">{dateOfBirthError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="bloodGroupInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Blood Group (optional)
            </label>
            <input
              type="text"
              id="bloodGroupInput"
              value={bloodGroup}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              placeholder="A+"
              onChange={(e) => setBloodGroup(e.target.value)}
              maxLength={4}
              disabled={!editMode}
            />
            <p>{bloodGroupError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="cityInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              City
            </label>
            <input
              type="text"
              id="cityInput"
              value={city}
              placeholder="Hyderabad"
              onChange={(e) => handelCity(e.target.value,'city')}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              maxLength={50}
              disabled={!editMode}
            />
            <p className="text-danger fw-bold">{cityError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="stateInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              State
            </label>
            <input
              type="text"
              id="stateInput"
              value={state}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelState(e.target.value,'state')}
              placeholder="Telangana"
              maxLength={50}
              disabled={!editMode}
            />
            <p className="text-danger fw-bold">{stateError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="residentialAddressInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Residential Address
            </label>
            <textarea
              id="residentialAddressInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              value={residentialAddress}
              onChange={(e) => handelAddress(e.target.value,'residential address')}
              disabled={!editMode}
            ></textarea>
            <p className="text-danger fw-bold">{residentialAddressError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="aadharImageInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Aadhar Image
            </label>
            <input
              type="file"
              id="aadharImageInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelAadharImage(e.target.files[0])}
              disabled={!editMode}
            />
            <p>{aadharImageError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="aadharNumberInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadharNumberInput"
              value={aadharNumber}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e)=>validateAadharNumber(e.target.value,setAadharNumber,setAadharNumberError)}
              placeholder="012345678901"
              maxLength={12}
              disabled={!editMode}
            />
            <p className="text-danger fw-bold">{aadharNumberError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="mealPreferenceInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Meal Preference (optional)
            </label>
            <select
              id="mealPreferenceInput"
              value={mealPreference}
              onChange={(e) => setMealPreference(e.target.value)}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              disabled={!editMode}
            >
              <option value="">Select</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="occupationInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Occupation
            </label>
            <select
              id="occupationInput"
              value={occupation}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelOccupation(e.target.value,'occupation')}
              disabled={!editMode}
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
            <p className="fw-bold text-danger">{occupationError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="occupationNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Occupation Name
            </label>
            <input
              type="text"
              id="occupationNameInput"
              placeholder="Enter work place or institution name"
              value={occupationName}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelOccupationName(e.target.value,'occupation name')}
              maxLength={50}
              disabled={!editMode}
            />
            <p className="fw-bold text-danger">{occupationNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="occupationAddressInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Occupation Address
            </label>
            <textarea
              id="occupationAddressInput"
              value={occupationAddress}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => handelOccupationAddress(e.target.value)}
              disabled={!editMode}
            ></textarea>
            <p className="text-danger fw-bold">{occupationAddressError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="periodOfCourseInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Period of Course (optional)
            </label>
            <input
              type="text"
              id="periodOfCourseInput"
              value={periodOfCourse}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              onChange={(e) => setPeriodOfCourse(e.target.value)}
              maxLength={50}
              disabled={!editMode}
            />
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="emergencyNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              id="emergencyNameInput"
              value={emergencyName}
              onChange={(e) => handelEmergencyContactName(e.target.value,'emergency name')}
              placeholder="Devid Doe"
              disabled={!editMode}
            />
            <p className="text-danger fw-bold">{emergencyNameError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="emergencyAddressInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Emergency Contact Address
            </label>
            <textarea
              id="emergencyAddressInput"
              value={emergencyAddress}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              placeholder="Enter your complete address including pincode"
              onChange={(e) => handelEmergencyContactAddress(e.target.value,'emergency address')}
              disabled={!editMode}
            ></textarea>
            <p className="text-danger fw-bold">{emergencyAddressError}</p>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="emergencyContactInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Emergency Contact Number
            </label>
            <input
              type="text"
              id="emergencyContactInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3 input-styling"
              value={emergencyContactNumber}
              onChange={(e) => handelEmergencyContactNumber(e.target.value)}
              placeholder="1234567890"
              maxLength={12}
              disabled={!editMode}
            />
           <p className="text-danger fw-bold">{emergencyContactNumberError}</p> 
          </div>

          {/* <div className="col-12 text-end">
            <button className="btn fw-semibold text-white my-3 col-3 m-auto" type="submit" style={{ backgroundColor: "#081735" }}>
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
