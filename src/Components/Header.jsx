import { useState, useEffect } from "react";
import { Hammer, Phone, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = ({currentPage, setCurrentPage}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New State

  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 640;

      if (!isMobile && currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
          setIsMenuOpen(false); // Auto-close menu if user scrolls down
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <div className="fixed w-full z-20 top-0 start-0">
        {/* 1. Main Navigation Bar (Navy) */}
        <nav
          className={`bg-[#243453] text-[#F9D759] w-full relative z-40 transition-all duration-500 ease-in-out ${
            isScrolled ? "py-2 shadow-lg" : "py-4"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/images/Action Roofing logo.jpg"
                className={`hidden sm:block transition-all duration-500 ease-in-out object-contain ${
                  isScrolled
                    ? "xl:h-14 lg:h-12 md:h-10 sm:h-10"
                    : "xl:h-20 lg:h-16 md:h-14 sm:h-12"
                }`}
                alt="Action Roofing Logo"
              />
              <img
                src="/images/Action Roofing logo mobile.jpg"
                className="block sm:hidden h-12"
                alt="Action Roofing Logo"
              />
            </Link>

            <div className="flex md:order-2 space-x-3">
              <a
                href="tel:07768981913"
                className="group flex items-center gap-2 text-[#243453] bg-[#F9D759] hover:bg-[#F7CB28] cursor-pointer font-bold rounded-md text-xs lg:text-sm px-5 py-2.5 transition-all active:scale-95 shadow-md"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-slate-800 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

            {/* Desktop Nav Links */}
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
                {navLinks.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-center items-center"
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 transition-colors duration-200 ${currentPage === item.name.toLowerCase()? "text-yellow" : "text-white nav-link-hover"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* 2. MOBILE SLIDE-DOWN MENU */}
        <div
          className={`absolute w-full bg-[#565656] border-y-2 border-[#F9D759] transition-all duration-500 ease-in-out z-30 md:hidden ${
            isMenuOpen
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none shadow-xl"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-4 font-bold text-center">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block text-xl ${currentPage === item.name.toLocaleLowerCase()? "text-[#F9D759]" : "text-white"} py-2`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Sub-Header Utility Bar (Yellow) */}
        <div
          className={`w-full flex justify-center items-center text-[12px] sm:text-xs py-1.5 font-bold bg-[#F9D759] text-[#243453] shadow-md transition-transform duration-500 ease-in-out relative z-10 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } sm:translate-y-0`}
        >
          <div className="w-full max-w-screen-xl flex justify-between items-center px-6">
            <a
              href="tel:07768981913"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="max-sm:hidden" size={14} />
              <span>07768 981913</span>
            </a>
            <div className="opacity-40">|</div>
            <div className="flex items-center gap-2">
              <img
                src="/images/Pavillion.png"
                alt="Brighton"
                className="h-4 w-auto max-sm:hidden"
              />
              <span>Brighton & Hove</span>
            </div>
            <div className="opacity-40">|</div>
            <div className="flex items-center gap-2">
              <Hammer className="max-sm:hidden" size={14} />
              <span className="hidden xs:inline">
                Emergency Repairs Available
              </span>
              <span className="xs:hidden">Emergency Repairs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div
        className={`transition-all duration-500 ${
          isScrolled && window.innerWidth >= 640
            ? "h-[90px] sm:h-[100px] md:h-[120px]"
            : "h-[104px] sm:h-[126px] md:h-[140px]"
        }`}
      ></div>
    </>
  );
};

export default Header;
