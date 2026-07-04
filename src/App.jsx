import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Dogs from './components/Dogs';
import DogProfile from './components/DogProfile';
import Puppies from './components/Puppies';
import Booking from './components/Booking';
import Training from './components/Training';
import StudServices from './components/StudServices';
import Photoshoots from './components/Photoshoots';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  const handleViewProfile = (dog) => {
    setSelectedDog(dog);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProfile = () => {
    setSelectedDog(null);
    document.body.style.overflow = '';
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleCloseProfile(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Dog Profile Overlay */}
      {selectedDog && (
        <DogProfile dog={selectedDog} onClose={handleCloseProfile} />
      )}

      {loaded && (
        <div style={{ animation: 'fadeInApp 0.8s ease-out forwards' }}>
          <Navbar />
          <Hero />
          <About />
          <Dogs onViewProfile={handleViewProfile} />
          <Puppies />
          <Booking />
          <Training />
          <StudServices />
          <Photoshoots />
          <Services />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      )}
      <style>{`
        @keyframes fadeInApp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default App;



