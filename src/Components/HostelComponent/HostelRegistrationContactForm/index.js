import React, { useEffect, useState } from 'react'
import Footer from '../../Footer';
import { FullNameValidations, PhoneNumberValidations, validateTextArea } from '../../Validations/validations';




const HostelRegistrationContactForm = () => {
 
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const [name,setName]=useState('');
    const [nameError,setNameError]=useState('');
    const [phone,setPhone]=useState('');
    const [phoneError,setPhoneError]=useState('');
    const [message,setMessage]=useState('');
    const [messageError,setMessageError]=useState('');

    


    const handelName=(e,name)=>{
      setName(()=>e);
     const error= FullNameValidations(e,name);
     setNameError(()=>error);
    }
    
    const handelPhone=(e)=>{
      setPhone(()=>e);
      const error= PhoneNumberValidations(e);
      setPhoneError(()=>error);
  
    }
    const handelMessage=(e,name)=>{
      setMessage(()=>e);
      const error= validateTextArea(e,name);
      setMessageError(error);
    }

    const handelSubmition=()=>{
      if(name&&message&&phone&&!nameError&&!messageError&&!phoneError){
        alert('done')
      }
      else{
        alert('fail')
      }
    }
    
      return (
        <div> 
       <div className='col-12 col-lg-5 rounded-3 border m-auto my-lg-4 text-dark pb-3 p-0 m-0 shadow-sm pt-5'  data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">
     
            <h2 className='text-center highlight-lines fw-semibold'>Join With Us</h2>
            <div className='row p-0 m-0 col-11 col-lg-8 m-auto gap-1 rounded-3 py-4 px-2 my-3 '>
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Name
              </label>
              <input type='text' className="rounded-3 fs-6 p-2  mb-3 mb-md-2 input-styling" placeholder='Jhon' 
                onChange={(e)=>handelName(e.target.value,'name')}
              />
              <p className='text-danger fw-bold'>{nameError}</p>
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Mail (optional)
              </label>
              <input type='mail' className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" placeholder='jhon12@gmail.com' />
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Mobile
              </label>
              <input type='number' className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" placeholder='1234567890'
              onChange={(e)=>handelPhone(e.target.value)}
              />
              <p className='text-danger fw-bold'>{phoneError}</p>
              <label htmlFor="" className="fw-semibold text-dark-emphasis p-0">
                Hostel Address
              </label>
              <textarea rows="5" className="rounded-3 fs-6 p-2 mb-3 mb-md-2 input-styling" cols="5" placeholder='Enter hostel address'
              onChange={(e)=>handelMessage(e.target.value,'message')}></textarea>
              <p className='text-danger fw-bold'>{messageError}</p>
              <button
                type="button"
                className="fw-semibold btn text-center text-white highlight-lines fs-6 col-6 col-lg-3 mt-3 m-auto border border-2 rounded-5"
                style={{backgroundColor: "#081735"}}

                onClick={handelSubmition}
              >
                Submit
              </button>
            </div>
    
        
        </div>
        <Footer className="mt-3"/>
        </div>
        
      )
}

export default HostelRegistrationContactForm
