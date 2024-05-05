import React, { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginNow = () => {
    const errorMsg = document.getElementById("loginError");

    if (userMail && userPassword) {
      fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userMail,
          password: userPassword,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Handle the response from the backend

          console.log(data);
          localStorage.setItem("token", data.access_token);

          window.location.replace("/");
        })
        .catch((error) => {
          // Handle errors
          console.error("There was a problem with the fetch operation:", error);
        });
    } else {
      errorMsg.textContent = "Please fill all fields";
    }
  };

  const onMailChange = (e) => {
    setUserMail(() => e.target.value);
  };

  const onPasswordChange = (e) => {
    setUserPassword(() => e.target.value);
  };

  return (
    <div
      className="text-center col-12 shadow-lg col-lg-5 m-auto d-flex flex-column justify-content-center align-items-center register-bg rounded-3 my-lg-3 border border-1"
      style={{ minHeight: "78vh" }}
    >
      <h3 className="text-center highlight-lines mb-5 fw-semibold" style={{color: "#081735"}}>
        Login to ManaHostel
      </h3>
      <p id="loginError" className="text-center fw-bold text-danger"></p>
      <div className="col-12">
        <input
          type="text"
          placeholder="Enter mail or phone"
          className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-3 input-styling"
          onChange={onMailChange}
          autoComplete="new-email" // Change to a custom value
        />

       
        <input
          type="password"
          placeholder="Enter Password"
          className="col-10 col-lg-7 m-auto rounded-3 p-3 input-styling"
          onChange={onPasswordChange}
          autoComplete="new-password"
        />
        <div className="d-flex justify-content-center my-4 p-0 py-2">
          <button
            type="button"
            className="fw-bold search-btn text-center text-nowrap text-white fs-6 px-4 col-6 col-lg-2 m-auto border border-3 border-white rounded-5  d-flex justify-content-center gap-2 align-items-center"
            style={{ backgroundColor: "#081735" }}
            onClick={loginNow}
          >
            Login <RiLoginCircleFill className="fw-bold fs-1 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
