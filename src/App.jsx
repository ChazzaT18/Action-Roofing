import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import GetQuote from "./Components/GetQuote";
import ContactUsPage from "./Pages/ContactUsPage";
import GalleryPage from "./Pages/GalleryPage"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ServicesPage from "./Pages/ServicesPage"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <GetQuote />
    </Router>
  );
}

export default App;
