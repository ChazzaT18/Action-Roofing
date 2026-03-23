import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetQuote = ({ currentPage }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === "home" || currentPage == "about") {
        setShowBar(window.scrollY > 400 && window.scrollY < 7500);
      } else if (currentPage === "contact") {
        setShowBar(false);
      }
       else {
        setShowBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

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