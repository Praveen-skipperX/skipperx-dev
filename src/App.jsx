
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import TermsAndConditions from './pages/t & c'
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import About from './pages/About';
import Blog from './pages/blog';
import DroneEngineering from './pages/DroneEngineering';
import RobotEngineering from './pages/RobotEngineering';
import ArVr from './pages/Ar-Vr';
import StartupStack from './pages/StartupStack';
import TechCore from './pages/TechCore';
import CreatorsHub from './pages/CreatorsHub';
import Login from './pages/login';
import Email from './pages/email';
import Contact from './pages/contact';
import Otp from './pages/otp';
import Cooking from './pages/cooking';
//import Forget from './pages/forget';


import ProductManagement from './pages/ProductManagement';
import CreatorPreneur from './pages/Creatorpreneur';

import Dashboard from './components/dashboard/Dashboard';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/t & c" element={<TermsAndConditions />} />
        <Route path="/Drone-Engineering" element={<DroneEngineering />} />
        <Route path="/Robot-Engineering" element={<RobotEngineering />} />
        <Route path="/ar-vr" element={<ArVr />} />
        <Route path="/Startup-Stack" element={<StartupStack />} />
        <Route path="/Core-Tech" element={<TechCore />} />
        <Route path="/creators-hub" element={<CreatorsHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/product" element={<ProductManagement />} />
        <Route path="/creator" element={<CreatorPreneur />} />
        

      </Routes>

      
    </Router>
  );
}

export default App;
