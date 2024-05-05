import React from 'react'
import { Table } from 'react-bootstrap'

import './index.css'

const ComplaintList = () => {

    const complaintListTableHeadings= [
        'Name',
        'Phone',
        'Aadhar',
        'Reason',
        'Incident Type',
        'Incident Date',
        'Attached Files',
        'Complaint Status',
        'Update Complaint Status',
        'Complaint Raised By'

    ]

  return (
  
  <div className='col-11 m-auto py-2 row'>
    <h3 className="text-center highlight-lines mb-5 fw-semibold text-dark-emphasis">All Complaints</h3>
    <div className='m-auto row gap-3'>
    <input type='search' placeholder='search with Name, Phone, Aadhar ..' className='col-10 col-lg-4 m-auto p-2 fs-6 rounded-2'/>
    <div className='col-11 col-lg-2 m-auto'>
      <label className='col-12'>Select Status</label>
      <select className='py-1 px-3 fw-semibold '>
        <option>All</option>
        <option>Pending</option>
        <option>Resolved</option>
    </select>
    </div>
    <div className='col-11 col-lg-2 m-auto'>
  <label className='col-12'>Select Year</label>
    <select className='py-1 px-3 fw-semibold'>
        <option>All</option>
        <option>2023</option>
        <option>2024</option>
    </select>

    </div>
   <div className='col-12 col-lg-2'>
    <label className='col-12'>Select Month</label>
   <select className='py-1 px-3 fw-semibold'>
        <option>All</option>
        <option>Jan</option>
        <option>Feb</option>
    </select>

   </div>

 
    </div>
    
   <Table responsive className='border border-1 my-5'>
      <thead>
        <tr>
          <th>#</th>
          {complaintListTableHeadings.map((e,index) => (
            <th key={index}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length:  10}).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
       
      
      </tbody>
    </Table>
  </div>

    
  )
}

export default ComplaintList
