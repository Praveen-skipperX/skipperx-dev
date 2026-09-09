
import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import ArVr from './pages/Ar-Vr';
import Blog from './pages/blog';
import Checkout from './pages/Checkout';
import Contact from './pages/contact';
import Cooking from './pages/cooking';
import CreatorHub from './pages/creator-hub';
import CreatorPreneur from './pages/Digitalpreneur';
import DroneEngineering from './pages/DroneEngineering';
import Email from './pages/email';
import GoogleCallback from './pages/GoogleCallback';
import Home from './pages/Home';
import Login from './pages/login';
import Medical from './pages/Medical-edition';
import Otp from './pages/otp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductManagement from './pages/ProductManagement';
import RefundPolicy from './pages/RefundPolicy';
import RobotEngineering from './pages/RobotEngineering';
import StartupStack from './pages/StartupStack';
import Success from './pages/Success';
import TermsAndConditions from './pages/t & c';
import TechCore from './pages/TechCore';
import UIUXDesignPro from './pages/UIUX-Design-Pro';

const Psychology = lazy(() => import('./pages/Psychology'));



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={null}>
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
        <Route path="/ui-ux-design-pro" element={<UIUXDesignPro />} />
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
      </Suspense>

      
    </Router>
  );
}

export default App;
