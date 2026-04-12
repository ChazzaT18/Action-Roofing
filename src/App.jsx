import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const CurrentPageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
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
        <div
          className={`bg-[#243453] transition-opacity duration-[1000ms] ease-in ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

          <div className="bg-white">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/contact-us"
                element={
                  <ContactUsPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/about-us"
                element={
                  <AboutUsPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <ServicesPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/services/emergency-repairs"
                element={
                  <EmergencyRepairsPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/services/slate-tile-roofing"
                element={
                  <SlateTilePage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/services/fascias-soffits-guttering"
                element={
                  <FasciaSoffitPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="/gallery"
                element={
                  <GalleryPage
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                }
              />
            </Routes>
          </div>

          <Footer />
          <GetQuote currentPage={currentPage} />
        </div>
      </Router>
    </CurrentPageContext.Provider>
  );
}

export default App;