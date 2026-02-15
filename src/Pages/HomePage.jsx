import { useEffect } from "react";
import LandingHero from "../Components/HomePage/LandingHero";

const HomePage = ({ setCurrentPage, currentPage }) => {
  
  useEffect(() => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  }, [setCurrentPage]);

  return (
    <>
    <LandingHero></LandingHero>
      <section className="bg-white py-20 h-[150vh] px-4 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#243453] border-l-4 border-[#F9D759] pl-4">
            Our Professional Roofing Services
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;
