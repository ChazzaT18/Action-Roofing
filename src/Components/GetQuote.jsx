import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetQuote = ({ currentPage }) => {
  const [showBar, setShowBar] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      // Show bar on every page once the user scrolls down 400px
      // This ensures it doesn't overlap your Hero text immediately
      const isScrolled = window.scrollY > 400;
      
      // If you want it to hide at the very bottom of long pages (like the footer), 
      // you can keep a high limit, or just remove it for simplicity.
      setShowBar(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call immediately to check position on mount (e.g., if user refreshes mid-page)
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]); // Re-run when page changes to reset scroll detection

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 px-4 pb-6 transition-transform duration-500 ease-in-out sm:hidden ${
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