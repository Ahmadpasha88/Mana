import React from 'react'

const PendingAssociation = () => {
  return (
    <div className='row gap-1'>
      <div className='col-12 col-lg-9 row'>
      <span>Association Name: Al-hamra</span>
      <span>Shaikpet</span>
      <span>Hyderabad</span>
      <span>Telangana</span>
      </div>
      <div className='col-6 col-lg-2 m-auto'>
      <button className='btn btn-success mx-2'>Approve</button>
      <button className='btn btn-danger'>Reject</button>
      </div>
    </div>
  )
}

export default PendingAssociation
