import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { HiOutlinePhone } from "react-icons/hi";

const generateIndianPhoneNumber = () => {
  const prefixes = ['+91'];
  const number = faker.phone.number('##########');
  return `${prefixes[0]} ${number}`;
};

const generateTenants = () => {
  return Array.from({ length: 15 }, () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const fullName = `${firstName} ${lastName}`;
    
    return {
      id: faker.datatype.uuid(),
      name: fullName,
      roomNumber: faker.datatype.number({ min: 1, max: 100 }),
      phone: generateIndianPhoneNumber(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`,
    };
  });
};

const TenantsOfHostel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Generate tenants data once when the component mounts
    setTenants(generateTenants());
  }, []);

  const filteredTenants = tenants.filter(tenant =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='row col-11 col-lg-6 my-5 m-auto'>
      <div className='mb-3 col-9 m-auto'>
        <input
          type='search'
          placeholder='Search by name'
          className='col-12 text-center py-2 rounded-5 px-3 border'
          style={{outline: 'none'}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredTenants.map((tenant) => (
        <div key={tenant.id} className='shadow-sm border rounded-3 mb-3 text-center'>
          <img src={tenant.avatar} alt={tenant.name} className='rounded-2 my-2' />
          <div className='d-flex gap-2 flex-wrap align-items-center ms-3 rounded-3'>
            <p className='fw-bold'>{tenant.name}</p>
            <p>Room Number: {tenant.roomNumber}</p>
            <p className='bg-warning-subtle p-1'>{tenant.phone}</p>
            <HiOutlinePhone className='fs-3 mb-3 btn text-success bg-transparent border-0 p-0'/>
          </div>
          <button className='btn btn-info text-white fw-bold fs-6 text-nowrap mb-1'>View Info</button>
        </div>
      ))}
    </div>
  );
}

export default TenantsOfHostel;
