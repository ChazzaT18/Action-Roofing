import { useEffect } from "react";
import LandingHero from "../Components/HomePage/LandingHero";
import ServicesHomePage from "../Components/HomePage/ServicesHomePage";
import TrustSection from "../Components/HomePage/TrustSection";
import WhyChooseUs from "../Components/HomePage/WhyChoseUs";
import GalleryHome from "../Components/HomePage/GalleryHome";
import ContactHome from "../Components/HomePage/ContactHome";
import Testimonials from "../Components/HomePage/TestimonialsHome";

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
      <GalleryHome></GalleryHome>
      <Testimonials></Testimonials>
      <ContactHome></ContactHome>
    </>
  );
};

export default HomePage;
