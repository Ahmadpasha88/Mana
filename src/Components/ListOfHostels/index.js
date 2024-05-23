import React, { useEffect } from "react";
import Footer from "../Footer";
import { TbFilterSearch } from "react-icons/tb";
import { TbHomeSearch } from "react-icons/tb";
import Filters from "../Filters";
import "./index.css";
import Hostel from "../HostelComponent/Hostel";
import PaginationContainer from "../Pagination";
import { hostelsData } from "../CommonUtils/HostelsData";

const ListOfHostels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const hostelArray = Array.from({ length: 9 }, (_, index) => index + 1);
  return (
    <div className="m-0 p-0 h-100">
   
        <div className="row m-1 col-10 col-md-8 col-lg-6 m-auto my-5 py-2 gap-2">
          <input
            type="search"
            placeholder="Search by Hostel, Area, City..."
            className="col-11 col-lg-8 m-auto rounded-3 p-2 py-3 border shadow-sm"
            style={{outline:'none'}}
          />
          <button className="col-6 col-lg-2 m-auto shadow-sm btn border d-flex justify-content-center flex-nowrap align-items-center">
          Search &nbsp;<TbHomeSearch className="fs-4"/>
            </button>
        </div>
       
   

      <div className="row col-11 m-auto mb-5">
        <h5 className="fw-bolder fs-4 text-dark-emphasis p-0 p-lg-3">Filters<TbFilterSearch/></h5>
        <Filters />
      </div>
      <div className="row col-11 col-lg-10 p-0 m-0 m-auto mb-5 py-3 gap-5 rounded-3 shadow-sm">

      {hostelsData.map((e) => (
                <Hostel key={e.id} data={e} />
            ))}
        {/* <Hostel /> */}

        {/* <div className="p-0 m-0 d-flex justify-content-center m-auto mt-5 mb-3 ">
          <PaginationContainer className='p-0 m-0' />
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default ListOfHostels;
