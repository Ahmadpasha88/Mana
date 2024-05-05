import React, { useState } from "react";
import "./index.css";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [aadharImage, setAadharImage] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [mealPreference, setMealPreference] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationName, setOccupationName] = useState("");
  const [occupationAddress, setOccupationAddress] = useState("");
  const [periodOfCourse, setPeriodOfCourse] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyAddress, setEmergencyAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

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
        <h3 className="text-center highlight-lines mt-4 mb-5 fw-semibold text-dark-emphasis">
          User Profile
        </h3>
        <button type="button" className="ms-auto  me-2 fw-semibold col-4 col-md-3 col-lg-2 py-2 fw-semibold border-0 rounded-2 editBtn">Edit</button>
        <form onSubmit={handleSubmit} className="row m-auto p-3 flex-wrap">
          <div className="row m-auto mb-5">
            <div className="col-12 col-md-5 col-lg-3 m-auto text-center mb-4">
              <img
                src={profilePicUrl}
                // src="https://th.bing.com/th/id/OIP.QoQQS2nqeKnEH-lT8TTqEwHaEo?rs=1&pid=ImgDetMain"
                className="w-100 p-0 m-0 h-75 rounded-3"
                alt=""
              />
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
                className="col-12 m-auto rounded-3 p-2 mb-3"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  setProfilePic(file);
                  const imageUrl = await fileToUrl(file);
                  setProfilePicUrl(imageUrl);
                }}
              />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              id="firstNameInput"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              maxLength={50}
            />
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="motherNameInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Mother's Name
            </label>
            <input
              type="text"
              id="motherNameInput"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setAge(e.target.value)}
              min={0}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="bloodGroupInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroupInput"
              value={bloodGroup}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setBloodGroup(e.target.value)}
              maxLength={4}
            />
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
              onChange={(e) => setCity(e.target.value)}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setState(e.target.value)}
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              value={residentialAddress}
              onChange={(e) => setResidentialAddress(e.target.value)}
            ></textarea>
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setAadharImage(e.target.files[0])}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setAadharNumber(e.target.value)}
              maxLength={12}
            />
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="mealPreferenceInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Meal Preference
            </label>
            <select
              id="mealPreferenceInput"
              value={mealPreference}
              onChange={(e) => setMealPreference(e.target.value)}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
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
              value={occupationName}
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setOccupationName(e.target.value)}
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setOccupationAddress(e.target.value)}
            ></textarea>
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setPeriodOfCourse(e.target.value)}
              maxLength={50}
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              id="emergencyNameInput"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
              maxLength={50}
            />
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
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              onChange={(e) => setEmergencyAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="col-12 col-lg-6 me-auto p-0">
            <label
              htmlFor="emergencyContactInput"
              className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7"
            >
              Emergency Contact
            </label>
            <input
              type="text"
              id="emergencyContactInput"
              className="col-12 col-lg-10 m-auto rounded-3 p-2 mb-3"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              maxLength={12}
            />
          </div>

          <div className="col-12 text-end">
            <button className="btn fw-semibold text-white my-3 col-3 m-auto" type="submit" style={{ backgroundColor: "#081735" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
