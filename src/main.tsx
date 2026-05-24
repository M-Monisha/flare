import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// UI Components
import ConsultationModal from "@/components/ui/consultation-modal"
import SplashScreen from "@/components/SplashScreen"

// Brand Components
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import AllServices from "@/pages/AllServices";
import ServiceDetail from "@/pages/ServiceDetail";
import Methodology from "@/pages/Methodology";
import Results from "@/pages/Results";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const openModal = () => setConsultationModalOpen(true);
  const closeModal = () => setConsultationModalOpen(false);

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <div style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.4s ease' }}>
        <Router>
          <ScrollToTop />
          <Navbar openModal={openModal} />
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/services" element={<Services openModal={openModal} />} />
            <Route path="/services/all" element={<AllServices />} />
            <Route path="/services/:slug" element={<ServiceDetail openModal={openModal} />} />
            <Route path="/methodology" element={<Methodology openModal={openModal} />} />
            <Route path="/results" element={<Results openModal={openModal} />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About openModal={openModal} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer openModal={openModal} />
          <WhatsAppButton />
          <ConsultationModal isOpen={isConsultationModalOpen} onClose={closeModal} />
        </Router>
      </div>
    </>
  );
}

const rootElement = document.getElementById('react-root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
