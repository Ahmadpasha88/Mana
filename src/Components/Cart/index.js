import React, { useContext } from 'react'
import { MyContext } from '../Context/cartContext'
import Hostel from '../HostelComponent/Hostel';
import {GoHeartFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { NetworkStatusContext } from '../Context/NetWorkStatusContext';
import Offline from '../Offline';

const Cart = () => {

    const { cart, setCart } = useContext(MyContext);
    const isOnline = useContext(NetworkStatusContext);
    return (
        <>
            {
                isOnline ?
                    <div className='row col-12 col-lg-10 m-auto'>

                        {
                            cart.length > 0 ?
                                <div className='p-0 m-0'>
                                    <h5 className="fw-medium mt-4 ms-3" style={{ color: "#081735" }}>Your saved hostels</h5>
                                    <hr className="mt-0 mb-4" />
                                    <Hostel />
                                </div>


                                :

                                <div className='border border-1 text-center rounded-2 col-10 shadow-sm mt-5 col-lg-5 p-5 m-auto'>
                                    <GoHeartFill className='fw-bolder fs-1 text-danger' />
                                    <p>You have not saved any Hostels</p>
                                    <Link to='/hostels_list'>

                                        <button className='btn btn-outline-dark border border-1 border-dark'>
                                            Explore Hostels</button>
                                    </Link>
                                </div>
                        }
                    </div>
                    :
                    <Offline />
            }
        </>

    )
}

export default Cart
