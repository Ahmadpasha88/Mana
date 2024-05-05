import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TiTick } from "react-icons/ti";
import "./index.css";
import { addDays,format } from "date-fns";
import { FaLock } from "react-icons/fa6";

const BookingConfirmModal = () => {
  const [show, setShow] = useState(false);
  const [toDate, setToDate] = useState(addDays(new Date(), 30));;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checkDayWise, setCheckDayWise] = useState(false);

  const currentDate = new Date();

  // Extract year, month, and day from the Date object
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = currentDate.getDate().toString().padStart(2, "0");

  // Format the date as dd/mm/yyyy
  const fromDate = `${year}-${month}-${day}`;

  const onToDate = (e) => {
    setToDate(() => e.target.value);
  };

  const BookBed = () => {
       alert(`From: ${format(fromDate, 'dd-MM-yyyy')} To: ${format(toDate, 'dd-MM-yyyy')}`);

  };

  return (
    <>
      <Button
        className="btn text-white text-nowrap d-flex justify-content-center align-items-center gap-1 border-0"
        onClick={handleShow}
        style={{ backgroundColor: "#081735" }}
      >
        Book Now <TiTick/>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton >
  <Modal.Title className="highlight-lines mb-1 fw-semibold" style={{ color: "#081735" }}>
    ManaHostel Booking
  </Modal.Title>
</Modal.Header>
        <Modal.Body className="register-bg">
          <div className="d-flex gap-2">
            <button
              className={`btn btn-outline-dark fw-semibold ${
                checkDayWise ? "" : "bookingSelectionBtn text-white fw-semibold"
              }`}
              onClick={() => setCheckDayWise(false)}
            >
              Month wise
            </button>
            <button
              className={`btn btn-outline-dark fw-semibold ${
                checkDayWise ? "bookingSelectionBtn text-white fw-semibold" : ""
              }`}
              onClick={() => setCheckDayWise(true)}
            >
              Day wise
            </button>
          </div>
          {checkDayWise && (
            <div className="row my-3">
              <label
                htmlFor=""
                className="fw-semibold highlight-lines col-10 col-lg-7 m-auto p-0"
                style={{ color: "#081735" }}
              >
                From Date
              </label>
              <button
                type="button"
                className="col-10 col-lg-7 fw-bold text-dark-emphasis btn bg-secondary-subtle m-auto rounded-3 p-3 m-0 mb-0 px-0"
              >
                {fromDate}
              </button>
              <label
                htmlFor=""
                className="fw-semibold highlight-lines col-10 col-lg-7 m-auto p-0 mt-3"
                style={{ color: "#081735" }}
              >
                Select To Date
              </label>
              <input
                className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-0"
                value={toDate}
                onChange={onToDate}
                type="date"
              />
            </div>
          )}
          <div className="text-center my-3">
            <button
              className="btn p-2 px-4 fw-semibold text-white payBtn"
              onClick={BookBed}
            >
              Book Now
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="fw-semibold"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingConfirmModal;



// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { TiTick } from "react-icons/ti";
// import "./index.css";
// import { addDays, format } from "date-fns";

// const BookingConfirmModal = () => {
//   const [show, setShow] = useState(false);
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(addDays(new Date(), 30));
//   const [checkDayWise, setCheckDayWise] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const onToDateChange = (e) => {
//     const selectedDate = new Date(e.target.value);
//     if (selectedDate > fromDate) {
//       setToDate(selectedDate);
//     }
//   };

//   const BookBed = () => {
//     // Perform booking logic with fromDate and toDate
//     alert(`From: ${format(fromDate, 'dd-MM-yyyy')} To: ${format(toDate, 'dd-MM-yyyy')}`);
//   };

//   return (
//     <>
//       <Button
//         className="btn text-white text-nowrap d-flex justify-content-center align-items-center gap-1 border-0"
//         onClick={handleShow}
//         style={{ backgroundColor: "#081735" }}
//       >
//         Book Now <TiTick />
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title className="highlight-lines mb-1 fw-semibold" style={{ color: "#081735" }}>
//             ManaHostel Booking
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="register-bg">
//           <div className="d-flex gap-2">
//             <button
//               className={`btn btn-outline-dark fw-semibold ${
//                 !checkDayWise ? "bookingSelectionBtn text-white fw-semibold" : ""
//               }`}
//               onClick={() => setCheckDayWise(false)}
//             >
//               Month wise
//             </button>
//             <button
//               className={`btn btn-outline-dark fw-semibold ${
//                 checkDayWise ? "bookingSelectionBtn text-white fw-semibold" : ""
//               }`}
//               onClick={() => setCheckDayWise(true)}
//             >
//               Day wise
//             </button>
//           </div>
//           {checkDayWise && (
//             <div className="row my-3">
//               <label
//                 className="fw-semibold highlight-lines col-10 col-lg-7 m-auto p-0"
//                 style={{ color: "#081735" }}
//               >
//                 From Date
//               </label>
//               <input
//                 className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-0"
//                 value={format(fromDate, 'yyyy-MM-dd')}
//                 onChange={(e) => setFromDate(new Date(e.target.value))}
//                 type="date"
//               />
//               <label
//                 className="fw-semibold highlight-lines col-10 col-lg-7 m-auto p-0 mt-3"
//                 style={{ color: "#081735" }}
//               >
//                 To Date
//               </label>
//               <input
//                 className="col-10 col-lg-7 m-auto rounded-3 p-3 mb-0"
//                 value={format(toDate, 'yyyy-MM-dd')}
//                 onChange={onToDateChange}
//                 type="date"
//               />
//             </div>
//           )}
//           <div className="text-center my-3">
//             <button
//               className="btn p-2 px-4 fw-semibold text-white payBtn"
//               onClick={BookBed}
//             >
//               Book Now
//             </button>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" className="fw-semibold" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default BookingConfirmModal;

