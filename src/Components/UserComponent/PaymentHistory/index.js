import React from "react";
import {FaRupeeSign } from 'react-icons/fa';

const PaymentHistory = () => {
  return (
    <div className="shadow-sm border border-1 rounded-2 col-11 col-lg-3 p-0">
      <h4
        className="text-center highlight-lines py-3 m-0 fw-semibold text-dark-emphasis" style={{backgroundColor:'whitesmoke'}}
      
      >
        Lakshya Hostel
      </h4>
      <div className="border border-1 py-3">
        <p className="text-center fw-medium">Payment Information</p>
        <div className="row text-dark-emphasis">
            <table className="col-10 m-auto border border-1">
                <tr className="text-center fw-medium text-dark-emphasis shadow-sm">
                    <td className="py-2">From: 11-2-2024</td>
                    <td>To: 11-3-2024</td>
                </tr>
            </table>
        </div>
        <div className="my-3 row gap-1 p-3 px-4">
        <p className="p-0 m-0">
          <span className="fw-semibold">Amount:</span> <FaRupeeSign className=""/><span>6000</span>
        </p>
        <p className="p-0 m-0"><span className="fw-semibold">Payment Mode:</span> Online</p>
        <p className="p-0 m-0 m-0"><span className="fw-semibold">PaymentId:</span> 09593495</p>
        </div>
        <div className="text-center">
        <button type="button" className="btn btn-outline-dark fw-bolder m-auto">Download Invoice</button>
        </div>


      </div>
    </div>
  );
};

export default PaymentHistory;
