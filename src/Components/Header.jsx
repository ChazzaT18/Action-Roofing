import { useState, useEffect } from "react";
import { Hammer, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  // State for mobile sliding utility bar
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State for desktop logo shrinking
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // 1. Shrink Logic (Desktop & Tablet)
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Hide/Show Logic (Mobile Only)
      if (window.innerWidth < 640) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling Down - Hide yellow bar
          setIsVisible(false);
        } else {
          // Scrolling Up - Show yellow bar
          setIsVisible(true);
        }
      } else {
        // Force visible on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <>
      <div className="fixed w-full z-20 top-0 start-0">
        {/* 1. Main Navigation Bar (Navy) */}
        <nav
          className={`bg-[#243453] text-[#F9D759] w-full border-b border-slate-700 relative z-30 transition-all duration-500 ease-in-out ${
            isScrolled ? "py-2 shadow-lg" : "py-4"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <Link to="/" className="flex items-center space-x-3">
              {/* Desktop/Tablet Logo: Shrinks on scroll */}
              <img
                src="/images/Action Roofing logo.jpg"
                className={`hidden sm:block transition-all duration-500 ease-in-out object-contain ${
                  isScrolled
                    ? "xl:h-14 lg:h-12 md:h-10 sm:h-10"
                    : "xl:h-20 lg:h-16 md:h-14 sm:h-12"
                }`}
                alt="Action Roofing Logo"
              />

              {/* Mobile Logo: Stays consistent size */}
              <img
                src="/images/Action Roofing logo mobile.jpg"
                className="block sm:hidden h-12 transition-all"
                alt="Action Roofing Logo"
              />
            </Link>

            {/* Action Buttons */}
            <div className="flex md:order-2 space-x-3">
              <a
                href="tel:07768981913"
                className="group flex items-center gap-2 text-[#243453] bg-[#F9D759] hover:bg-[#F7CB28] cursor-pointer font-bold rounded-md text-xs lg:text-sm px-5 py-2.5 transition-all active:scale-95 shadow-md"
              >
                <Phone size={14} />
                <span className="">Call Now</span>
              </a>

              {/* Mobile Hamburger Menu */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
                <li className="flex justify-center items-center">
                  <Link
                    to="/"
                    className="block nav-link-hover px-3 text-[#F9D759] hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    to="/about-us"
                    className="block nav-link-hover px-3 text-[#F9D759] hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    to="/services"
                    className="block nav-link-hover px-3 text-[#F9D759] hover:text-white transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    to="/gallery"
                    className="block nav-link-hover px-3 text-[#F9D759] hover:text-white transition-colors duration-200"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    to="/contact-us"
                    className="block nav-link-hover px-3 text-[#F9D759] hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 2. Sub-Header Utility Bar (Yellow) */}
        <div
          className={`w-full flex justify-center items-center text-[12px] sm:text-xs py-1.5 font-bold bg-[#F9D759] text-[#243453] shadow-md transition-transform duration-500 ease-in-out relative z-10 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } sm:translate-y-0`}
        >
          <div className="w-full max-w-screen-xl flex justify-between items-center px-6">
            <a
              href="tel:07768981913"
              className="flex items-center gap-2 hover:underline transition-all"
            >
              <Phone className="max-sm:hidden" size={14} fill="none" />
              <span>07768 981913</span>
            </a>
            <div className="opacity-40">|</div>

            <div className="flex items-center gap-2">
              <img
                src="/images/Pavillion.png"
                alt="Brighton Pavilion"
                className="h-4 mb-0.5 w-auto object-contain max-sm:hidden"
              />
              <span>Brighton & Hove</span>
            </div>

            <div className="opacity-40">|</div>
            <div className="flex items-center gap-2">
              <Hammer className="max-sm:hidden" size={14} />
              <span className="hidden xs:inline">
                Emergency Roof Repairs Available
              </span>
              <span className="xs:hidden">Emergency Repairs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Spacer: Prevents page content from jumping under the fixed header */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "h-[90px] sm:h-[110px] md:h-[120px]"
            : "h-[104px] sm:h-[136px] md:h-[152px]"
        }`}
      ></div>
    </>
  );
};

export default Header;
