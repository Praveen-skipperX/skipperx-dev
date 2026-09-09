// src/pages/Home.jsx

// Components for the home sections
import EngineeringPrograms from '../components/EngineeringPrograms';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SuperStack from '../components/SuperStack';
import TestimonialCarousel from '../components/TestimonialCarousel';
import TrustSection from '../components/TrustSection';
// import Doers from '../components/Doers';
import BackedByBest from '../components/BackedByBest';
import CareerFormSection from '../components/CareerFormSection';
import Circle from '../components/Circle';
import Entrapreneur from '../components/Entrapreneur';
import Footer from '../components/Footer';
import LaunchSection from '../components/LaunchSection';
import SkippersAdvantage from '../components/SkippersAdvantage';
import WhyTrustUs from '../components/WhyTrustUs';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <Hero />
      <TrustSection />
      <TestimonialCarousel />
      <Entrapreneur />
      <EngineeringPrograms />
      <SuperStack />
      {/*<Doers /> */}
      <CareerFormSection />
      <SkippersAdvantage />
      <Circle />
      <LaunchSection />
      <BackedByBest />
      <WhyTrustUs />
      <Footer />
    </div>
  );
};

export default Home;
