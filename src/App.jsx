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
import FAQs from './components/FAQs';
import Analytics from "./components/analytics"
import Line from './components/linechart';
import Messaging from './components/messaging'
import Transactions from './components/transactions'
import Records from './components/records'
import Security from './components/security';
import Phoneverification from './components/phoneverification';
import Phoneverification2 from './components/phoneverification2';
import PhoneVerificationPin from './components/phoneverificationpin';
import SecurityQuestion from './components/securityquestion';
import Setting from './components/setting';
import Profile from './components/profile';
import Preferences from './components/preferences';
import ChangePassword from './components/changepassword';
import Backup from './components/backup';
import Backup2 from './components/backup2';
import Restore from './components/restore';
import Audit from './components/audit';
import Results from './components/results';
import Localization from './components/localization';
import Languages from './components/languages';
import Currencies from './components/currencies';
import Support from './components/support';
import View from './components/view';
import Trares from './components/trares'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Resets" element={<Resets />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/LookingToSell" element={<LookingToSell />} />
        <Route path="/HomeToSell" element={<HomeToSell />} />
        <Route path="/HomeAreYouLooking" element={<HomeAreYouLooking />} />
        <Route path="/NumberOfBeds" element={<NumberOfBeds />} />
        <Route path="/User" element={<User />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Line" element={<Line />} />
        <Route path="/Messaging" element={<Messaging/>} />
        <Route path="/Transactions" element={<Transactions/>} />
        <Route path="/Trares" element={<Trares/>} />
        <Route path="/Records" element={<Records/>} />
        <Route path="/Security" element={<Security/>} />
        <Route path="/Phoneverification" element={<Phoneverification/>} />
        <Route path="/Phoneverification2" element={<Phoneverification2/>} />
        <Route path="/PhoneVerificationPin" element={<PhoneVerificationPin/>} />
        <Route path="/SecurityQuestion" element={<SecurityQuestion/>} />
        <Route path="/Setting" element={<Setting/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Preferences" element={<Preferences/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />
        <Route path="/Backup" element={<Backup/>} />
        <Route path="/Backup2" element={<Backup2/>} />
        <Route path="/Restore" element={<Restore/>} />
        <Route path="/Audit" element={<Audit/>} />
        <Route path="/Results" element={<Results/>} />
        <Route path="/Localization" element={<Localization/>} />
        <Route path="/Languages" element={<Languages/>} />
        <Route path="/Currencies" element={<Currencies/>} />
        <Route path="/Support" element={<Support/>} />
        <Route path="/View" element={<View/>} />
      </Routes>
    </Router>

  );
}

export default App
