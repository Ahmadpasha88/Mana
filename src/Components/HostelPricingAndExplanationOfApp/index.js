import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./index.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import React, { useEffect } from "react";

const HostelPricingAndExplanationOfApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="row p-0 m-0">
        <section className="what_we_do d-flex flex-column justify-content-center align-items-center py-0 py-lg-5">
          <h2 className="mx-2">
            <span className=" fs-1 fw-bolder">Why</span> we need ?.
          </h2>
          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            Running a hostel business comes with its unique challenges, from
            managing bookings and inventory to providing exceptional guest
            experiences. In today's digital age, hostel owners need more than
            just a physical presence to thrive; they need a robust online
            platform that streamlines operations and maximizes revenue
            potential. This is where ManaHostel comes in.
          </p>
        </section>
        <section className="services_provided d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="mx-2 mt-3 mb-5">
            <span className="fw-bolder fs-1">What </span>We Do to Fuel Your
            Growth?.
          </h2>
          <p className="text-dark-emphasis text-wrap col-12 px-1 col-lg-9 fs-5">
            <span className="fw-bold text-nowrap">Efficient Management Tools:</span>{" "}
            ManaHostel provides hostel owners with a suite of powerful tools
            designed to simplify day-to-day operations. From managing bookings
            and inventory to handling payments and guest communication, our
            platform streamlines every aspect of hostel management, saving
            owners time and effort.
          </p>
          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            <span className="fw-bold text-nowrap">Optimized Bookings:</span> With
            ManaHostel, hostel owners can optimize their bookings and maximize
            occupancy rates. Our advanced algorithms analyze booking patterns
            and market trends to help owners adjust pricing strategies and
            promotional offers, ensuring that every bed is filled and revenue
            potential is maximized.
          </p>
          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            <span className="fw-bold text-nowrap">Enhanced Visibility:</span> ManaHostel
            enhances the visibility of hostels, making them more accessible to
            travelers worldwide. By listing your hostel on our platform, you
            gain exposure to a global audience of travelers, increasing your
            chances of attracting bookings and expanding your customer base.
          </p>
          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            <span className="fw-bold text-nowrap">Customer Relationship Management:</span>{" "}
            Building and maintaining relationships with guests is essential for
            fostering loyalty and driving repeat business. ManaHostel includes
            built-in customer relationship management (CRM) tools that allow
            hostel owners to keep track of guest preferences, stay histories,
            and feedback, enabling personalized experiences that keep guests
            coming back.
          </p>
          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            <span className="fw-bold text-nowrap">24/7 Support:</span> At ManaHostel, we
            understand that hostel owners may encounter challenges at any time.
            That's why we offer round-the-clock support to address any issues or
            concerns promptly, ensuring that your hostel runs smoothly without
            interruption.
          </p>

          <p className="text-dark-emphasis col-12 px-1 col-lg-9 fs-5">
            {" "}
            ManaHostel recognizes the evolving needs of travelers and the
            inefficiencies that exist within the hostel industry. By providing a
            revolutionary platform that connects hostel owners with guests,
            ManaHostel bridges the gap between supply and demand, making it
            easier than ever to find and book quality accommodation at an
            affordable price.
          </p>
        </section>

        <section className="pricing_section d-flex flex-column justify-content-center align-items-center py-5">
          <h4 className="text-center fw-bolder text-dark-emphasis mb-5"><span className="fs-2">We</span> are here to serve you as you need.</h4>
          <h3 className="col-12 col-lg-8 text-center text-dark-emphasis "><RiDoubleQuotesL className="mb-3 mb-lg-5"/><span className="fw-bold fs-1"> We </span> offer more affordable pricing and we are ensuring that we provide a way to recover most of the amount or entier. <RiDoubleQuotesL className="mb-2 mb-lg-4"/></h3>
          <div className="text-center my-4">
              <Link to='/hostel_register_contact'>
                <button
                  type="button"
                  className="text-white btn fw-semibold"
                  style={{ backgroundColor: "#081735" }}
                >
                  Contact Now
                </button>
              </Link>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HostelPricingAndExplanationOfApp;
