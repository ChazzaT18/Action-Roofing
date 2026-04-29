import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import GetQuote from "./Components/GetQuote";
import ContactUsPage from "./Pages/ContactUsPage";
import GalleryPage from "./Pages/GalleryPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";
import EmergencyRepairsPage from "./Pages/ServicePages/EmergencyRepairsPage";
import Footer from "./Components/Footer";
import SlateTilePage from "./Pages/ServicePages/SlateTilePage";
import FasciaSoffitPage from "./Pages/ServicePages/FasciaSoffitPage";
import LoadingOverlay from "./Components/LoadingOverlay";
import PageLoader from "./Components/PageLoader";
import ChimneyRepairsPage from "./Pages/ServicePages/ChimneyRepairsPage";
import LeadworkPage from "./Pages/ServicePages/LeadworkPage";
import MossGutteringPage from "./Pages/ServicePages/MossGutteringPage";

const CurrentPageContext = createContext();

function AppContent({ currentPage, setCurrentPage, loading }) {
  const location = useLocation();
  const [pageTransitioning, setPageTransitioning] = useState(false);

  useEffect(() => {
    if (!loading) {
      setPageTransitioning(true);
      const timer = setTimeout(() => setPageTransitioning(false), 600);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div
      className={`bg-[#243453] transition-opacity duration-[1000ms] ease-in ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <PageLoader isVisible={pageTransitioning} />

      <div className={`bg-white transition-opacity duration-300 ${pageTransitioning ? "opacity-0" : "opacity-100"}`}>
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/contact-us" element={<ContactUsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/about-us" element={<AboutUsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services" element={<ServicesPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/emergency-repairs" element={<EmergencyRepairsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/chimney-repairs" element={<ChimneyRepairsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/slate-tile-roofing" element={<SlateTilePage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/leadwork" element={<LeadworkPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/fascias-soffits-guttering" element={<FasciaSoffitPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/services/moss-guttering-cleaning" element={<MossGutteringPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
          <Route path="/gallery" element={<GalleryPage setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
        </Routes>
      </div>

      <Footer />
      <GetQuote currentPage={currentPage} />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => {
      setTimeout(() => setLoading(false), 800);
    };
    document.body.style.backgroundColor = "#243453";
    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
      return () => window.removeEventListener("load", handleLoadComplete);
    }
  }, []);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <LoadingOverlay isVisible={loading} />
      <Router>
        <AppContent 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          loading={loading} 
        />
      </Router>
    </CurrentPageContext.Provider>
  );
}

export default App;