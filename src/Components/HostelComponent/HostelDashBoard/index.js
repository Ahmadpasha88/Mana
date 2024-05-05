import { useState } from "react";
import { FaBell } from "react-icons/fa";

import "./index.css";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import HostelUserPaymentData from "../HostelMembersPayementDetails";

const HostelDashboard = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleRadioBtns = (e) => {
    setIsPaid(e.target.value === "paid");
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const data = [
    {
      count: 809680,
      language: "Unpaid",
    },
    {
      count: 4555697,
      language: "Paid",
    },
  ];

  return (
    <div className="p-0 row m-0 heading-lines dash-board-top-section">
       <h2 className='text-center highlight-lines fw-semibold my-4' style={{color: "#081735"}}>Lakshya Hostel Payment Information</h2>

      <section >
        <div className="row col-12 col-md-9 col-lg-6 m-auto">
          <div className="mb-2 row col-12 col-md-5 m-auto p-3">
            <label className="col-10 highlight-lines fw-semibold text-dark-emphasis">
              Select Month
            </label>
            <select className="rounded-3 p-3 bg-white col-12" value={selectedMonth} onChange={handleMonthChange}>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
            </select>
          </div>
          <div className="col-12 row d-flex align-items-center col-md-5 m-auto p-3 mb-2 gap-2">
            <label className="col-10 fw-semibold highlight-lines text-dark-emphasis">
              Select Year
            </label>
            <select className="rounded-3 p-3 col-12 bg-white" value={selectedYear} onChange={handleYearChange}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>

        <div className="col-11 row col-md-9 col-lg-7 m-auto">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="60%"
                cy="40%"
                data={data}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="80%"
                dataKey="count"
                animationBegin={0}
                animationDuration={800}
                isAnimationActive={true}
              >
                <Cell name="Unpaid" fill="#ED1313C3" />
                <Cell name="Paid" fill="#006600" />
              </Pie>
              <Legend
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

<section >
      <div className="d-flex justify-content-center align-items-center gap-5 col-10 m-auto my-5">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentType"
            id="flexRadioDefault1"
            value="paid"
            checked={isPaid}
            onChange={handleRadioBtns}
          />
          <label
            className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
            htmlFor="flexRadioDefault1"
          >
            Paid Members
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentType"
            id="flexRadioDefault2"
            value="unpaid"
            checked={!isPaid}
            onChange={handleRadioBtns}
          />
          <label
            className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
            htmlFor="flexRadioDefault2"
          >
            Unpaid Members
          </label>
        </div>
      </div>

      <div className="col-12 row m-auto text-center mb-4 user-payment-data">
        <h3 className="fw-bold text-dark-emphasis highlight-lines">{isPaid ? "Paid" : "Unpaid"} Members Data</h3>
        {isPaid ? (
          <div>
            <HostelUserPaymentData />
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-danger">
                Notify via mail <FaBell />
              </button>
            </div>
            <div>
              <HostelUserPaymentData />
            </div>
          </div>
        )}
      </div>
      </section>
    </div>
  );
};

export default HostelDashboard;




