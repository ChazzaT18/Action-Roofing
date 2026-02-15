import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetQuote = () => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling 300px
      if (window.scrollY > 400) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="/contact-us"
      className={`fixed bottom-0 left-0 w-full items-center justify-center flex sm:hidden h-18 z-50 shadow-2xl bg-[#F9D759] transition-transform duration-500 ease-in-out ${
        showBar ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="text-lg font-bold text-[#243453]">GET A FREE QUOTE</span>
    </Link>
  );
};

export default GetQuote;