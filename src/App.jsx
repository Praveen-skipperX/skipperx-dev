
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
import CreatorHub from './pages/creator-hub';
import TechCore from './pages/TechCore';
import Medical from './pages/Medical-edition';
import Login from './pages/login';
import Email from './pages/email';
import Contact from './pages/contact';
import Otp from './pages/otp';
import Cooking from './pages/cooking';
//import Forget from './pages/forget';
import Psychology from './pages/Psychology';


import ProductManagement from './pages/ProductManagement';
import CreatorPreneur from './pages/Digitalpreneur';

import Dashboard from './components/dashboard/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import GoogleCallback from './pages/GoogleCallback';


import Checkout from './pages/Checkout';
import Success from './pages/Success';



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
        <Route path="/creator-hub" element={<CreatorHub />} />
  
        
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />

        

        <Route path="/Core-Tech" element={<TechCore />} />
        <Route path="/Medical-edition" element={<Medical />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/auth/callback" element={<GoogleCallback />} />
        <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/product" element={<ProductManagement />} />
        <Route path="/Digitalpreneur" element={<CreatorPreneur />} />

        <Route path="/psychology" element={<Psychology />} />
        

      </Routes>

      
    </Router>
  );
}

export default App;
