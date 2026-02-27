import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import GetQuote from "./Components/GetQuote";
import ContactUsPage from "./Pages/ContactUsPage";
import GalleryPage from "./Pages/GalleryPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./Components/Footer";
import { createContext } from "react";

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
            path="/gallery"
            element={
              <GalleryPage
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            }
          />
        </Routes>
        <Footer></Footer>
        <GetQuote currentPage={currentPage} />
      </Router>
    </CurrentPageContext.Provider>
  );
}

export default App;
