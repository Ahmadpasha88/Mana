import React, { useState } from "react";
import './index.css'

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentSection, setCurrentSection] = useState(1);
  const [error, setError] = useState("");

  const validateFirstAndLastName = () => {
    if (!firstName.trim()) {
      setError("Please enter your first name.");
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      setError("First name can only contain letters.");
    } else if (firstName.length < 2 || firstName.length > 20) {
      setError("First name must be between 2 and 20 characters.");
    } else if (!lastName.trim()) {
      setError("Please enter your last name.");
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      setError("Last name can only contain letters.");
    } else if (lastName.length < 2 || lastName.length > 20) {
      setError("Last name must be between 2 and 20 characters.");
    } else {
      setError("");
      setCurrentSection(2);
    }
  };

  const validateEmailAndPhone = () => {
    if (!mail.trim() || !phone.trim()) {
      setError("Please enter your email and phone number.");
    } else if (!/^\S+@\S+\.\S+$/.test(mail)) {
      setError("Please enter a valid email address.");
    } else if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
    } else if (/[+.]/.test(phone)) {
      setError("Phone number should not contain '+' or '.' characters.");
    } else if (mail.length > 50) {
      setError("Email should not exceed 50 characters.");
    } else if (!mail.endsWith('.com') && !mail.endsWith('.net') && !mail.endsWith('.org') && !mail.endsWith('.edu')) {
      setError("Email should have a valid domain (.com, .net, .org, .edu).");
    } else {
      setError("");
      setCurrentSection(3); // Move to the next section
    }
  };
  

  

  const validatePasswordAndConfirmPassword = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      setError("Please enter both password and confirm password.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one digit.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
    } else if (/(.)\1{2,}/.test(password)) {
      setError("Password must not contain consecutive characters.");
    } else if (password.includes(firstName) || password.includes(lastName)) {
      setError("Password must not contain your first or last name.");
    } else {
      setError("");
      // Proceed with registration, call your registration function here

      
    }
  };


  const submitRegistration=()=>{

    validateFirstAndLastName();
    validateEmailAndPhone();
    validatePasswordAndConfirmPassword();

  

    const formData = {
      'first_name':firstName,
      'last_name':lastName,
      'email':mail,
      'phone':phone,
      'password':password
    }
    // fetch('http://127.0.0.1:8000/api/register', {
    //     method: 'POST',
      
    //     body: JSON.stringify(formData)
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse response body as JSON
    //   })
    //   .then(data => {
    //     console.log('Response from backend:', data);
    //     // Handle success response here
    //   })
    //   .catch(error => {
    //     console.error('Error sending data to backend:', error);
    //     // Handle error response here
    //   });



      // Make a POST request to register user
fetch('http://127.0.0.1:8000/api/register', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => {
  if (response.ok) {
      return response.json();
  } else if (response.status === 422) {
      return response.json().then(data => {
          throw new Error(JSON.stringify(data.errors));
      });
  } else {
      throw new Error('Internal Server Error');
  }
})
.then(data => {
  // Handle successful response
  console.log(data);
})
.catch(error => {
  console.error('An error occurred:', error);
  // Display error message to the user based on the error type
});

  }
  

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div className="col-12">
            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="d-flex justify-content-center my-3 p-0 py-2">
              <button
                type="button"
                className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-6 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
                style={{ backgroundColor: "#081735" }}
                onClick={validateFirstAndLastName}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="col-12">
            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              Mail Id
            </label>
            <input
              type="email"
              placeholder="John123@gmail.com"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              Phone
            </label>
            <input
              type="number"
              placeholder="99898723983"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 input-styling"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === '+' || e.key === '.' || e.key==='e' || e.key==='E') {
                  e.preventDefault();
                }
              }}
            />


            <div className="d-flex justify-content-center my-3 p-0 py-2 flex-wrap">
              <button
                type="button"
                className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-10 col-lg-3 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
                style={{ backgroundColor: "#081735" }}
                onClick={() => setCurrentSection(1)}
              >
                Previous
              </button>
              <button
                type="button"
                className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-10 col-lg-3 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
                style={{ backgroundColor: "#081735" }}
                onClick={validateEmailAndPhone}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="col-12">
            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="" className="fw-semibold text-start text-dark-emphasis col-10 col-lg-7">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="d-flex justify-content-center flex-wrap my-3 p-0 py-2">
              <button
                type="button"
                className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-10 col-lg-3 m-auto border border-3 border-white rounded-5"
                style={{ backgroundColor: "#081735" }}
                onClick={() => setCurrentSection(2)}
              >
                Previous
              </button>
              <button
                type="button"
                className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-10 col-lg-3 m-auto border border-3 border-white rounded-5"
                style={{ backgroundColor: "#081735" }}
                onClick={submitRegistration}
              >
                Register
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center col-12 col-lg-5 border shadow-lg m-auto d-flex flex-column justify-content-center align-items-center register-bg rounded-3 my-lg-3" style={{ minHeight: "78vh" }}>
      <h3 className="mb-4 text-center fw-light" style={{color: "#081735"}}>
       Register to 
    <span className="fw-bold fs-1"> Mana</span>Hostel 
      </h3>
      <p className="text-center fw-bold text-danger">{error}</p>
      {renderSection()}
    </div>
  );
};

export default Register;
