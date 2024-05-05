import React, { useEffect, useState } from 'react'
import './index.css'
import Footer from '../Footer';


const AssociationRegister = () => {
    const [associationName, setAssociationName] = useState("");

    const [area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState('');
    const [pincode,setPincode] =useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [areas, setAreas] = useState([]);


    useEffect(() => {
        // Fetch states data when component mounts
        fetchStates();
    }, []);

    const fetchStates = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/states");
            const data = await response.json();
            setStates(() => (data)); // Assuming data is an array of states

        } catch (error) {
            console.error("Error fetching states:", error);
        }
    };


    const fetchCities = async (selectedState) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/states/${parseInt(selectedState) + 1}/cities`);
            const data = await response.json();
            setCities(data); // Assuming data is an array of cities for the selected state
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const fetchAreas = async (selectedCity) => {

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/states/city/${parseInt(selectedCity)}/areas`);
            const data = await response.json();
            setAreas(data); // Assuming data is an array of areas for the selected city
        } catch (error) {
            console.error("Error fetching areas:", error);
        }
    };

    const AssociationNameFun = (event) => {
        setAssociationName(event.target.value);
    };

    const pincodeFun = (event)=>{
        setPincode(event.target.value);
    }

   
    const registerAssociationFun = async () => {
        // Validation
        if (!associationName || !area || !city || !state) {
            alert("All fields are required!");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(associationName)) {
            alert("Invalid hostel name!");
            return;
        }

     const token = localStorage.getItem('token');

fetch("http://127.0.0.1:8000/api/association", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token 
    },
    body: JSON.stringify({
        name: associationName,
        state_id: state,
        city_id: city,
        area_id: area,
        pincode: pincode
    }),
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Handle the response from the backend
        console.log(data);

    })
    .catch((error) => {
        // Handle errors
        console.error("There was a problem with the fetch operation:", error);
    });

    }

return (
    <div className="mt-4">
        <div className="d-flex flex-column justify-conten-center shadow-lg mb-5 col-11 m-auto contact-form text-black bg-white col-lg-6 gap-2 border-0 rounded-3 p-4">
            <h3 className="text-center">Association Registration Form</h3>

            <label htmlFor="" className="fw-Medium">
                Association Name
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={AssociationNameFun}
                type="text"
                placeholder="Abc Association"
            />

            <label className="fw-Medium">State</label>
            <select
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2"
                onChange={(e) => {
                    fetchCities(e.target.value);
                    setState(() => e.target.value);
                }}
            >
                <option value="">Select State</option>
                {states.map((state) => (
                    <option key={state.id} value={state.id}>
                        {state.name}
                    </option>
                ))}
            </select>

            {/* City Select */}
            <label className="fw-Medium">City</label>
            <select
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2"
                onChange={(e) => {
                    fetchAreas(e.target.value);
                    setCity(() => (e.target.value))
                }}
            >
                <option value="">Select City</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>

            {/* Area Select */}
            <label className="fw-Medium">Area</label>
            <select
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2 px-2"
                onChange={(e) => setArea(e.target.value)}
            >
                <option value="">Select Area</option>
                {areas.map((area) => (
                    <option key={area.id} value={area.id}>
                        {area.name}
                    </option>
                ))}
            </select>

            <label htmlFor="" className="fw-Medium">
                Pincode
            </label>
            <input
                className="rounded-3 fs-6 p-2 mb-3 mb-md-2"
                onChange={pincodeFun}
                type="number"
                placeholder="500008"
            />

            <button
                type="button"
                onClick={registerAssociationFun}
                className="text-white btn fw-semibold col-4 mt-5 ms-auto"
                style={{ backgroundColor: "#081735" }}
            >
                Submit
            </button>
        </div>
        <Footer />
    </div>
);
  };

export default AssociationRegister
