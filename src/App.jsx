// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/login'
import Resets from './components/resetpage'
import Verification from './components/verification'
import Dashboard from './components/dashboard';
import Properties from './components/properties';
import AddProperty from './components/addproperty';
import LookingToSell from './components/lookingtosell';
import HomeToSell from './components/hometosell';
import HomeAreYouLooking from './components/homeareyoulooking';
import NumberOfBeds from './components/numberofbeds';
import User from './components/user';
import AddUser from './components/adduser';
import Content from './components/content';
import Blog from './components/blog';
import Faqs from './components/FAQs';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Resets" element={<Resets/>} />
        <Route path="/Verification" element={<Verification/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Properties" element={<Properties/>} />
        <Route path="/AddProperty" element={<AddProperty/>} />
        <Route path="/LookingToSell" element={<LookingToSell/>} />
        <Route path="/HomeToSell" element={<HomeToSell/>} />
        <Route path="/HomeAreYouLooking" element={<HomeAreYouLooking/>} />
        <Route path="/NumberOfBeds" element={<NumberOfBeds/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/AddUser" element={<AddUser/>} />
        <Route path="/Content" element={<Content/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Faqs" element={<Faqs/>} />
    </Routes>
</Router>

  );}

export default App
