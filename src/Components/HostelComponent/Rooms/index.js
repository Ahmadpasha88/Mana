import React from 'react'
import HostelRoom from '../HostelRoom'
import AllRoomsOfHostel from '../AllRoomsOfHostel'
// import AllRooms from '../AllRooms'

const Rooms = () => {
  return (
    <div className='row m-0 my-5 py-3 border'>
      <div className='col-11 m-auto col-lg-5 p-0'>
      <HostelRoom/>
      </div>
    
        <div className='col-11 col-lg-5 m-auto p-0 rounded-2'>
        <AllRoomsOfHostel/>
        </div>
      
    </div>
  )
}

export default Rooms
