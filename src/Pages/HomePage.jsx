import { useEffect } from "react";
import LandingHero from "../Components/HomePage/LandingHero";
import ServicesHomePage from "../Components/HomePage/ServicesHomePage";
import TrustSection from "../Components/HomePage/TrustSection";
import WhyChooseUs from "../Components/HomePage/WhyChoseUs";

const HomePage = ({ setCurrentPage, currentPage }) => {
  
  useEffect(() => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <>
    <LandingHero></LandingHero>
    <ServicesHomePage></ServicesHomePage>
    <TrustSection></TrustSection>
    <WhyChooseUs></WhyChooseUs>
    </>
  );
};

export default HomePage;
