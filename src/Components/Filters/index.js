import { FaSortAmountDown, FaRupeeSign } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";

const Filters = () => {
    return (
        <div className='similar-one m-auto col-12 gap-3 p-0 pb-2 pb-lg-0'>
            <div className='m-0 p-0 col-11 col-lg-2 m-auto'>
                <label htmlFor="sortBy" className='label fw-semibold mb-1' style={{color:'#081735'}} >
                    <FaSortAmountDown className='icon fs-5' /> Sort By:
                </label>
                <select id="sortBy" className='p-2 rounded-2 col-12'>
                    <option value="all">All</option>
                    <option value="price">Price Low-High</option>
                    <option value="price">Price High-Low</option>
                </select>
            </div>
          
            <div className='m-0 p-0 col-11 col-lg-2 m-auto'>
                <label htmlFor="hostelType" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <BiCategoryAlt className='icon fs-4 fw-bold' /> Hostel Category:
                </label>
                <select id="hostelType" className='p-2 rounded-2 col-12'>
                    <option value="all">All</option>
                    <option value="dormitory">Men's Hostel</option>
                    <option value="privateRoom">Women's Hostel</option>
                    <option value="sharedRoom">Co-living Hostel</option>
                    <option value="others">Other's</option>
                </select>
            </div>
          
            <div className='m-0 p-0 col-11 col-lg-2 m-auto'>
                <label htmlFor="priceRange" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <FaRupeeSign className='icon fs-5' /> Price Range:
                </label>
                <select id="priceRange" className='p-2 rounded-2 col-12'>
                    <option value="all">All</option>
                    <option value="3000-6000">₹3000 - ₹6000</option>
                    <option value="6000-10000">₹6000 - ₹10000</option>
                    <option value="10000+">Above ₹10000</option>
                </select>
            </div>

            <div className='m-0 p-0 col-11 col-lg-2 m-auto'>
                <label htmlFor="location" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <IoLocationOutline className='icon fs-4 fw-bold' /> Location
                </label>
                <select id="location" className='p-2 rounded-2 col-12'>
                    <option value="all">All</option>
                    <option value="Hyderabad">Hyderabad</option>
                </select>
            </div>

            <div className='m-0 p-0 col-11 col-lg-2 m-auto'>
                <label htmlFor="availability" className='label fw-semibold mb-1' style={{color:'#081735'}}>
                    <FcCalendar className='icon fs-4' /> Availability
                </label>
                <select id="availability" className='p-2 rounded-2 col-12'>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
