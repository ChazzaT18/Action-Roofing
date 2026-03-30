import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetQuote = ({ currentPage }) => {
  const [showBar, setShowBar] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate how far we've scrolled from the top
      const scrollY = window.scrollY;
      
      // 2. Calculate the total height of the page minus the visible window height
      const totalPageHeight = document.documentElement.scrollHeight;
      const scrollableHeight = totalPageHeight - window.innerHeight;
      
      // 3. Logic for showing/hiding
      const isPastHero = scrollY > 400;
      
      // We hide the bar if we are within 300px of the absolute bottom
      const isNearBottom = (scrollableHeight - scrollY) < 300;

      if (isPastHero && !isNearBottom) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 px-4 pb-3 transition-transform duration-500 ease-in-out sm:hidden ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        to="/contact-us"
        className="w-full h-18 flex items-center justify-center bg-[#F9D759] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-[#243453]"
      >
        <span className="text-base font-black text-[#243453] tracking-wider">
          GET A FREE QUOTE
        </span>
      </Link>
    </div>
  );
};

export default GetQuote;