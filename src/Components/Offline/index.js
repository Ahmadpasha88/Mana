import React from 'react'
import { MdSignalCellularConnectedNoInternet1Bar } from "react-icons/md";
import './index.css'

const Offline = () => {
    return (
        <div className='row col-11 col-lg-5 m-auto offline'>

            <div className='py-5 text-center'>
                <p className='text-wrap fw-bold'>Plese check your internet <MdSignalCellularConnectedNoInternet1Bar className='fs-1 mb-3' /></p>
            </div>

        </div>
    )
}

export default Offline
