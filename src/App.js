import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AOS from "aos";
import { useEffect, useState } from 'react';

import Login from './Components/UserComponent/Login';
import Register from './Components/UserComponent/Register';
import PaymentInfo from './Components/HostelComponent/PaymentInfo';
import Remark from './Components/Remark';
import ComplaintList from './Components/ManaHostelComponent/ComplaintList';
import UserProfile from './Components/UserComponent/UserProfile';
import Rooms from './Components/HostelComponent/Rooms';
import AboutPage from './Components/About';
import ListOfHostels from './Components/ListOfHostels';
import CreateRemark from './Components/HostelComponent/CreateRemark';
import RaisedRemarks from './Components/HostelComponent/RaisedRemarks';
import UserDashboard from './Components/UserComponent/UserDashboard';
import HostelRoomDetailedView from './Components/HostelComponent/RoomDetailedView';
import PendingHostel from './Components/ManaHostelComponent/PendingHostel';
import HostelDashboard from './Components/HostelComponent/HostelDashBoard';
import HostelDetailedView from './Components/HostelComponent/HostelDetailedView';
import HostelRegister from './Components/HostelComponent/HostelRegister';
import UserPaymentHistory from './Components/UserComponent/UserPaymentHistory';
import HostelRegistrationContactForm from './Components/HostelComponent/HostelRegistrationContactForm';
import AllRoomsOfHostel from './Components/HostelComponent/AllRoomsOfHostel';

import HostelPricingAndExplanationOfApp from './Components/HostelPricingAndExplanationOfApp'
import { MyProvider } from './Components/Context/cartContext';
import Cart from './Components/Cart';
import { NetworkStatusProvider } from './Components/Context/NetWorkStatusContext';
import Offline from './Components/Offline';



const App = () => {

  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
const [cart,setCart] =useState([])



  return (
    <div className='m-0 p-0'>
      <BrowserRouter>
      <NetworkStatusProvider>
     
       <MyProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}  />
          <Route exact path='/hostel_pricing_information' element={<HostelPricingAndExplanationOfApp/>} />
          <Route exact path='/user_dashboard' element={<UserDashboard/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/room_details' element={<HostelRoomDetailedView />} />
          <Route exact path='/hostel_details' element={<HostelDetailedView/>} />
          <Route exact path='/hostel_register' element={<HostelRegister/>} />
          <Route exact path='/hostel_register_contact' element={<HostelRegistrationContactForm/>} />
          <Route exact path='/rooms' element={<Rooms/>} />
          <Route exact path='/hostel_dashboard' element={<HostelDashboard/>} />
          <Route exact path='/payment_info' element={<PaymentInfo/>} />
          <Route exact path='/remark' element={<Remark/>} />
          <Route exact path='/complaints' element={<ComplaintList/>} />
          <Route exact path='/create_remark' element={<CreateRemark/>} />
          <Route exact path='/raised_remarks' element={<RaisedRemarks/>} />
          <Route exact path="/all_rooms_of_hostel" element={<AllRoomsOfHostel/>} />
          <Route exact path='/pending_hostel' element={<PendingHostel/>} />
          <Route exact path='/profile' element={<UserProfile/>} />  
          <Route exact path='/about' element={<AboutPage/>} />
          <Route exact path='/hostels_list' element={<ListOfHostels/>} />
          <Route exact path='/payment_history' element={<UserPaymentHistory/>} />
          <Route exact path='/cart' element={<Cart/>} />
     
        </Routes>
        </MyProvider>
           
      </NetworkStatusProvider>
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;










