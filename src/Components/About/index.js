// AboutPage.js

import React, { useEffect } from "react";
import Footer from "../Footer";
import "./index.css";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
  return (
    <div className="p-0 m-0">
      <div className="aboutcontainer mb-5">
        <h2 className="text-center my-4 robotStyling heading-h2"><span className="underline_text">About ManaHostel</span></h2>
        <div>
          <h4 className="robotStyling heading-h4">Our Mission</h4>
          <p className="paragraph">
            At ManaHostel, our mission is to revolutionize the way hostels are
            managed and booked. We strive to create a seamless and efficient
            platform that empowers both hostel owners and guests. For hostel
            owners, we aim to provide powerful tools and resources to streamline
            management processes, optimize bookings, and enhance overall
            operations. For guests, we are committed to offering a user-friendly
            interface that simplifies the search and booking process, ensuring a
            hassle-free experience and providing access to a wide range of
            accommodation options. Through innovation and dedication, we seek to
            transform the hostel industry and make travel more accessible and
            enjoyable for everyone.
          </p>
        </div>
        <div>
          <h4 className="robotStyling heading-h4">For Hostel Owners</h4>
          <p className="paragraph">
            ManaHostel offers a suite of powerful tools designed to simplify
            hostel management...
          </p>
        </div>
        <div>
          <h4 className="robotStyling heading-h4">For Guests</h4>
          <p className="paragraph">
            For travelers seeking affordable and comfortable accommodation
            options, ManaHostel is the perfect companion. Whether you're a
            student looking for a budget-friendly stay during your academic
            journey, an employee traveling for work, or an adventurous soul
            exploring new destinations, ManaHostel provides a wide range of
            hostels to choose from. With our user-friendly platform, you can
            easily search and compare hostels based on your preferences, and
            make informed decisions without the need to visit physically.
            ManaHostel simplifies the booking process, ensuring that you find
            the best hostel for your needs, wherever you go.
          </p>
        </div>
        <div>
          <h4 className="robotStyling heading-h4">Our Commitment</h4>
          <p className="paragraph">
            At ManaHostel, we are committed to delivering excellence in hostel
            management and booking services...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
