// import React from "react";

// const CreateComplaint = () => {
//   return (
//     <div className="row pt-5 border pb-3 shadow-lg">
//       <div className="row p-3 m-auto">
//         <div className="row col-11 col-lg-4 m-auto mb-3">
//           <input
//             type="search"
//             className="p-2 rounded-2 col-8 mb-3"
//             placeholder="Search with name,phone,aadhar"
//           />
//           <div className="text-center col-4">
//           <button type="button" className="btn btn-outline-success m-auto mb-3 mx-2">
//             Search
//           </button>
//           </div>
          
//         </div>


//         <div className="searchedUsers col-11 col-lg-7 m-auto border rounded-2 text-center p-2">
//           <p className="m-0 p-0">
//             <span>Name,phone:</span>
//             <button type="button" className="btn btn-outline-success mx-2 py-0 fw-semibold">
//               Add
//             </button>
//           </p>
//         </div>
//         <div className="selectedCandidateContainer col-11 col-lg-10 m-auto border text-center p-2 my-3">
//         <p className="m-0 p-0">
//           <span>Name,phone:</span>
//           <button type="button" className="btn btn-outline-danger mx-2 py-0 fw-semibold">
//             Remove
//           </button>
//         </p>
//       </div>

//       </div>

    
//       <div className="details row col-11 col-lg-10 m-auto mb-3 mt-4">
//         <div className="col-12 col-lg-5 m-auto mb-3">
//           <label className="col-12">Select Incident</label>
//           <select className="col-12 col-lg-10 p-2 rounded-2 fs-6" >
//             <option>Robbory</option>
//           </select>
//           <p></p>
//         </div>

//         <div className="col-12 col-lg-5 m-auto mb-3">             
//         <label className="col-12">Enter Incident Type(if you select other in incident type)</label>
//         <input type="text" placeholder="Enter other incident type here"  className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
//         <p></p>
//         </div>

//         <div className="col-12 col-lg-5 m-auto mb-3">
//         <label className="col-12">Enter Reason</label>
//         <input type="text" placeholder="Enter Reason."  className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
//         <p></p>
//         </div>
//         <div  className="col-12 col-lg-5 m-auto mb-3">
//         <label  className="col-12">Select Incident Date</label>
//         <input type="date" className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
//         <p></p>
//         </div>
//         <div className="col-12 col-lg-5 m-auto mb-3">
//         <label className="col-12">Select Evidance</label>
//         <input type="file" className="p-2 rounded-2 fs-6 col-12 col-lg-10"/>
//         <p></p>
//         <div className="selectedFiels"></div>
//       </div>
       
//       </div>

//       <div className="text-center my-3">
//         <button type="button" className="btn btn-success">Submit</button>
//       </div>

   
//     </div>
//   );
// };

// export default CreateComplaint;



     

import React, { useState } from "react";

const CreateRemark = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([
    { name: "John Doe", phone: "1234567890", aadhar: "123456789012" },
    { name: "Jane Smith", phone: "9876543210", aadhar: "987654321098" },
    { name: "Michael Johnson", phone: "4567890123", aadhar: "456789012345" },
    { name: "Emily Williams", phone: "7890123456", aadhar: "789012345678" }
  ]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Function to handle adding a user to the selected users
  const handleAddUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchedUsers(searchedUsers.filter((searchedUser) => searchedUser !== user));
    setSearchQuery('');
  };

  // Function to handle removing a user from the selected users
  const handleRemoveUser = (user) => {
    setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.trim() === "") {
      setSearchedUsers([]);
    } else {
      // Perform search based on search query (case-insensitive)
      const filteredUsers = users.filter((user) =>
        Object.values(user).some((value) =>
          value.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
      setSearchedUsers(filteredUsers);
    }
  };

  return (
    <div className="row pt-5 border pb-3 shadow-lg" style={{minHeight:'100vh'}}>
      {/* Search Input */}
      <div className="row p-3 m-auto">
        <div className="row col-11 col-lg-6 m-auto mb-3">
          <input
            type="search"
            className="p-2 fs-5 rounded-2 mb-3"
            placeholder="Search with Name, Phone, Aadhar.."
            value={searchQuery}
            onChange={handleSearchChange}
          />
       
        </div>

        {/* Searched Users Container */}
        {searchQuery.trim() !== "" && (
          <div className="searchedUsers col-11 row gap-3  m-auto border rounded-2 p-3">

            {searchedUsers.map((user, index) => (
              <div key={index} className="m-0 p-0 row gap-3 align-items-center border-bottom">
                <div className="col-7 d-flex flex-wrap">
                <p className="fw-medium mx-2 lh-1">Name:- {user.name} </p>
                <p className="fw-medium mx-2 lh-1">Phone:- {user.phone}</p>
                <p className="fw-medium mx-2 lh-1">Aadhar:- {user.aadhar}</p>
                </div>               
                <button
                  type="button"
                  className="btn btn-outline-success mx-2 col-3 mb-2 fw-semibold"
                  onClick={() => handleAddUser(user)}
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Selected Users Container */}
        <div className="selectedCandidateContainer col-11 col-lg-10 m-auto shadow-sm border text-center p-2 my-3">
          {/* Map through selectedUsers and display each selected user */}
          {selectedUsers.map((user, index) => (
            <p key={index} className="m-0 p-0">
              <span>{user.name}</span>
              <button
                type="button"
                className="btn btn-outline-danger mx-2 py-0 fw-semibold"
                onClick={() => handleRemoveUser(user)}
              >
                Remove
              </button>
            </p>
          ))}
        </div>
      </div>

      {/* Rest of the form */}
       {/* Rest of the form */}
       <div className="details row col-11 col-lg-10 m-auto mb-3 mt-4">
        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Select Incident</label>
          <select className="col-12 col-lg-10 p-2 rounded-2 fs-6">
            <option>Robbery</option>
          </select>
          <p></p>
        </div>
        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Amount Due(only if applicabel)</label>
          <input type="number" placeholder="Enter Amount" className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
          <p></p>
        </div>

        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Enter Incident Type (if you select other in incident type)</label>
          <input type="text" placeholder="Enter other incident type here" className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
          <p></p>
        </div>

        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Enter Reason</label>
          <textarea type="text" placeholder="Enter Reason." rows='4' className="p-2 rounded-2 fs-6 col-12 col-lg-10">
            </textarea>
            <p></p>
        </div>

        

        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Select Incident Date</label>
          <input type="date" className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
          <p></p>
        </div>
        <div className="col-12 col-lg-5 m-auto mb-3">
          <label className="col-12 fw-medium">Select Evidence</label>
          <input type="file" className="p-2 rounded-2 fs-6 col-12 col-lg-10" />
          <p></p>
          <div className="selectedFiles"></div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center my-3">
        <button type="button" className="btn btn-success fw-semibold">Submit</button>
      </div>
    </div>
  );
};

export default CreateRemark;





