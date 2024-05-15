import React, { useEffect, useState } from 'react'
import Footer from '../../Footer';
import { FullNameValidations, PhoneNumberValidations, validateTextArea } from '../../Validations/validations';




const HostelRegistrationContactForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [hostelNameError, setHostelNameError] = useState('');
  const [email,setEmail]=useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [hostelAddress, setHostelAddress] = useState('');
  const [hostelAddressError, setHostelAddressError] = useState('');




  const handelName = (e, name) => {
    setName(() => e);
    const error = FullNameValidations(e, name);
    setNameError(() => error);
  }


  const handelHostelName = (e, name) => {
    setHostelName(() => e);
    const error = FullNameValidations(e, name);
    setHostelNameError(() => error);
  }

  const handelPhone = (e) => {
    setPhone(() => e);
    const error = PhoneNumberValidations(e);
    setPhoneError(() => error);

  }
  const handelAddress = (e, name) => {
    setHostelAddress(() => e);
    const error = validateTextArea(e, name);
    setHostelAddressError(error);
  }

  const handelSubmition = async () => {
    if (name && hostelName && hostelAddress && phone && !nameError && !hostelNameError && !hostelAddressError && !phoneError) {

      const formData = {
        'name': name,
        'hostel_name': hostelName,
        'email':email,
        'phone': phone,
        'hostel_address': hostelAddress
      }
      console.log(formData)

      try {
        const response = await fetch('http://127.0.0.1:8000/api/hostel_joining_intrest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData.errors));
        }

        const data = await response.json();
        // Handle successful response
        console.log(data);
      } catch (error) {
        console.error('An error occurred:', error);
        // Display error message to the user based on the error type
      }
    }
    else {
      alert('fail')
    }
  }

  return (
    <div>
      <div className='col-12 col-lg-5 rounded-3 border m-auto my-lg-4 text-dark pb-3 p-0 m-0 shadow-sm pt-5' data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">

        <h2 className='text-center highlight-lines fw-bolder fs-1'>Join With Us</h2>
        <div className='row p-0 m-0 col-11 col-lg-8 m-auto gap-1 rounded-3 py-4 px-2 my-3 '>
          <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
            Name
          </label>
          <input type='text' className="rounded-3 fs-6 p-2  mb-3 mb-md-2 input-styling" placeholder='Jhon' value={name}
            onChange={(e) => handelName(e.target.value, 'name')}
          />
          <p className='text-danger fw-bold'>{nameError}</p>
          <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
            Hostel Name
          </label>
          <input type='text' className="rounded-3 fs-6 p-2  mb-3 mb-md-2 input-styling" placeholder='Abc Hostel' value={hostelName}
            onChange={(e) => handelHostelName(e.target.value, 'hostel name')}
          />
          <p className='text-danger fw-bold'>{hostelNameError}</p>
          <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
            Mail (optional)
          </label>
          <input type='mail' className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" placeholder='jhon12@gmail.com'
          value={email} onChange={(e)=>setEmail(()=>e.target.value)} />
          <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
            Mobile
          </label>
          <input type='number' className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" placeholder='1234567890' value={phone}
            onChange={(e) => handelPhone(e.target.value)}
          />
          <p className='text-danger fw-bold'>{phoneError}</p>
          <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
            Hostel Address
          </label>
          <textarea rows="5" className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" cols="5" placeholder='Enter hostel address' value={hostelAddress}
            onChange={(e) => handelAddress(e.target.value, 'message')}></textarea>
          <p className='text-danger fw-bold'>{hostelAddressError}</p>
          <button
            type="button"
            className="fw-semibold btn text-center text-white highlight-lines fs-6 col-6 col-lg-3 mt-3 m-auto border border-2 rounded-5"
            style={{ backgroundColor: "#081735" }}

            onClick={handelSubmition}
          >
            Submit
          </button>
        </div>


      </div>
      <Footer className="mt-3" />
    </div>

  )
}

export default HostelRegistrationContactForm
