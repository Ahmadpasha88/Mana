// import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
// import { FaBell } from "react-icons/fa";
// import PaymentData from "../HostelMembersPayementDetails";
// import "./index.css";
// import MyPieChart from "../PieChart";
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const data = [
//     {
//       count: 809680,
//       language: "Unpaid",
//     },
//     {
//       count: 4555697,
//       language: "Paid",
//     },
//   ];

//   const [isPaid, setIsPaid] = useState(true);

//   const handelRadioBtns = (e) => {
//     setIsPaid(() => !isPaid);
//   };

//   return (
//     <div className="p-0 row m-0 heading-lines">
//       <section className="dash-board-top-section">
//         <div className="row col-12 col-md-9 col-lg-6 m-auto">
//           <div className="mb-2 row col-10 col-md-5 m-auto p-3 d-flex align-items-center gap-2">
//             <label className="col-10 highlight-lines fw-semibold text-dark-emphasis">
//               Select Month
//             </label>
//             <select className="rounded-3 p-3 bg-white col-10">
//               <option>Jan</option>
//               <option>Feb</option>
//             </select>
//           </div>
//           <div className="col-10 row d-flex align-items-center col-md-5 m-auto p-3 mb-2 gap-2">
//             <label className="col-10 fw-semibold highlight-lines text-dark-emphasis">
//               Select Year
//             </label>
//             <select className="rounded-3 p-3 col-10 bg-white">
//               <option>2023</option>
//               <option>2024</option>
//             </select>
//           </div>
//         </div>

//         <div className="col-11 row col-md-9 col-lg-7 m-auto">
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 cx="60%"
//                 cy="40%"
//                 data={data}
//                 startAngle={0}
//                 endAngle={360}
//                 innerRadius="40%"
//                 outerRadius="80%"
//                 dataKey="count"
//                 animationBegin={0}
//                 animationDuration={800}
//                 isAnimationActive={true} // Enable animation
//               >
//                 <Cell name="Unpaid" fill="#ED1313C3" />
//                 <Cell name="Paid" fill="#006600" />
//               </Pie>
//               <Legend
//                 iconType="circle"
//                 layout="vertical"
//                 verticalAlign="middle"
//                 align="right"
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </section>
//       .
//       <div className="d-flex justify-content-center align-items-center gap-5 col-10  m-auto my-5">
//         <div class="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             onChange={handelRadioBtns}
//             id="flexRadioDefault1"
//           />
//           <label
//             className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
//             for="flexRadioDefault1"
//           >
//             Paid Members
//           </label>
//         </div>
//         <div class="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="flexRadioDefault"
//             id="flexRadioDefault2"
//             onChange={handelRadioBtns}
//             checked
//           />
//           <label
//             className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
//             for="flexRadioDefault2"
//           >
//             Unpaid Members
//           </label>
//         </div>
//       </div>
//       <p>{isPaid}</p>
//       {isPaid ? (
//         <div className="col-12 row m-auto text-center mb-4 user-payment-data">
//           <h3 className="fw-bold text-white">Unpaid Members Data</h3>
//           <div className="d-flex justify-content-end mb-3">
//             <button className="btn btn-danger">
//               Notify via mail <FaBell />
//             </button>
//           </div>

//           <div className="">
//             <PaymentData />
//           </div>
//         </div>
//       ) : (
//         <div className="col-12 row m-auto text-center mb-4 user-payment-data">
//           <h3 className="fw-bold text-white">Paid Members Data</h3>
//           <div>
//             <PaymentData />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import { useState } from "react";
// import { FaBell } from "react-icons/fa";
// import PaymentData from "../HostelMembersPayementDetails";
// import "./index.css";

// const Dashboard = () => {
//   const [isPaid, setIsPaid] = useState(false);

//   const handleRadioBtns = (e) => {
//     setIsPaid(e.target.value === "paid");
//   };

//   return (
//     <div className="p-0 row m-0 heading-lines">
//       <section className="dash-board-top-section">
//         {/* Your existing code for month and year selection */}

//         <div className="d-flex justify-content-center align-items-center gap-5 col-10 m-auto my-5">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="paymentType"
//               id="flexRadioDefault1"
//               value="paid"
//               checked={isPaid}
//               onChange={handleRadioBtns}
//             />
//             <label
//               className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
//               htmlFor="flexRadioDefault1"
//             >
//               Paid Members
//             </label>
//           </div>
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="radio"
//               name="paymentType"
//               id="flexRadioDefault2"
//               value="unpaid"
//               checked={!isPaid}
//               onChange={handleRadioBtns}
//             />
//             <label
//               className="form-check-label fw-semibold highlight-lines text-dark-emphasis"
//               htmlFor="flexRadioDefault2"
//             >
//               Unpaid Members
//             </label>
//           </div>
//         </div>

//         <div className="col-12 row m-auto text-center mb-4 user-payment-data">
//           <h3 className="fw-bold text-white">{isPaid ? "Paid" : "Unpaid"} Members Data</h3>
//           {isPaid ? (
//             <div>
//               <PaymentData />
//             </div>
//           ) : (
//             <div>
//               <div className="d-flex justify-content-end mb-3">
//                 <button className="btn btn-danger">
//                   Notify via mail <FaBell />
//                 </button>
//               </div>
//               <div>
//                 <PaymentData />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import { FaBell } from "react-icons/fa";
import PaymentData from "../HostelMembersPayementDetails";
import "./index.css";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import PendingUser from "../PendingUser";
import PendingHostel from "../PendingHostel";
import PendingAssociation from "../PendingAssociation";

const Dashboard = () => {
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
       <h2 className='text-center highlight-lines fw-semibold my-4' style={{color: "#081735"}}>Lakshya Hostel Dashboard</h2>

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
            <PaymentData />
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-danger">
                Notify via mail <FaBell />
              </button>
            </div>
            <div>
              <PaymentData />
            </div>
          </div>
        )}
      </div>
      </section>
    </div>
  );
};

export default Dashboard;




