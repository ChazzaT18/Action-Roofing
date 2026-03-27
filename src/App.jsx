import React, { useState, createContext } from "react"; // Fixed import
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

const CurrentPageContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      <Router>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route
            path="/"
            element={<HomePage setCurrentPage={setCurrentPage} currentPage={currentPage} />}
          />
          <Route
            path="/contact-us"
            element={<ContactUsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />}
          />
          <Route
            path="/about-us"
            element={<AboutUsPage setCurrentPage={setCurrentPage} currentPage={currentPage} />}
          />
          <Route
            path="/services"
            element={<ServicesPage setCurrentPage={setCurrentPage} currentPage={currentPage} />}
          />
          
          {/* 2. Add the Emergency Repairs Route */}
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
            path="/gallery"
            element={<GalleryPage setCurrentPage={setCurrentPage} currentPage={currentPage} />}
          />
        </Routes>
        <Footer />
        <GetQuote currentPage={currentPage} />
      </Router>
    </CurrentPageContext.Provider>
  );
}

export default App;