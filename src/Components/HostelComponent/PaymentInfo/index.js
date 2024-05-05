import React from 'react'

const PaymentInfo = () => {

    const onUpiIdChange =()=>{

    }
    const onConfirmUpiIdChange =()=>{

    }

    const onMerchantIdChange = ()=>{

    }

    const onConfirmMerchantIdChange = ()=>{

    }

    const onMerchantKeyChange=()=>{

    }

    const onConfirmMerchantKeyChange=()=>{

    }


  return (
    <div className='col-11 col-md-9 col-lg-6 m-auto shadow-lg rounded-2 row p-4 my-3'>
        <h3 className="text-center highlight-lines mb-5 fw-semibold text-dark-emphasis">Add UPI Details</h3>

        <label htmlFor="" className="fw-Medium p-0 m-0">
             UPI ID
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onUpiIdChange}
                type="text"
                placeholder="upi.1@ybl"
            />
            <label htmlFor="" className="fw-Medium p-0">
                Confirm UPI ID
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onConfirmUpiIdChange}
                type="password"
                placeholder="upi.1@ybl"
            />
            <label htmlFor="" className="fw-Medium p-0">
                Merchant ID
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onMerchantIdChange}
                type="text"
                placeholder="xueb1413324"
            />
            <label htmlFor="" className="fw-Medium p-0">
           Confirm Merchant ID
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onConfirmMerchantIdChange}
                type="password"
                placeholder="xueb1413324"
            />
            <label htmlFor="" className="fw-Medium p-0">
                Merchant Key
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onMerchantKeyChange}
                type="text"
                placeholder="rr3r32rj32ra"
            />
            <label htmlFor="" className="fw-Medium p-0">
                Confirm Merchant Key
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={onConfirmMerchantKeyChange}
                type="password"
                placeholder="rr3r32rj32ra"
            />

<button
          type="button"
          onClick={""}
          className="text-white btn fw-semibold col-4 mt-5 m-auto"
          style={{ backgroundColor: "#081735" }}
        >
          Submit
        </button>
      
    </div>
  )
}

export default PaymentInfo
